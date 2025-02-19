const TaskItem = ({ task, setTaskData, setShowForm, handleDeleteTask }) => {
  const handleEdit = () => {
    setShowForm(true);
    setTaskData(task);
  };
  return (
    <>
      <div className="flex w-full h-[80px] bg-[#1D1F2A] border border-gray-600 my-5 flex-col overflow-y-hidden relative">
        <div
          className="absolute top-[0px] right-[0px] w-[15px] h-[15px] flex items-center justify-center text-xs bg-red-400 cursor-pointer"
          onClick={() => handleDeleteTask(task.id)}
        >
          ×
        </div>
        <div className="flex items-center w-full  h-[30px] px-2">
          <p className="text-sm text-[skyblue]">{task.title}</p>
        </div>
        <div className="flex w-full h-[calc(100%-30px)] border border-gray-600 items-center overflow-y-hidden px-2 py-2 relative">
          <div
            className="absolute top-[0px] right-[0px] w-[15px] h-[15px] flex items-center justify-center text-xs cursor-pointer"
            onClick={handleEdit}
          >
            ✎
          </div>
          <p
            className="text-xs text-[#8b98a5]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              overflowY: "hidden",
            }}
          >
            {task.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
