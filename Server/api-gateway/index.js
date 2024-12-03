import express from "express";
import apiRoutes from "./apiRoutes.js"; // Import your routing logic

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use("/api", apiRoutes); // Mount the routes

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
