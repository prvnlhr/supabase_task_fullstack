import { API as api } from "../api/axiosConfig";

// 1. Get all tasks
export const getAllTasks = async () => {
  try {
    const response = await api.get("/api/tasks");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// 2. Edit a task by ID
export const editTask = async (id, updatedData) => {
  try {
    const response = await api.put(`/api/tasks/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error editing task:", error);
    throw error; // Throw error to be handled elsewhere
  }
};

// 3. Delete a task by ID
export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/api/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

// 4. Add a new task
export const addTask = async (taskData) => {
  try {
    const response = await api.post("/api/tasks", taskData);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};
