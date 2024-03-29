import mongoose from "mongoose";

//Scheme
const productSchema = mongoose.Schema(
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
    gallery: {
        type: Array,
        default:null,
        trim:true,
    },
    short_desc: {
        type: String,
        trim:true,
    },
    long_desc: {
        type: String,
        trim:true,
    },
    regular_price: {
        type: Number,
        required:true,
    },
    sale_price: {
        type: Number,
    },
    stock: {
        type: Number,
        default:null,
    },
    categories: {
        type: [mongoose.Schema.Types.ObjectId],
        ref:"Category",
        default:null,
    },
    tags: {
        type: [mongoose.Schema.Types.ObjectId],
        ref:"Tag",
        default:null,
    },
    brands: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Brand",
        default:null,
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

export default mongoose.model("Product", productSchema);