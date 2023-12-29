function TaskInput() {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="flex pt-3 gap-1">
        <input
          type="text"
          className="bg-white mobile:w-[170px] mobile:rounded-[3px] mobile:pl-2 mobile:text-[12px] text-textGrey outline-none focus:ring-2 drop-shadow placeholder:text-placeholderGrey"
          placeholder="Enter your task here..."
        />
        <button className="bg-green text-white h-auto mobile:w-[38px] mobile:px-1">
          Add
        </button>
      </div>
    </div>
  );
}
export default TaskInput;
