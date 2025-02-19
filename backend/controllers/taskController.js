import taskServices from "../services/tasksServices.js";

const taskController = {
  // Get all tasks
  getTasks: async (req, res) => {
    try {
      const tasks = await taskServices.getTasks();
      res.status(200).json(tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching tasks." });
    }
  },

  // Get a task by ID
  getTaskById: async (req, res) => {
    const { taskId } = req.params;
    try {
      const task = await taskServices.getTaskById(taskId);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json(task);
    } catch (error) {
      console.error("Error fetching task:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching the task." });
    }
  },

  // Create a new task
  createTask: async (req, res) => {
    const { title, description } = req.body;
    try {
      const taskData = { title, description };
      const newTask = await taskServices.createTask(taskData);
      res.status(201).json(newTask);
    } catch (error) {
      console.error("Error creating task:", error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the task." });
    }
  },

  // Update an existing task
  updateTask: async (req, res) => {
    const { taskId } = req.params;
    const { title, description } = req.body;
    try {
      const updatedData = { title, description };
      const updatedTask = await taskServices.updateTask(taskId, updatedData);
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error("Error updating task:", error);
      res
        .status(500)
        .json({ error: "An error occurred while updating the task." });
    }
  },

  // Delete a task
  deleteTask: async (req, res) => {
    const { taskId } = req.params;
    try {
      await taskServices.deleteTask(taskId);
      res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      console.error("Error deleting task:", error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the task." });
    }
  },
};

export default taskController;
