import express from "express";
const parentRoutes = express.Router();
parentRoutes.get("/children",)
parentRoutes.get("/children/:childrenId/progress",)
parentRoutes.post("/children/:childrenId/alerts",)
parentRoutes.post("/children/",)
parentRoutes.delete("/children/:childrenId",)
export default parentRoutes;