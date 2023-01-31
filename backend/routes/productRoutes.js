const express = require("express");
const { isAuthenticatedUSer, authorizeRoles } = require("../middleware/auth");
const { getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetails,
    createProductReview } = require("../controller/productController");


const router = express.Router();

router.get("/product", getAllProduct);

router.post("/admin/product/new", isAuthenticatedUSer, authorizeRoles("admin"), createProduct); ``

router.put("/admin/product/:id", isAuthenticatedUSer, authorizeRoles("admin"), updateProduct);

router.delete("/admin/product/:id", isAuthenticatedUSer, authorizeRoles("admin"), deleteProduct);

router.get("/product/:id", getProductDetails);

router.put("/review", isAuthenticatedUSer, createProductReview);


module.exports = router;