import category from "../models/category.js";



//Get all product category
export const getAllProductCategory = async(req, res) => {
    try {
        const data = await category.find();
        res.status(200).json({
            categories: data,
            message: "Get all data success",
        });
    } catch (error) {
        console.log(`${error.message}` .bgRed.black)
    }
};
//Create Product Category
export const createProductCategory = async(req, res) => {
    try {
        const data = await category.find();
        res.status(200).json({
            categories: data,
            message: "Get all data success",
        });
    } catch (error) {
        console.log(`${error.message}` .bgRed.black)
    }
};