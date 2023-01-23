const express = require("express");
const { isAuthenticatedUSer, authorizeRoles } = require("../middleware/auth");
const { getAllProduct, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controller/productController");


const router = express.Router();

router.get("/product", getAllProduct);

router.post("/product/new", isAuthenticatedUSer, authorizeRoles("admin"), createProduct);

router.put("/product/:id", isAuthenticatedUSer, authorizeRoles("admin"), updateProduct);

router.delete("/product/:id", isAuthenticatedUSer, authorizeRoles("admin"), deleteProduct);

router.get("/product/:id", getProductDetails);


module.exports = router;