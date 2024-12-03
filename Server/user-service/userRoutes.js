import express from "express";
import { loginUser, registerUser } from "./userService.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const message = await loginUser(email, password);
  res.json(message);
});

router.post("/signup", async (req, res) => {
  const user = await registerUser(req.body);
  res.json(user);
});

export default router;
