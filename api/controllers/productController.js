import { createSlug } from "../helper/createSlug.js";
import Product from "../models/Product.js";
import { unlinkSync } from "fs";


//Get All Product
export const getAllProduct = async (req, res, next) => {
    try {
        const data = await Product.find();
        res.status(200).json({
            Product: data,
            message: "Get All Product",
        });
    } catch (error) {
        next(error);
    }
};
//Ctreate  Product
export const createProduct = async (req, res, next) => {
    try {
        const {name, regular_price, sale_price, stock, short_desc, long_desc, categories, tags, brands} = req.body;
         
        //Get Product photo name
         const photo = req.files["product-photo"][0].filename;
        
         //Get Gallery Photo name
         const gallery = [];
         [...req.files["product-gallery-photo"]].forEach((item) => {
             gallery.push(item.filename);
         });
 
        const data = await Product.create({
            name,
            slug:createSlug(name),
            regular_price,
            sale_price,
            stock,
            short_desc,
            long_desc,
            photo,
            gallery,
         });
        res.status(200).json({
            Product: data,
            message: "Product created success",
        });
    } catch (error) {
        next(error);
    }
};

//Get Single Product
export const getSingleProduct = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const data = await Product.findOne({slug});
        res.status(200).json({
            Product: data,
            message: "Get Single Product Success",
        });
    } catch (error) {
        next(error);
    }
};
// Delete Product
export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await Product.findByIdAndDelete(id);
        
        //Delete related file
        unlinkSync(`api/public/products/${data.photo}`);

        data.gallery.forEach((item) => {
          unlinkSync(`api/public/products/${item}`);
        });
            res.status(200).json({
            Product: data,
            message: "Product Deleted Success",
        });
    } catch (error) {
        next(error);
    }
};
// Update product
export const updateProduct = async (req, res, next) => {
    try {
      const { id } = req.params; // Assuming the product ID is passed as a URL parameter
      const { name, regular_price, sale_price, stock, short_desc, long_desc, categories, tags, brands } = req.body;
  
        //Get Edit product
        const product = await Product.findById(id);

      // Product photo update
      let photo = product.photo;
      if(req.files["product-photo"]){
        photo = req.files["product-photo"][0].filename;
        unlinkSync(`api/public/products/${product.photo}`);
      } 
       // Get Gallery Photo names
        let gallery_old = product.gallery;
        let new_gallery = [];
        if(req.files["product-gallery-photo"]){
            req.files["product-gallery-photo"].forEach((item)=>{
                new_gallery.push(item.filename);
            });
        }

        const final_gallery = gallery_old.concat(new_gallery);
       
// Find the product by ID and update its details
const data = await product.updateOne({
    name,
    slug: createSlug(name),
    regular_price,
    sale_price,
    stock,
    short_desc,
    long_desc,
    photo,
    gallery: final_gallery,
   
  }) 

  res.status(200).json({
    Product: product,
    message: "Product updated successfully",
  });
} catch (error) {
  next(error);
}
};
  
    
  
      
  