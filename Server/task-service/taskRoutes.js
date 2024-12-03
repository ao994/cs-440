import express from "express";
import { fetchTasksForUser, addTask } from "./taskService.js";

const router = express.Router();

router.get("/tasks/:username", async (req, res) => {
  const tasks = await fetchTasksForUser(req.params.username);
  res.status(200).send(tasks);
});

router.post("/tasks", async (req, res) => {
  const task = await addTask(req.body);
  res.json(task);
});

export default router;
