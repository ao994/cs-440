import { getUserTasks, createTask } from "./taskData.js";

export const fetchTasksForUser = (username) => getUserTasks(username);
export const addTask = (taskData) => createTask(taskData);
