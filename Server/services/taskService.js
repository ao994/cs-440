import { getUserTasks, createTask } from "../data/taskDataAccess.js";

export const fetchTasksForUser = (username) => getUserTasks(username);
export const addTask = (taskData) => createTask(taskData);
