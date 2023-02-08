const express = require("express");
const orderRouter = express.Router();

const { newOrder,
    getSingleOrder,
    myOrders,
    getAllOrders,
    updateOrder, 
    deleteOrder} = require("../controller/orderController");
const { isAuthenticatedUSer, authorizeRoles } = require("../middleware/auth");

orderRouter.post("/order/new", isAuthenticatedUSer, newOrder);

orderRouter.get("/order/me", isAuthenticatedUSer, myOrders);

orderRouter.get("/order/:id", isAuthenticatedUSer, getSingleOrder);

orderRouter.get("/admin/orders", isAuthenticatedUSer, authorizeRoles('admin'), getAllOrders);

orderRouter.put("/admin/order/:id", isAuthenticatedUSer, authorizeRoles('admin'), updateOrder);

orderRouter.delete("/admin/order/:id", isAuthenticatedUSer, authorizeRoles('admin'), deleteOrder);

module.exports = orderRouter;