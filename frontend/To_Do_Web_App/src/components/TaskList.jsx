import React from "react";
import Task from "./Task";

function TaskList() {
  return (
    <div className="mobile:w-[75vw] mobile:h-[50vh] mobile:mt-3 mobile:pt-3 flex flex-col items-center justify-start mobile:gap-1 overflow-auto">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
}

export default TaskList;
