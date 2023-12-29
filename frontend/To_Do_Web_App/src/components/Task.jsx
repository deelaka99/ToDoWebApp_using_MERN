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
      } mobile:h-[10vh] mobile:w-[70vw] mobile:rounded-[4px] drop-shadow-md mobile:px-2 py-1 flex shrink-0 `}
    >
      <div
        className={`h-full w-[10vw] ${
          done ? "line-through text-primaryGrey" : "text-textGrey"
        } flex items-center justify-center`}
      >
        {!done ? (
          <FontAwesomeIcon
            className="mobile:text-[16px]"
            icon={faHandPointRight}
            onClick={() => {
              setDone(true);
            }}
          />
        ) : (
          <FontAwesomeIcon
            className="mobile:text-[16px]"
            icon={faCheck}
            onClick={() => {
              setDone(false);
            }}
          />
        )}
      </div>
      <div
        className={`h-full w-[50vw]  ${
          done ? "line-through text-primaryGrey" : "text-textGrey"
        } flex items-center justify-center`}
      >
        deelaka
      </div>
      <div
        className={`h-full w-[10vw] ${
          done ? "line-through text-primaryGrey" : "text-textGrey"
        } flex items-center justify-center`}
      >
        <FontAwesomeIcon className="mobile:text-[16px]" icon={faTrashCan} />
      </div>
    </div>
  );
}
export default Task;
