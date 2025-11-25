import React from 'react'
import { Brands } from '../../assets/asset'

export const Popular_brand = () => {
  return (
    <>
    <div className="container align-items-center mt-5 ">
        <h1 className='mt-5 text-center'>Availebal Brands</h1>
        <div className="row ">
        {Brands.map((value, index)=>(
            <div className="col-lg-2 col-md-6 col-12 align-items-center text-center" key={index} >
                <img src={value.img} alt="" height={100} width={100} />
            </div>
        ))}
        </div>
    </div>
    
    </>
  )
}
