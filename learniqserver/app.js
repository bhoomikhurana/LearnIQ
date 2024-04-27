import express from "express";
import { config } from "dotenv";

const app = express();

config({
  path: "./config/config.env",
});
import courseRoutes from "./routes/courseRoutes.js";
app.use("/api/v1", courseRoutes);
export default app;
