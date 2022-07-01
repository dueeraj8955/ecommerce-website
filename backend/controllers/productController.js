const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");


// create Product --Admin
exports.createProduct = catchAsyncError(async (req,res,next)=>{

    req.body.user = req.user.id;
    
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    });
});
//get all product
exports.getAllProducts = catchAsyncError(async(req,res) =>{


    const resultPerPage = 5;
    const productsCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerPage);
    const products = await apiFeature.query;

    res.status(200).json({
        success:true,
        products
    });
});

//get Product Details

exports.getProductDetails = catchAsyncError(async (req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product not found",404));
    }
    res.status(200).json({
        success:true,
        product,
        productsCount,
    });
});

//update Project --Admin

exports.updateProduct = catchAsyncError(async (req,res,next)=>{

    let product = await Product.findById(req.params.id);
    if(!Product){
        return next(new ErrorHander("Product not found",404));
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        usefindAndModify:false
    });
    res.status(200).json({
        success:true,
        product
    });
});


//delete Product
exports.deleteProduct = catchAsyncError(async (req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product not found",404));
    }

    await product.remove();
    res.status(200).json({
        success:true,
        message:"Product deleted Sucessfully"
    })
});

// Create New Review or Update the review
exports.createProductReview = catchAsyncError(async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user+"" === req.user._id+""
  );


  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user+"" === req.user._id+"")
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});