import express  from "express";
import { 
    getStudentById, 
    getStudents, 
    getStudentProgress, 
    getStudentAchievements, 
    createStudent, 
    updateStudent, 
    deleteStudent 
} from "../controllers/userController.js";
const userRoutes = express.Router();
userRoutes.get("/",getStudents)
userRoutes.get("/:id",getStudentById)
userRoutes.get("/:id/progress",getStudentProgress)
userRoutes.get("/:id/achievements",getStudentAchievements)
userRoutes.post("/",createStudent)
userRoutes.put("/:id",updateStudent)
userRoutes.delete("/:id",deleteStudent)
export default userRoutes;