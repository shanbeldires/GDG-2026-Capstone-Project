import express from "express";
const quizRoutes = express.Router();
quizRoutes.get("/",)
quizRoutes.get("/:id",)
quizRoutes.get("/analytics")
quizRoutes.get("/history")
quizRoutes.get("/recommended")
quizRoutes.post("/generate",)
quizRoutes.post("/:id/start",)
quizRoutes.post("/:id/submit",)
export default quizRoutes;