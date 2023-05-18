import express from "express";
import { getAllProductCategory, createProductCategory } from "../controllers/productCategoryController.js";
import { productCategoryMulter } from "../utils/multer.js"

//Create Router
const router = express.Router();

//Router
router.get("/category", getAllProductCategory);
router.post("/category", productCategoryMulter, createProductCategory);

// Export Router
export default router;