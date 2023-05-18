import Express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productCategoryRoute from "./routes/productCategory.js";
import mongoDBConnect from "./config/db.js";


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
app.use('/api/v1/product', productCategoryRoute);

//Environment Variable
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT,()=>{
    mongoDBConnect();
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
})