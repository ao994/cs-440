import { Task, User } from "../db/objects.js";

export const findUserByEmail = (email) => User.findOne({ email });
export const createUser = (userData) => User.create(userData);
export const getUserTasks = (username) => Task.find({ username });
export const createTask = (taskData) => Task.create(taskData);
