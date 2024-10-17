import express from "express";
import mongoose from 'mongoose';
import cors from "cors";

import { loginUser, registerUser } from "../services/userService.js";
import { fetchTasksForUser, addTask } from "../services/taskService.js";


// This will help us connect to the database
import "../db/connection.js";
//import defined objects
import {User, Task} from "../db/objects.js";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /planner.
const router = express.Router();

// This sends all user information to the home page.
router.get("/", async (req, res) => {
  User.find().then(function(results){res.send(results).status(200);});
});

router.post("/login", async (req, res) => {
  const {email, password} = req.body;
  const message = await loginUser(email, password);
  res.json(message);
});

router.post("/signup", async (req, res) => {
  const user = await registerUser(req.body);
  res.json(user);
});


router.get("/tasks/:username", async (req, res) => {
  const tasks = await fetchTasksForUser(req.params.username);
  res.status(200).send(tasks);
});


router.post("/tasks", async (req, res) => {
  const task = await addTask(req.body);
  res.json(task);
})


export default router;