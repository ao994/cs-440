import { Task } from './objects.js';

// Fetch tasks for a specific user
export const getUserTasks = (username) => Task.find({ username });

// Create a new task
export const createTask = (taskData) => Task.create(taskData);
