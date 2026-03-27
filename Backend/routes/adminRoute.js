import express from "express";
import {
    listAllUsers,
    listUserById,
    updateUsersById,
    deleteUsers,
    getAnalytics,
    createSubjects,
    createBroadcasts,
    updateCurriculum
} from "../controllers/adminController.js";
const adminRoutes = express.Router();
adminRoutes.get("/users",listAllUsers)
adminRoutes.get("/users/:id",listUserById)
adminRoutes.put("/users/:id",updateUsersById)
adminRoutes.delete("/users/:id",deleteUsers)
adminRoutes.get("/analytics",getAnalytics)
adminRoutes.post("/subjects",createSubjects)
adminRoutes.post("/broadcasts",createBroadcasts)
adminRoutes.put("/curriculum",updateCurriculum)
export default adminRoutes;