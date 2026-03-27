import express from "express";
import{
    getAllData,
    uploadAllData,
}
from "../controllers/syncController.js";

const syncRoutes = express.Router();

// Save all student data
syncRoutes.post("/",uploadAllData);

// Get all student data
syncRoutes.get("/",getAllData);

export default syncRoutes;