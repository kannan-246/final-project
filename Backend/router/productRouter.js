const express = require("express");
const productRouter = express.Router();

const { addproduct, getProduct, removeProduct, updateProduct } = require("../controller/productcontroller");

productRouter.post("/add", addproduct);
productRouter.get("/products", getProduct);
productRouter.delete("/remove/:id", removeProduct);
productRouter.put("/update/:id", updateProduct);

module.exports = productRouter;

