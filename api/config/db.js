import mongoose from "mongoose";
// Create Mongo DB Connection
const mongoDBConnect = async() =>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected Successful`);
    }catch(error){
        console.log(`${error.message}`.bgRed.black);
    }
}
//Export MongoDB Connection
export default mongoDBConnect;
