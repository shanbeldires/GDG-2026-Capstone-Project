import express from "express";
import { uploadFile } from "../controllers/uploadController.js";
const uploadRoutes = express.Router();

// Upload file (PDF/image)
uploadRoutes.post("/", uploadFile);

export default uploadRoutes;