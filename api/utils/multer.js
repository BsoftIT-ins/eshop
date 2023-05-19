import multer from "multer";

// Create Disk Storage 
const storage = multer.diskStorage({
    filename:(req, file, cb) =>{
        cb(null, Date.now() + "_" + file.originalname);
    },
    destination:(req, file, cb) =>{
        cb(null, "api/public/product/category");
    },
});
//Product Category middlewares
export const productCategoryMulter = multer({ storage }).single(
    "category-photo");