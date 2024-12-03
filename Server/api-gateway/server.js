import express from "express";
import cors from "cors";
import apiRoutes from "./apiRoutes.js";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes); // Use apiRoutes for handling the requests

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
