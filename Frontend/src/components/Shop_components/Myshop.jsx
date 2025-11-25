import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../../context/Contextprovider";

const Myshop = () => {
  const { addtocard, searchText } = useContext(Mycontext);
  const navigate = useNavigate();

  // Backend products store panna
  const [products, setProducts] = useState([]);

  // Backend la irundhu data fetch
  useEffect(() => {
    axios
      axios.get("http://localhost:5000/product/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("Error fetching products:", err));
  }, []);

  // 🔥 UI section reuse panna function
  const showCategory = (title, categoryName) => (
    <div className="container">
      <div className="row">
        <h3 className="text-center mt-5 mb-5">{title}</h3>

        {products.filter((p) => (p?.category || "").toLowerCase() === categoryName.toLowerCase())
          .filter((p) =>p.name.toLowerCase().includes(searchText?.toLowerCase() || "")
          ).map((value, index) => (
            <div className="col-lg-3 col-md-6 col-12"  key={index} onClick={() => navigate(`/dynamic/${value.id}`)} >
              <img src={value.img} alt={value.name} height={150} width={150} className="mt-3" />
              <h6 className="mt-3">{value.name}</h6>
              <h6 className="mt-3">{value.desc}</h6>
              <h3 className="mt-3">₹{value.price}</h3>              
               <button className="btn mb-3" id="addtocardbtn"  onClick={(e) => {e.stopPropagation(); addtocard(value); }} > Add To Cart  </button>                           
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <>
      <h3 className="text-center m-5">WELCOME TO OUR SHOP PAGE</h3>

      {showCategory("MOBILE SECTION", "mobile")}
      {showCategory("LAPTOP SECTION", "laptop")}
      {showCategory("TAB SECTION", "tab")}
      {showCategory("AIRPODS SECTION", "airpods")}
      {showCategory("HEADPHONE SECTION", "headphone")}
      {showCategory("SHIRT SECTION", "shirt")}
      {showCategory("T-SHIRT SECTION", "tshirt")}
      {showCategory("SHORTS SECTION", "shorts")}
      {showCategory("WATCH SECTION", "watch")}
    </>
  );
};

export default Myshop;
