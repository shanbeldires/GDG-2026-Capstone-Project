import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import errorHandler from "./errorHandler/errorHandler.js";
import dotenv from "dotenv";
dotenv.config();
import { CLIENT_URL } from "./config/env.js";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js";
// import notesRoutes from "./routes/notesRoutes.js";
// import quizRoutes from "./routes/quizRoutes.js";
import dashboardRoutes from "./routes/dashboardRoute.js";
import adminRoutes from "./routes/adminRoute.js";
// import aiRoutes from "./routes/aiRoute.js";
import uploadRoutes from "./routes/uploadRoute.js";
import syncRoutes from "./routes/syncRoute.js";

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
// app.use("/api/v1/notes", notesRoutes);
// app.use("/api/v1/quiz", quizRoutes);
app.use("/api/v1/dashboard",dashboardRoutes)
app.use("/api/v1/admin",adminRoutes)
app.use("/api/v1/upload",uploadRoutes)
app.use("/api/v1/sync",syncRoutes)
// app.use("/api/v1/ai",aiRoutes)


// Error handler
app.use(errorHandler);

export default app;