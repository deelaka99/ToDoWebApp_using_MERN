import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function TaskInput() {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="flex pt-3 gap-1">
        <input
          type="text"
          className="bg-white font-inter mobile:w-[227px] mobile:h-[36px] tablet:w-[400px] tablet:h-[55px] mobile:rounded-[3px] tablet:rounded-[5px] mobile:pl-2 tablet:pl-10 mobile:text-[12px] tablet:text-[20px] text-textGrey outline-none focus:ring-2 drop-shadow placeholder:text-placeholderGrey"
          placeholder="Enter your task here..."
        />
        <button className="bg-green text-white h-auto w-auto mobile:px-2 tablet:px-3 mobile:rounded-[6px] drop-shadow active:bg-darkGrey active:drop-shadow-md">
          <FontAwesomeIcon className="mobile:text-[16px] tablet:text-[48px]" icon={faPlus} />
        </button>
      </div>
    </div>
  );
}
export default TaskInput;
