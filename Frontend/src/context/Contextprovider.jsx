import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";


export const Mycontext = createContext();

const Contextprovider = ({ children }) => {

  var url = "http://localhost:5000";

  // -------------------- SEARCH -------------------- //
  const [searchText, setSearchText] = useState("");

  // -------------------- REGISTER FORM -------------------- //
  const [registerData, setRegisterData] = useState({
    firstname: "", lastname: "", email: "", password: ""
  });

  // -------------------- LOGIN FORM -------------------- //
  const [loginData, setLoginData] = useState({
    email: "", password: ""
  });

  // INPUT HANDLER
  const handleInput = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "register") setRegisterData(prev => ({ ...prev, [name]: value }));
    if (formType === "login") setLoginData(prev => ({ ...prev, [name]: value }));
  };

  // REGISTER SUBMIT  + NAVIGATE SUPPORT
  const registerSubmit = async (e, navigate) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/api/user/register`, registerData);
      alert("Registered Successfully!");

      setRegisterData({ firstname: "", lastname: "", email: "", password: "" });

      // navigate to login
      if (navigate) navigate("/login");

    } catch {
      alert("Register Failed");
    }
  };

  // LOGIN SUBMIT  + NAVIGATE SUPPORT
  const loginSubmit = async (e, navigate) => {
  e.preventDefault();
  try {
    await axios.post(`${url}/api/user/login`, loginData);
    alert("Login Successful!");

    // SAVE LOGIN USER
    localStorage.setItem("username", loginData.email);

    // CLEAR FORM
    setLoginData({ email: "", password: "" });

    // GO TO HOME
    if (navigate) navigate("/home");

  } catch {
    alert("Login Failed");
  }
};



  // -------------------- CART SYSTEM -------------------- //
const [cartItems, setCartItems] = useState(() => {
  // Load from localStorage on first render
  const stored = localStorage.getItem("cartItems");
  return stored ? JSON.parse(stored) : [];
});

// Save cart to localStorage whenever cartItems change
useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);

// ADD TO CART
const addtocard = (product) => {
  let updatedCart;

  setCartItems(prev => {
    const exist = prev.find(a => a._id === product._id);
    updatedCart = exist
      ? prev.map(a => a._id === product._id ? { ...a, qty: a.qty + 1 } : a)
      : [...prev, { ...product, qty: 1 }];
    return updatedCart;
  });

  // Alert outside setCartItems
  alert("Product Added to Cart!");
};



  // REMOVE FROM CART
  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item._id !== productId));
  };

  // DECREASE QTY
  const decreaseQty = (productId) => {
    setCartItems(prev => prev.map(item => {
      if (item._id === productId) {
        return { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 };
      } 
      return item;
    }));
  };

  // -------------------- CONTEXT VALUES -------------------- //
  const contextValue = {
     setCartItems,
    searchText, setSearchText,

    registerData, loginData,
    handleInput,
    registerSubmit,
    loginSubmit,

    cartItems,
    addtocard,
    removeFromCart,
    decreaseQty
    
  };

  return (
    <Mycontext.Provider value={contextValue}>
      {children}
    </Mycontext.Provider>
  );
};

export default Contextprovider;
