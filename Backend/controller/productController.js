const productModel = require("../model/productModel");

const addproduct = async (req, res) => {
  try {
    const { name , img, category, desc, price, type } = req.body;

    const productData = new productModel({
      name,
      img,
      category,
      desc,
      price,
      type,
    });

    await productData.save();
    res.status(200).send("Product Added!");
  } catch (err) {
    res
      .status(404)
      .send(`Error Name : ${err.name}, Error Message : ${err.message}`);
  }
};

const getProduct = async (req, res) => {
  try {
    const productList = await productModel.find();
    res.status(200).send(productList);
  } catch (err) {
    res
      .status(404)
      .send(`Error Name : ${err.name}, Error Message : ${err.message}`);
  }
};

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Product Removed!");
  } catch (err) {
    res
      .status(404)
      .send(`Error Name : ${err.name}, Error Message : ${err.message}`);
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).send(updatedProduct);
  } catch (err) {
    res
      .status(404)
      .send(`Error Name : ${err.name}, Error Message : ${err.message}`);
  }
};

module.exports = { addproduct, getProduct, removeProduct, updateProduct };
