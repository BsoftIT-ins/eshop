import Tag from "../models/Tag.js";

//Get all product Tags
export const getAllProductTags = async(req, res, next)=>{
    try {
        const data = await Tag.find();
        res.status(200).json({
            tags: data,
            message: "All product tags success"
        });
    } catch (error) {
       next(error); 
    }
}

//Create product Tags
export const createProductTags = async(req, res, next)=>{
    try {
        const { name, slug } = req.body;
        const data = await Tag.create({name, slug});
        res.status(200).json({
            tag: data,
            message: "Tag created successful"
        });
    } catch (error) {
       next(error); 
    }
}
//Get Single product Tags
export const getSingleProductTag = async(req, res, next)=>{
    try {
        const { id } = req.params;
        const data = await Tag.findById(id);
        res.status(200).json({
            tag: data,
            message: "Single Product Tag successful"
        });
    } catch (error) {
       next(error); 
    }
}
//Delete product Tags
export const deleteProductTag = async(req, res, next)=>{
    try {
        const { id } = req.params;
        const data = await Tag.findByIdAndDelete(id);
        res.status(200).json({
            tag: data,
            message: "Product Tag delete successful"
        });
    } catch (error) {
       next(error); 
    }
}
//Update product Tags
export const updateProductTag = async(req, res, next)=>{
    try {
        const { id } = req.params;
        const { name, slug } = req.body;
        const data = await Tag.findByIdAndUpdate(id, {name, slug}, {new: true});
        res.status(200).json({
            tag: data,
            message: "Tag update successful",
        });
    } catch (error) {
       next(error); 
    }
}