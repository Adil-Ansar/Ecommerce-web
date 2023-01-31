const express = require("express");
const { isAuthenticatedUSer, authorizeRoles } = require("../middleware/auth");
const { getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetails,
    createProductReview, 
    getProductReviews,
    deleteReview} = require("../controller/productController");


const productRouter = express.Router();

productRouter.get("/product", getAllProduct);

productRouter.post("/admin/product/new", isAuthenticatedUSer, authorizeRoles("admin"), createProduct); ``

productRouter.put("/admin/product/:id", isAuthenticatedUSer, authorizeRoles("admin"), updateProduct);

productRouter.delete("/admin/product/:id", isAuthenticatedUSer, authorizeRoles("admin"), deleteProduct);

productRouter.get("/product/:id", getProductDetails);

productRouter.put("/review", isAuthenticatedUSer, createProductReview);

productRouter.get("/reviews", getProductReviews);

productRouter.delete("/reviews", isAuthenticatedUSer, deleteReview)

module.exports = productRouter;