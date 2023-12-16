import Express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productRoute from "./routes/productRoute.js";
import productCategoryRoute from "./routes/productCategory.js";
import productBrandRoute from "./routes/productBrand.js";
import productTagRoute from "./routes/productTag.js";
import mongoDBConnect from "./config/db.js";
import { errorHandle } from "./middlewares/errorHandler.js";


//Init Express
const app = Express();
dotenv.config();

// Middlewares
app.use(Express.json());
app.use(Express.urlencoded({extended : false}));
app.use(cors());

// set static folder
app.use(Express.static("api/public"));

// Routes
app.use('/api/v1/product', productRoute);
app.use('/api/v1/product', productCategoryRoute);
app.use('/api/v1/product', productBrandRoute);
app.use('/api/v1/product', productTagRoute);

//Environment Variable
const PORT = process.env.PORT || 5000;

// Use Error Handler
//app.use(errorHandle);

// Listen
app.listen(PORT,()=>{
    mongoDBConnect();
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
})