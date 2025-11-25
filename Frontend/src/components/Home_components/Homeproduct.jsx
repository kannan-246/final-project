import React, { useContext } from 'react'
import { HomeProduct } from '../../assets/asset'
import { useNavigate } from 'react-router-dom'

const Homeproduct = () => {

  // const { }= useContext(Mycontext)

  return (
    <>
    <div className="container align-items -center">
        <h1 className='mt-5 mb-5 align-items-center text-center'>LATEST PRODUCT IN OUR SADZON WEBSITE</h1>
        <div className="row text-center align-items-center ">
            {HomeProduct.map((value, index) => (
                <div className="col-lg-1 col-md-6 col-12 " key={index} id='homeproduct'>
                    <img src={value.img} alt={value.text} className="img-fluid p-3 "/>
                    <div className="">
                    <p className=' align-items-center text-center text-dark'>{value.text}</p>
                    </div>
                 </div>
            ))}

            </div>
        </div>


    
    </>
  )
}

export default Homeproduct