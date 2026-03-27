import express from "express";
import { 
    login, 
    signup, 
    logOut, 
    getMe,
    AccessRefreshToken, 
    
} from "../controllers/authController.js";
import { verifyToken } from "../controllers/authentication.js";
const authRoutes = express.Router();
authRoutes.post("/login",login)
authRoutes.post("/register",signup)
authRoutes.post("/logout",verifyToken,logOut)
authRoutes.post("/refresh",AccessRefreshToken)
authRoutes.get("/me",getMe)
export default authRoutes;