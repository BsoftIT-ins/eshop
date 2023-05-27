import category from "../models/category.js";
import { createError } from "../utils/createError.js";



//Get all product category
export const getAllProductCategory = async(req, res, next) => {
    try {
        const data = await category.find();
        res.status(200).json({
            categories: data,
            message: "Get all data success",
        });
    } catch (error) {
       next(error);
    }
};
//Create Product Category
export const createProductCategory = async(req, res, next) => {
    try {
        const {name, slug} = req.body;
        const data = await category.create({
            name,
            slug,
            photo : req.file.filename,
        });
        res.status(200).json({
            category: data,
            message: "Category added successful",
        });
    } catch (error) {
      next(createError("Data Can not save", 400));
    }
};
//Get Single Product Category
export const getSingleProductCategory = async(req, res, next) => {
    try {
        const {slug} = req.params;
        const data = await category.findOne({slug});
        res.status(200).json({
            category: data,
            message: "Single Category successful",
        });
    } catch (error) {
        next(error);
    }
};
// Delete Product Category
export const deleteProductCategory = async(req, res, next) => {
    try {
        const {id} = req.params;
        const data = await category.findByIdAndDelete(id);
        res.status(200).json({
            
            message: "Category deleted successful",
        });
    } catch (error) {
        next(error);
    }
};
// Update Product Category
export const updateProductCategory = async(req, res, next) => {
    try {
        const {id} = req.params;
        const { name, slug } = req.body;
        const data = await category.findByIdAndUpdate(
            id, 
            { name, slug },
            { new: true }
        );
        res.status(200).json({
            category: data,
        message: "Category Updated successful",
        });
    } catch (error) {
        next(error);
    }
};