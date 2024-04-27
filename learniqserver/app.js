import express from "express";
import { config } from "dotenv";
const app = express();

config({
  path: "./config/config.env",
});
import course from "./routes/courseRoutes.js";
app.use("/api/v1", course);
export default app;
