import express from 'express';
import { registerUser, loginUser } from './userService.js';

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const message = await loginUser(email, password);
    res.status(200).json({ message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default app;
