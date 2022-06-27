import mongoose from "mongoose"

const ProductSchena = new mongoose.Schema(
    {
        category:{type:String, required:true},
        slug:{type:String, required:true, unique:true},
        img:{type:String, required:false},
        title:{type:String, required:true},
        brand:{type:String, required:true},
        rating:{type:Number, required:true},
        numReviews:{type:Number, required:true},
        countInStock:{type:Number, required:true},
        desc:{type:String, required:true},
        price:{type:Number, required:true},

    },
    { timestamps: true }
)
const Product = mongoose.models.Product || mongoose.model("Product",ProductSchena)
export default Product;