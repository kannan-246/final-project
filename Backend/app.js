const dotenv = require("dotenv")
dotenv.config()

const connectDB = require("./config/db");
connectDB()

const express = require("express");
const app = express()

const cors = require("cors");
app.use(cors())

app.use(express.json({ limit: "50mb" }))

const productRouter = require("./router/productRouter");
const userRouter = require("./router/userRouter");
app.use("/product", productRouter)
app.use("/api/user", userRouter);

app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
});
