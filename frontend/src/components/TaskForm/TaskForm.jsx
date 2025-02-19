const TaskForm = ({
  taskData,
  toggleForm,
  handleSubmit,
  handleFormDataChange,
}) => {
  return (
    <>
      <div
        className="w-[20px] h-[20px] cursor-pointer bg-green-400 rounded-full absolute right-[-10px] top-[-10px]"
        onClick={toggleForm}
      ></div>
      <div className="w-full h-full  flex flex-col justify-evenly px-0 overflow-hidden">
        <input
          name="title"
          value={taskData.title}
          onChange={handleFormDataChange}
          className="w-full h-[30px] border border-gray-500 p-1 text-xs outline-0"
          placeholder="Title"
        />
        <textarea
          name="description"
          value={taskData.description}
          onChange={handleFormDataChange}
          className="w-full h-[70px] border border-gray-500 p-1 text-xs outline-0"
          placeholder="Description"
        />
        <div className="w-full h-[50px] border  border-gray-500 flex items-center justify-end overflow-hidden">
          <button
            onClick={handleSubmit}
            className="h-[25px] w-auto p-0 m-0 text-xs border-none outline-0 flex items-center justify-end bg-blue-400 px-5 mr-2"
          >
            →
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
