import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MYcontext } from '../context/Contextprovider'
import { Myimg } from '../assets/asset'

const MyProduct = () => {

  const {productData , RemoveProduct , UpdateFun , updateCategory , setUpdateCategory , updateType , setUpdateType , updateDesc , setUpdateDesc , updatePrice , setUpdatePrice , updatePreviewImg , UpdateImageFun , UpdateSubmitFun , name, setName,} = useContext(MYcontext)

  return (
    <>

    <div className="container">
            <div className="d-flex justify-content-between my-3 align-items-center">
                <h3>Products List</h3>
                <Link to={"/"} className='fs-5'>Add Products</Link>
            </div>

     <table className='table table-primary text-center align-middle'>
                        <thead>
                        <tr>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Desc</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Action</th>
                    </tr>
    </thead>
    <tbody>
      {
            productData.length === 0 
            ? 
                <tr>
                     <td className='text-danger' colSpan={7}>No Products Found!</td>
                </tr>
            : 
                productData.map((value , index) => {
                    return(
                        <tr key={index}>
                            <td><img src={value.img} alt="" height={60} /></td>
                            <td>{value.category}</td>
                            <td>{value.type}</td>
                            <td>{value.desc}</td>
                            <td>₹{value.price}</td>
                            <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#mymodal" onClick={() => UpdateFun(value._id)} >Update</button></td>
                            <td><span className='btn btn-danger'  onClick={() => RemoveProduct(value._id)} > Remove </span></td>
                        </tr>
                    )
                })
        }  
    </tbody>
            </table>
            </div>


             <div className="modal fade" id='mymodal'>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Update Product</h4>
                            <button className='btn-close' data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form className='container' onSubmit={UpdateSubmitFun}>
                                
                                <input type="file" id="updateImage" hidden onChange={UpdateImageFun} />
                                <label htmlFor="updateImage">
                                    <img src={updatePreviewImg ? updatePreviewImg : Myimg.uploadimg} alt="" height={200} />
                                </label>

                                <select className='form-control my-3' value={updateCategory} onChange={e => setUpdateCategory(e.target.value)} >
                                    <option>New Arrival</option>
                                    <option>Shop</option>
                                </select>

                                <input type="text" className='form-control my-3' placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)}/>
                                <input type="text" className='form-control my-3' value={updateType} onChange={e => setUpdateType(e.target.value)} />
                                <input type="text" className='form-control my-3' value={updateDesc} onChange={e => setUpdateDesc(e.target.value)} />
                                <input type="number" className='form-control my-3' value={updatePrice} onChange={e => setUpdatePrice(e.target.value)} />
                                
                                <input type="submit" className='btn btn-primary w-100' />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
    </>
  )
}

export default MyProduct