import express from "express";
import tasks from "./taskRoutes.js";

const router = express.Router();

router.use("/tasks", tasks);

export default router;
