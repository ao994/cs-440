import express from 'express';
import { fetchTasksForUser, addTask } from './taskService.js';

const app = express();
app.use(express.json());

app.get('/tasks/:username', async (req, res) => {
  try {
    const tasks = await fetchTasksForUser(req.params.username);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const task = await addTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default app;
