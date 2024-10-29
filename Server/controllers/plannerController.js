// Import defined objects
import { User, Task } from "../models/objects.js";

// Controller functions

// Get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// User login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            if (user.password === password) {
                res.json("Success");
            } else {
                res.json("The password is incorrect");
            }
        } else {
            res.json("No record existed");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// User signup
export const signupUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get tasks by username
export const getTasksByUsername = async (req, res) => {
    try {
        const tasks = await Task.find({ username: req.params.username });
        if (!tasks) return res.status(404).send("No tasks found");
        res.status(200).send(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a task
export const createTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.json(newTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
