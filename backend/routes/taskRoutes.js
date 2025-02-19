import express from "express";
import taskController from "../controllers/taskController.js";
const router = express.Router();

// GET all tasks
router.get("/", taskController.getTasks);

// GET a task by its ID
router.get("/:taskId", taskController.getTaskById);

// POST a new task
router.post("/", taskController.createTask);

// PUT (update) a task by its ID
router.put("/:taskId", taskController.updateTask);

// DELETE a task by its ID
router.delete("/:taskId", taskController.deleteTask);

export default router;
