import React from "react";
import Title from "./Title";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function Home() {
  return (
    <div className="h-screen w-screen bg-primaryGrey flex flex-col justify-center items-center mobile:px-3 mobile:py-3">
      <Title />
      <TaskInput />
      <TaskList />
    </div>
  );
}
export default Home;
