import express from "express";
const aiRoutes = express.Router();
aiRoutes.get("/chat/sessions",)
aiRoutes.get("/chat/:sessionId",)
aiRoutes.post("/chat/start",)
aiRoutes.post("/chat/:sessionId/message",)
aiRoutes.delete("/chat/:sessionId",)
aiRoutes.post("/translate",)
aiRoutes.post("/summarize",)
aiRoutes.post("/explain",)
aiRoutes.post("/roadmap",)
export default aiRoutes;