import Brand from "../models/Brand.js";

// Get all product Brand
export const getAllProductBrand =async(req, res, next) =>{
try {
    const brands = await Brand.find();
    res.status(200).json({
        brands,
        message: "Get brand success",
    });
} catch (error) {
    next(error);
}
}
// Create Product Brand
export const createProductBrand =async(req, res, next) =>{
    try {
        const { name, slug } = req.body;
        const brand = await Brand.create({
            name,
            slug,
            photo: req.file.filename,
        });
        res.status(200).json({
            brand,
            message: "Brand Created successful",
        });
    } catch (error) {
        next(error);
    }
    };
    
// Create Product Brand
export const getSingleBrand =async(req, res, next) =>{
    try {
        const { id } = req.params;
        const brand = await Brand.findById(id);
        res.status(200).json({
            brand,
            message: "Get Single Brand successful",
        });
    } catch (error) {
        next(error);
    }
    }
// Delete Product Brand
export const deleteBrand =async(req, res, next) =>{
    try {
        const { id } = req.params;
        const brand = await Brand.findByIdAndDelete(id);
        res.status(200).json({
            brand,
            message: "Brand Delete successful",
        });
    } catch (error) {
        next(error);
    }
    }
// Update Product Brand
export const updateBrand = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const { name, slug, photo } = req.body;
        const brand = await Brand.findByIdAndUpdate(
            id,
            { 
                name, 
                slug, 
                photo, 
            },
            { new: true }
        );
        res.status(200).json({
          
            message: "Brand Updated successful",
        });
    } catch (error) {
        next(error);
    }
    }
    
