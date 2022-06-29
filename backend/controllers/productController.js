const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");


// create Product --Admin
exports.createProduct = async (req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}
//get all product
exports.getAllProducts = async(req,res) =>{
    const products = await Product.find();

    res.status(200).json({
        success:true,
        products
    })
}

//get Product Details

exports.getProductDetails = async (req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product not found",404));
    }
    res.status(200).json({
        success:true,
        product
    })
}

//update Project --Admin

exports.updateProduct = async (req,res,next)=>{

    let product = await Product.findById(req.params.id);
    if(!Product){
        return res.status(500).json({
            success:false,
            massage:"Product not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        usefindAndModify:false
    });
    res.status(200).json({
        success:true,
        product
    })
}


//delete Product
exports.deleteProduct = async (req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product not found",404));
    }

    await product.remove();
    res.status(200).json({
        success:true,
        massage:"Product deleted Sucessfully"
    })
}