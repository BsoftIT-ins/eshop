import express from "express";
import { getAllProductCategory, createProductCategory, getSingleProductCategory, deleteProductCategory, updateProductCategory } from "../controllers/productCategoryController.js";
import { productCategoryMulter } from "../utils/multer.js"

//Create Router
const router = express.Router();

//Router
router.get("/category", getAllProductCategory);
router.post("/category", productCategoryMulter, createProductCategory);
router.get("/category/:slug", getSingleProductCategory);
router.delete("/category/:id", deleteProductCategory);
router.put("/category/:id", updateProductCategory);
router.patch("/category/:id", updateProductCategory);

// Export Router
export default router;