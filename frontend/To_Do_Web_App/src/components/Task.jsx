import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointRight,
  faTrashCan,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Task(prop) {
  const [done, setDone] = useState(prop.status);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => location.reload())
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div
      className={`${
        done
          ? "line-through bg-placeholderGrey"
          : "bg-secondGrey active:ring-2 hover:bg-white"
      } mobile:h-[10vh] mobile:w-[70vw] tablet:h-[11vh] tablet:w-[65vw] laptop:h-[9vh] laptop:w-[41vw] mobile:rounded-[4px] tablet:rounded-[6px] laptop:rounded-[5px] drop-shadow-md mobile:px-2 tablet:px-5 laptop:px-3 py-1 flex shrink-0 `}
    >
      <div
        className={`h-full mobile:w-[10vw] tablet:w-[10vw] laptop:w-[8vw] ${
          done ? "line-through text-primaryGrey" : "text-textGrey"
        } flex items-center justify-center`}
      >
        {done === false ? (
          <FontAwesomeIcon
            className="mobile:text-[16px] tablet:text-[27px] laptop:text-[20px]"
            icon={faHandPointRight}
            onClick={() => {
              setDone(true);
              handleEdit(prop.id);
            }}
          />
        ) : (
          <FontAwesomeIcon
            className="mobile:text-[16px] tablet:text-[27px] laptop:text-[20px]"
            icon={faCheck}
            onClick={() => {
              setDone(false);
              handleEdit(prop.id);
            }}
          />
        )}
      </div>
      <div
        className={`h-full mobile:w-[50vw] tablet:w-[45vw] laptop:w-[25vw] mobile:text-[16px] tablet:text-[25px] laptop:text-[20px] ${
          done ? "line-through text-primaryGrey" : "text-textGrey"
        } flex items-center justify-center`}
      >
        {prop.task}
      </div>
      <div
        className={`h-full mobile:w-[10vw] tablet:w-[10vw] laptop:w-[8vw] ${
          done ? "line-through text-primaryGrey" : "text-textGrey"
        } flex items-center justify-center`}
      >
        <FontAwesomeIcon
          className="mobile:text-[16px] tablet:text-[27px] laptop:text-[20px] active:text-primaryGrey"
          icon={faTrashCan}
          onClick={() => handleDelete(prop.id)}
        />
      </div>
    </div>
  );
}
export default Task;
