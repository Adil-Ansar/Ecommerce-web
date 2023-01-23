const express = require("express");
const userRouter = express.Router();

const { registerUser, loginUser, logout, forgotPassword } = require("../controller/userController");

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/password/forgot", forgotPassword);
userRouter.get("/logout", logout);

module.exports = userRouter;
