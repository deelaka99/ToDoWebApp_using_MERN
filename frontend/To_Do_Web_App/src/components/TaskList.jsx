import React, { useEffect, useState } from "react";
import Task from "./Task";
import axios from "axios";

function TaskList() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setToDos(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mobile:w-[75vw] mobile:h-[50vh] mobile:mt-3 mobile:py-2 tablet:w-[68vw] tablet:h-[55vh] tablet:mt-7 tablet:py-3 laptop:w-[43vw] laptop:h-[50vh] laptop:mt-5 laptop:py-3 flex flex-col items-center justify-start mobile:gap-1 tablet:gap-3 overflow-auto">
      {toDos.length === 0 ? (
        <div className="h-full w-full flex items-center justify-center text-textGrey font-inter">
          <h2>No Record</h2>
        </div>
      ) : (
        toDos.map((task, key) => {
          return (
            <Task key={key} id={task._id} task={task.task} status={task.done} />
          );
        })
      )}
    </div>
  );
}

export default TaskList;
