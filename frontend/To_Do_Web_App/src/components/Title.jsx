import React from "react"

function Title() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto gap-1">
      <p className="font-inter font-medium mobile:text-[28px] tablet:text-[55px] laptop:text-[45px] text-darkGrey">Simple | To Do App</p>
      <p className="text-thirdGrey font-jomhuria mobile:text-[12px] tablet:text-[23px] laptop:text-[19.5px]">A basic to do app created using MERN stack</p>
    </div>
  )
}
export default Title