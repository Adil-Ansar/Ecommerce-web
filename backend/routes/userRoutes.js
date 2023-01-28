const express = require("express");
const userRouter = express.Router();

const { registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetails, 
    updatePassword,
    updateProfile,
    getAllUsers,
    getSingleUser,
    updateUserRole,
    deleteUser} = require("../controller/userController");
const { isAuthenticatedUSer,authorizeRoles } = require("../middleware/auth");    

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.post("/password/forgot", forgotPassword);

userRouter.put("/password/reset/:token", resetPassword);

userRouter.get("/logout", logout);

userRouter.get("/me", isAuthenticatedUSer, getUserDetails);

userRouter.put("/password/update", isAuthenticatedUSer, updatePassword);

userRouter.put("/me/update", isAuthenticatedUSer, updateProfile);

userRouter.get("/admin/users", isAuthenticatedUSer, authorizeRoles("admin"), getAllUsers);

userRouter.get("/admin/user/:id", isAuthenticatedUSer, authorizeRoles("admin"), getSingleUser);

userRouter.put("/admin/user/:id", isAuthenticatedUSer, authorizeRoles("admin"), updateUserRole);

userRouter.delete("/admin/user/:id", isAuthenticatedUSer, authorizeRoles("admin"), deleteUser);

module.exports = userRouter;
