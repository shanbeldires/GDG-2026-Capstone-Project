import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler.js";
import dotenv from "dotenv";
dotenv.config();
import { CLIENT_URL } from "./config/env.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import dashboardRoutes from "./routes/dashboardRoute.js";
import parentRoutes from "./routes/parentRoute.js";
import adminRoutes from "./routes/adminRoute.js";
import aiRoutes from "./routes/aiRoute.js";

const app = express();

// Middlewares
app.use(cors({ origin:CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet())

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/notes", notesRoutes);
app.use("/api/v1/quiz", quizRoutes);
app.use("/api/v1/dashboard",dashboardRoutes)
app.use("/api/v1/parent",parentRoutes)
app.use("/api/v1/teacher",)
app.use("/api/v1/admin",adminRoutes)
app.use("/api/v1/sync",)
app.use("/api/v1/ai",aiRoutes)

// Error handler
app.use(errorHandler);

export default app;