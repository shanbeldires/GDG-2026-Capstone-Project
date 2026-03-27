import express from "express";
import { 
    login, 
    signup, 
    logOut, 
    getMe 
} from "../controllers/authController.js";
const authRoutes = express.Router();
authRoutes.post("/login",login)
authRoutes.post("/register",signup)
authRoutes.post("/logout",logOut)
authRoutes.get("/me",getMe)
export default authRoutes;