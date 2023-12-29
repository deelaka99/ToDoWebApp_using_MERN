import React from "react";
import Task from "./Task";

function TaskList() {
  return (
    <div className="mobile:w-[75vw] mobile:h-[50vh] mobile:mt-3 mobile:pt-3 tablet:w-[68vw] tablet:h-[55vh] tablet:mt-7 tablet:pt-0 laptop:w-[43vw] laptop:h-[50vh] laptop:mt-5 laptop:pt-0 flex flex-col items-center justify-start mobile:gap-1 tablet:gap-3 overflow-auto">
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
