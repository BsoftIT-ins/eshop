import mongoose from "mongoose";

//Scheme
const categorySchema = mongoose.Schema(
  {
    name: {
        type: String,
        required:true,
        trim:true,
        unique:true,
    },
    slug: {
        type: String,
        required:true,
        trim:true,
        unique:true,
    },
    photo: {
        type: String,
        default:null,
        trim:true,
    },
    status: {
        type: Boolean,
        default:true,
    },
    trash: {
        type: Boolean,
        default:false,
    },
  },
    {
        timestamps:true,
    }
);

//Export models

export default mongoose.model("category", categorySchema);