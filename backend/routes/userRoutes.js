const express = require("express");
const userRouter = express.Router();

const { registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetails } = require("../controller/userController");
const { isAuthenticatedUSer,authorizeRoles } = require("../middleware/auth");    

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.post("/password/forgot", forgotPassword);

userRouter.put("/password/reset/:token", resetPassword);

userRouter.get("/logout", logout);

userRouter.get("/me", isAuthenticatedUSer, getUserDetails)

module.exports = userRouter;
