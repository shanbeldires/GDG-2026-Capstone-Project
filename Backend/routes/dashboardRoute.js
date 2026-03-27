import express from "express";
import { accessAll } from "../controllers/dashboardController.js";
const dashboardRoutes = express.Router();
dashboardRoutes.get("/admin",accessAll)
export default dashboardRoutes;