import React, { useContext } from 'react'
import { Myimg } from '../assets/asset'
import { Link } from 'react-router-dom'
import { MYcontext } from '../context/Contextprovider'


const MyForm = () => {

    const { category , setCategory , type , setType , desc , setDesc , price , setPrice , ImageFun , previewImg , ProductSubmitFun,name, setName } = useContext(MYcontext)

  return (
    <>
     <div className="container">
            <div className="d-flex justify-content-between my-3 align-items-center">
                <h3>Add Products</h3>
                <div>
                    <Link to={"/product"} className='fs-5'>View Products</Link>
                    <Link to={"/user"} className='ps-3 fs-5'>View Users</Link>
                </div>
            </div>

            <form onSubmit={ProductSubmitFun} > 

                <input type="file" id='image' hidden onChange={ImageFun} />     
                <label htmlFor="image">
                    <img src={previewImg ? previewImg : Myimg.uploadimg} alt="" height={200} width={200} />
                </label>      
                <input 
    type="text" 
    className='form-control my-3' 
    placeholder='Enter product name...' 
    value={name} 
    onChange={e => setName(e.target.value)} 
/>


            <select className='form-control my-3' value={category} onChange={e => setCategory(e.target.value)}>
            <option hidden>Select Product Category</option>
            <option value="mobile">Mobile</option>
            <option value="laptop">Laptop</option>
            <option value="tab">tab</option>
            <option value="airpods">Airpods</option>
            <option value="headphone">Headphone</option>
            <option value="shirt">Shirt</option>
            <option value="tshirt">Tshirt</option>
            <option value="shorts">Shorts</option>
            <option value="watch">Watch</option>
            </select>
                <input type="text" className='form-control my-3' placeholder='Enter product type...' value={type} onChange={e => setType(e.target.value)} />
                <input type="text" className='form-control my-3' placeholder='Enter product desc...' value={desc} onChange={e => setDesc(e.target.value)} />
                <input type="number" className='form-control my-3' placeholder='Enter product price...' value={price} onChange={e => setPrice(e.target.value)} />
                <input type="submit" className='btn btn-primary w-100' />

            </form>
        </div>
    </>
  )
}

export default MyForm