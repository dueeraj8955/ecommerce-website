const Product = require("../models/productModel");


// create Product --Admin
exports.createProduct = async (req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        sucess:true,
        product
    })
}

exports.getAllProducts = async(req,res) =>{
    const products = await Product.find();

    res.status(200).json({
        sucess:true,
        products
    })
}