const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ToDoModel = require("./Models/Todo");
const { MONGO_URI } = process.env;

const app = express();
// app.use(cors());
app.use(
  cors({
    origin: ["*"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

const connectWithRetry = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
      // Retry logic with a delay
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

app.post("/add", (req, res) => {
  const task = req.body.task;
  ToDoModel.create({
    task: task,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/get", (req, res) => {
  ToDoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  ToDoModel.findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  ToDoModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// app.listen(3001, () => {
//   console.log("Server is Running");
// });
