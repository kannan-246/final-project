import React from 'react'
import { All_Products } from '../../assets/asset'
import { useParams } from 'react-router-dom';

const MyDynamic = () => {
   
  const { id } = useParams()

  var selectedProduct = All_Products.find(a => a.id === Number(id))
  
  return (
    <><div className="text-center my-5" id='angertag'>
    <span ><a href="/">Home/</a><a href="/shop">Shop</a></span>
    </div>
    <div className="container " id=''>
            <div className="row justify-content-center">
            <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 d-flex">
            <img src={selectedProduct.img} alt={selectedProduct.name} height={400} width={500} className="rounded-xl shadow-lg  " />
            <div className="m-5">
                <h1 className="text-2xl font-bold mb-2">{selectedProduct.name}</h1>
                <p className="text-lg text-gray-600 mb-3">{selectedProduct.price} </p>
                <hr />
                <p className="text-gray-500 mb-4"> {selectedProduct.desc} </p>
    
                <button className="bg-dark text-light p-2 ">Add To Card</button> <br/><br />
                <i className="ri-heart-line d-lg-block d-none"> Add To Wishlist</i>
                

            </div>
        </div>
            </div>
        </div>


    </div>
    </>
  )
}

export default MyDynamic