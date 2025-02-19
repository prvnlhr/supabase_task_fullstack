import { useEffect, useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";
import {
  getAllTasks,
  editTask,
  addTask,
  deleteTask,
} from "../../services/taskService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
  });

  const toggleForm = () => {
    setTaskData({
      title: "",
      description: "",
    });
    setShowForm((prev) => !prev);
  };

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (taskData.id) {
      // edit task
      try {
        const updatedTask = await editTask(taskData.id, taskData);
        console.log("Task updated:", updatedTask);
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskData.id ? updatedTask : task
          )
        );
      } catch (error) {
        console.error("Error updating task:", error);
      }
    } else {
      try {
        // add new task
        const newTask = await addTask(taskData);
        console.log("New task added:", newTask);
        setTasks((prevTasks) => [...prevTasks, newTask]);
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      console.log("Task deleted:", id);

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskData = await getAllTasks();
        setTasks(taskData);
      } catch (err) {
        console.error("Failed to fetch task details:", err);
      }
    };

    fetchTask();
  }, []);

  return (
    <div className="w-full h-screen md:w-[300px] md:h-[500px] bg-[#232529] relative flex flex-col">
      {/* Form section */}
      <div
        className={`w-full transition-all duration-300 p-2 ${
          showForm ? "h-[150px]" : "h-0"
        } border border-gray-500`}
      >
        <TaskForm
          toggleForm={toggleForm}
          taskData={taskData}
          setTaskData={setTaskData}
          handleSubmit={handleSubmit}
          handleFormDataChange={handleFormDataChange}
        />
      </div>

      {/* Task list section */}
      <div
        className={`flex-grow w-full p-2 overflow-y-scroll ${
          showForm ? "h-[calc(100%-150px)]" : "h-full"
        } border border-gray-500`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {tasks.map((task, index) => (
          <TaskItem
            task={task}
            key={index}
            setTaskData={setTaskData}
            setShowForm={setShowForm}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
