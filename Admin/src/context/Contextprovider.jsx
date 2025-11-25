import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";


export const MYcontext = createContext();

const Contextprovider = ({ children }) => {

  var url = "http://localhost:5000";

  // ------------------ PRODUCT STATES ------------------
  var [category, setCategory] = useState("");
  var [type, setType] = useState("");
  var [desc, setDesc] = useState("");
  var [price, setPrice] = useState("");
  var [img, setImg] = useState("");
  var [previewImg, setPreviewImg] = useState("");
  var [productData, setProductData] = useState([]);
  var [name, setName] = useState("");

  // ------------------ UPDATE PRODUCT ------------------
  var [updateCategory, setUpdateCategory] = useState("");
  var [updateType, setUpdateType] = useState("");
  var [updateDesc, setUpdateDesc] = useState("");
  var [updatePrice, setUpdatePrice] = useState("");
  var [updateImg, setUpdateImg] = useState("");
  var [updatePreviewImg, setUpdatePreviewImg] = useState("");
  var [updateId, setUpdateId] = useState("");

  // ------------------ USER STATES (ADMIN) ------------------
  const [users, setUsers] = useState([]);

  // ============================================================
  //                    PRODUCT FUNCTIONS
  // ============================================================

  // Upload Image
  const ImageFun = (e) => {
    var file = e.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add Product
  const ProductSubmitFun = async (e) => {
    try {
      e.preventDefault();

      var formData = {
        name, img, category, type, desc, price
      };

      await axios.post(`${url}/product/add`, formData);
      alert("Product Added!");
    }
    catch (err) {
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`);
    }
  };

  // Fetch Product List
  const FetchProductData = async () => {
    try {
      var productList = await axios.get(`${url}/product/products`);
      setProductData(productList.data);
    }
    catch (err) {
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`);
    }
  };

  useEffect(() => {
    FetchProductData();
    fetchUsers(); // FETCH USERS ALSO
  }, []);

  // Delete Product
  const RemoveProduct = async (id) => {
    try {
      if (confirm("Are you sure want to delete this product?")) {
        await axios.delete(`${url}/product/remove/${id}`);
        alert("Product Removed!");
        FetchProductData();
      }
    }
    catch (err) {
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`);
    }
  };

  // Update Product – Set Existing Values
  const UpdateFun = (id) => {
    var product = productData.find(a => a._id === id);
    if (product) {
      setUpdateCategory(product.category);
      setUpdateType(product.type);
      setUpdateDesc(product.desc);
      setUpdatePrice(product.price);
      setUpdateImg(product.img);
      setUpdatePreviewImg(product.img);
      setUpdateId(product._id);
    }
  };

  // Update Image
  const UpdateImageFun = (e) => {
    var file = e.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onloadend = () => {
        setUpdateImg(reader.result);
        setUpdatePreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit Update Product
  const UpdateSubmitFun = async (e) => {
    try {
      e.preventDefault();

      var updateFormData = {
        category: updateCategory,
        type: updateType,
        desc: updateDesc,
        price: updatePrice,
        img: updateImg
      };

      await axios.put(`${url}/product/update/${updateId}`, updateFormData);
      alert("Product Updated!");
      FetchProductData();
    }
    catch (err) {
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`);
    }
  };

  // ============================================================
  //                    USER FUNCTIONS (ADMIN)
  // ============================================================

  const fetchUsers = async () => {
    try {
     const res = await axios.get(`${url}/api/user/users`);
      setUsers(res.data);
    } catch (error) {
      console.log("User Fetch Error:", error);
    }
  };

  // ============================================================
  //                   FINAL CONTEXT VALUE
  // ============================================================

  var ContextValue = {

    // PRODUCT VALUES
    category, setCategory,
    type, setType,
    desc, setDesc,
    price, setPrice,
    img, setImg,
    previewImg, setPreviewImg,
    ImageFun,

    ProductSubmitFun,
    name, setName,
    productData,
    RemoveProduct,

    UpdateFun,
    updateCategory, setUpdateCategory,
    updateType, setUpdateType,
    updateDesc, setUpdateDesc,
    updatePrice, setUpdatePrice,
    updatePreviewImg,
    UpdateImageFun,
    UpdateSubmitFun,

    // USER VALUES
    users,
    fetchUsers,
  };

  return (
    <MYcontext.Provider value={ContextValue}>
      {children}
    </MYcontext.Provider>
  );
};

export default Contextprovider;
