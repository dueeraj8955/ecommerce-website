const express = require("express");
const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview } = require("../controllers/productController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

const router = express.Router();



router.route("/Products").get( getAllProducts);


router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);


router.route("/admin/product/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review/").put(isAuthenticatedUser,createProductReview);


module.exports = router