import { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";

const tasks = [
  {
    id: crypto.randomUUID(),
    title: "Finish Project Proposal",
    description:
      "Complete the project proposal document and submit it to the manager by EOD.",
  },
  {
    id: crypto.randomUUID(),
    title: "Team Meeting",
    description:
      "Attend the weekly team meeting to discuss project progress and upcoming deadlines.",
  },
  {
    id: crypto.randomUUID(),
    title: "Code Review",
    description:
      "Review the latest PRs and provide feedback to ensure code quality and best practices.",
  },
  {
    id: crypto.randomUUID(),
    title: "Write Documentation",
    description:
      "Update the API documentation with new endpoints and usage examples.",
  },
  {
    id: crypto.randomUUID(),
    title: "Client Presentation",
    description:
      "Prepare slides and present the project demo to the client on Friday.",
  },
  {
    id: crypto.randomUUID(),
    title: "Fix UI Bugs",
    description:
      "Resolve layout and styling issues reported by the QA team in the latest sprint.",
  },
  {
    id: crypto.randomUUID(),
    title: "Database Backup",
    description: "Schedule a full database backup and verify data integrity.",
  },
  {
    id: crypto.randomUUID(),
    title: "Update Dependencies",
    description:
      "Upgrade project dependencies to the latest versions and check for breaking changes.",
  },
  {
    id: crypto.randomUUID(),
    title: "Write Blog Post",
    description:
      "Draft a technical blog post about best practices in React state management.",
  },
  {
    id: crypto.randomUUID(),
    title: "Plan Sprint Tasks",
    description:
      "Break down user stories into smaller tasks and assign them to team members for the next sprint.",
  },
];

const TaskList = () => {
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

  const handleSubmit = () => {
    if ("id" in taskData) {
      console.log("edit");
    } else {
      console.log("add");
    }
  };
  return (
    <div className="w-full h-screen md:w-[300px] md:h-[500px] bg-[#232529] relative">
      <div
        className={`w-full transition-all duration-300 p-2 ${
          showForm ? "h-[150px]" : "h-[0px]"
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

      <div
        className={`flex-col
      ${showForm ? "h-[calc(100%-150px)]" : "h-[100%]"}
        w-full h-[calc(100%-150px)] border border-gray-500 p-2 overflow-y-scroll scrollbar-none`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {tasks.map((task, index) => (
          <TaskItem
            task={task}
            key={index}
            setTaskData={setTaskData}
            setShowForm={setShowForm}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
