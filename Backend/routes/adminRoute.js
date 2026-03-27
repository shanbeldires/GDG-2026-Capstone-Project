import express from "express";
const adminRoutes = express.Router();
adminRoutes.get("/users",)
adminRoutes.get("/users/:id",)
adminRoutes.post("/users",)
adminRoutes.put("/users/:id",)
adminRoutes.delete("/users/:id",)
adminRoutes.get("/analytics",)
adminRoutes.post("/subjects",)
adminRoutes.post("/broadcasts")
adminRoutes.put("/curriculum")
export default adminRoutes;