import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function TaskInput() {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="flex pt-3 gap-1">
        <input
          type="text"
          className="bg-white font-inter mobile:w-[180px] mobile:rounded-[3px] mobile:pl-2 mobile:text-[12px] text-textGrey outline-none focus:ring-2 drop-shadow placeholder:text-placeholderGrey"
          placeholder="Enter your task here..."
        />
        <button className="bg-green text-white h-auto w-auto mobile:px-2 mobile:rounded-[4px] drop-shadow active:bg-darkGrey active:drop-shadow-md">
          <FontAwesomeIcon className="mobile:text-[16px]" icon={faPlus} />
        </button>
      </div>
    </div>
  );
}
export default TaskInput;
