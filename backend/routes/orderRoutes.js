const express = require("express");
const orderRouter = express.Router();

const { newOrder, getSingleOrder, myOrders } = require("../controller/orderController");
const { isAuthenticatedUSer, authorizeRoles } = require("../middleware/auth");

orderRouter.post("/order/new", isAuthenticatedUSer, newOrder);

orderRouter.get("/order/:id", isAuthenticatedUSer, authorizeRoles("admin"), getSingleOrder);

orderRouter.get("/order/me", isAuthenticatedUSer, myOrders);

module.exports = orderRouter;