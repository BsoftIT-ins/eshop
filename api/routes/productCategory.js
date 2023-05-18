import express from "express";
import { getAllProductCategory } from "../controllers/productCategoryController.js";

//Create Router
const router = express.Router();

//Router
router.get("/category", getAllProductCategory);

// Export Router
export default router;