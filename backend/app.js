const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error")

app.use(express.json());
app.use(cookieParser());

// Route imports
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);

// Middleware for Errors
app.use(errorMiddleware);


module.exports = app