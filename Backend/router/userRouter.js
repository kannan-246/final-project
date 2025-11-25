const express = require("express");


const { addUser, getUser, removeUser, updateUser, loginUser } = require("../controller/userController");

const userRouter = express.Router();

userRouter.post("/register", addUser);
userRouter.post("/login", loginUser);
userRouter.get("/users", getUser);
userRouter.delete("/remove/:id", removeUser);
userRouter.put("/update/:id", updateUser);

module.exports = userRouter;

