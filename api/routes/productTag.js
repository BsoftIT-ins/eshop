import express from "express";
import { getAllProductTags, createProductTags, getSingleProductTag, deleteProductTag, updateProductTag } from "../controllers/productTagController.js"

//Create Router
const router = express.Router();

//Router
router.route("/tag").get(getAllProductTags).post(createProductTags);
router.route("/tag/:id").get(getSingleProductTag).delete(deleteProductTag).put(updateProductTag);


// Export Router
export default router;