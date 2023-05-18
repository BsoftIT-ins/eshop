import Express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";

//Init Express
const app = Express();
dotenv.config();

//Environment Variable
const port = process.env.PORT || 5000;

// Listen
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`.bgGreen.black);
})