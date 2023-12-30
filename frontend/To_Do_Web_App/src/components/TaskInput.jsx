import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function TaskInput() {
  const [task, setTask] = useState();

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="flex pt-3 mobile:gap-1 tablet:gap-2">
        <input
          type="text"
          className="bg-white font-inter mobile:w-[227px] mobile:h-[36px] tablet:w-[400px] tablet:h-[55px] laptop:w-[350px] laptop:h-[45px] mobile:rounded-[3px] tablet:rounded-[5px] laptop:rounded-[4px] mobile:pl-2 tablet:pl-10 laptop:pl-7 mobile:text-[12px] tablet:text-[20px] laptop:text-[18px] text-textGrey outline-none focus:ring-2 drop-shadow placeholder:text-placeholderGrey"
          placeholder="Enter your task here..."
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button
          onClick={handleAdd}
          type="button"
          className="bg-green text-white h-auto w-auto mobile:px-2 tablet:px-3 laptop:px-2 mobile:rounded-[6px] laptop:rounded-[5px] drop-shadow active:bg-darkGrey active:drop-shadow-md"
        >
          <FontAwesomeIcon
            className="mobile:text-[16px] tablet:text-[48px] laptop:text-[40px]"
            icon={faPlus}
          />
        </button>
      </div>
    </div>
  );
}
export default TaskInput;
