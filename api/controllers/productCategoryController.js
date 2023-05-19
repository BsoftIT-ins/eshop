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
        console.log(`${error.message}` .bgRed.black);
    }
};
//Get Single Product Category
export const getSingleProductCategory = async(req, res) => {
    try {
        const {slug} = req.params;
        const data = await category.findOne({slug});
        res.status(200).json({
            category: data,
            message: "Single Category successful",
        });
    } catch (error) {
        console.log(`${error.message}` .bgRed.black);
    }
};