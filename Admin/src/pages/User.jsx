import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MYcontext } from '../context/Contextprovider'

const User = () => {

  const { users } = useContext(MYcontext);

  return (
    <>

      <div className="container">
        <div className="d-flex justify-content-between my-3 align-items-center">
          <h3>User List</h3>
          <Link to={"/"} className='fs-5'>Add Products</Link>
        </div>

        <table className='table table-primary text-center align-middle'>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Password</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {users.length > 0 ? (
              users.map((value, index) => (
                <tr key={index}>
                  <td>{value.firstname}</td>
                  <td>{value.lastname}</td>
                  <td>{value.password}</td>
                  <td>{value.email}</td>
                  <td>
                  <button className='btn btn-danger btn-sm'> Delete </button>                    
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No Users Found
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

    </>
  )
}

export default User
