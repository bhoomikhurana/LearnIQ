import express from "express";
import { config } from "dotenv";

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

config({
  path: "./config/config.env",
});
import courseRoutes from "./routes/courseRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import ErrorMiddleware from "./middlewares/Error.js";
app.use("/api/v1", courseRoutes);
app.use("/api/v1", userRoutes);
export default app;
app.use(ErrorMiddleware);
