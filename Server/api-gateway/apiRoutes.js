import express from "express";
import axios from "axios";

const router = express.Router();

router.use("/user", (req, res) => {
  axios.post("http://user-service:5000/login", req.body)
    .then(response => res.json(response.data))
    .catch(err => res.status(500).json({ error: err.message }));
});

router.use("/tasks", (req, res) => {
  axios.get(`http://task-service:5001/tasks/${req.params.username}`)
    .then(response => res.json(response.data))
    .catch(err => res.status(500).json({ error: err.message }));
});

export default router;
