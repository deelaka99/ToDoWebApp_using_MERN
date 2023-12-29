import React from "react";
import Title from "./Title";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import Footer from "./Footer";

function Home() {
  return (
    <div className="h-screen w-screen bg-primaryGrey flex flex-col justify-center items-center mobile:px-3 mobile:py-3">
      <Title />
      <TaskInput />
      <TaskList />
      <Footer />
    </div>
  );
}
export default Home;
