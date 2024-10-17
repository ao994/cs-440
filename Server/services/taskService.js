import { getUserTasks, createTask } from "../data/taskData.js";

export const fetchTasksForUser = (username) => getUserTasks(username);
export const addTask = (taskData) => createTask(taskData);
