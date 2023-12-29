import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointRight,
  faTrashCan,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

function Task() {
  const [done, setDone] = useState(false);
  return (
    <div
      className={`${
        done
          ? "line-through bg-placeholderGrey"
          : "bg-secondGrey active:ring-2 hover:bg-white"
      } mobile:h-[10vh] mobile:w-[70vw] tablet:h-[11vh] tablet:w-[65vw] mobile:rounded-[4px] tablet:rounded-[6px] drop-shadow-md mobile:px-2 tablet:px-5 py-1 flex shrink-0 `}
    >
      <div
        className={`h-full mobile:w-[10vw] tablet:w-[10vw] ${
          done ? "line-through text-primaryGrey" : "text-textGrey"
        } flex items-center justify-center`}
      >
        {!done ? (
          <FontAwesomeIcon
            className="mobile:text-[16px] tablet:text-[27px]"
            icon={faHandPointRight}
            onClick={() => {
              setDone(true);
            }}
          />
        ) : (
          <FontAwesomeIcon
            className="mobile:text-[16px] tablet:text-[27px]"
            icon={faCheck}
            onClick={() => {
              setDone(false);
            }}
          />
        )}
      </div>
      <div
        className={`h-full mobile:w-[50vw] tablet:w-[45vw] mobile:text-[16px] tablet:text-[25px] ${
          done ? "line-through text-primaryGrey" : "text-textGrey"
        } flex items-center justify-center`}
      >
        deelaka
      </div>
      <div
        className={`h-full mobile:w-[10vw] tablet:w-[10vw] ${
          done ? "line-through text-primaryGrey" : "text-textGrey"
        } flex items-center justify-center`}
      >
        <FontAwesomeIcon
          className="mobile:text-[16px] tablet:text-[27px]"
          icon={faTrashCan}
        />
      </div>
    </div>
  );
}
export default Task;
