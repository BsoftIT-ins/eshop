import express from "express";
import { getAllProduct, createProduct, getSingleProduct, deleteProduct, updateProduct } from "../controllers/productController.js"
import {productMulter} from "../utils/multer.js"

//Create Router
const router = express.Router();

//Router
router.route("/").get(getAllProduct).post(productMulter, createProduct);
router.get("/:slug", getSingleProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", productMulter, updateProduct);



// Export Router
export default router;