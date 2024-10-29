import express from "express";
import {
    getUsers,
    loginUser,
    signupUser,
    getTasksByUsername,
    createTask,
} from "../controllers/plannerController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/login", loginUser);
router.post("/signup", signupUser);
router.get("/tasks/:username", getTasksByUsername);
router.post("/tasks", createTask);

export default router;
