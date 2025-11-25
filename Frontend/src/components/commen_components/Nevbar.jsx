import Nav from 'react-bootstrap/Nav';
import { Mycontext } from '../../context/Contextprovider'; 
import { useContext } from 'react';



function Nevbar() {

       
  const{ cartItems, setCartItems, addtocard, removeFromCart, decreaseQty, searchText, setSearchText } = useContext(Mycontext)
  return (
    <>
        <div className=" d-flex justify-content-between w-100" id='Nevbar'>
          <div className="d-flex">
            <h3>sadzon</h3>      
          </div>
          <div className="d-none d-lg-block " id='menu'>
            <Nav className="me-auto">
            <Nav.Link  href='/'>Home</Nav.Link>
             <Nav.Link href='/about'>About</Nav.Link>
             <Nav.Link href='/shop' >shop</Nav.Link>
             <Nav.Link href='/contact' >Contact-us</Nav.Link> 
          </Nav>
          </div>
          <div className="">
             <span><i className="ri-user-line pe-3 fs-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"></i></span>
             <span><i className="ri-search-line pe-3 fs-4"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"></i></span>
             <span style={{ position: 'relative' }}><i className="ri-shopping-cart-2-line pe-3 fs-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightcart">cart</i>
             {cartItems.length > 0 && (
             <span className="cart-badge">
              {cartItems.reduce((acc, item) => acc + item.qty, 0)}
            </span>
            )}
           </span>
          </div>
          <div className='d-block d-lg-none'>
          <button className="navbar-toggler btn" id='menuline'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasstart">
          <i className="ri-menu-line text-light"></i>
          </button>
          </div>
          </div>
      
     

      {/* toggle offcanvas */}
    <div className=" offcanvas offcanvas-start" tabIndex={-1} id="offcanvasstart"  aria-labelledby="offcanvasTopLabel">
    <div className="offcanvas-header" id='menus'>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body" id='menus'>
       <Nav className="me-auto" id='menu'>
           <Nav.Link  href='/'>Home</Nav.Link>
             <Nav.Link href='/about'>About</Nav.Link>
             <Nav.Link href='/shop' >shop</Nav.Link>
             <Nav.Link href='/contact' >Contact-us</Nav.Link> 
          </Nav>
    </div>
</div>

{/* user icon offcanvas */}
<div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">Login</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
 </div>
</div>


{/* search offcanvas */}

<div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div className="offcanvas-header">
    <input
      type="text"
      className="form-control w-100"
      placeholder="Search products..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
</div>



{/* cart offcanvas */}

<div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRightcart" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">Cart Items</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div className="table-responsive">
      <table className="table text-center align-items-center">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-danger text-center">No Products Found!</td>
            </tr>
          ) : (
            cartItems.map((value, index) => (
              <tr key={index}>
                <td><img src={value.img} height={50} /></td>
                <td>{value.name}</td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    {/* Decrease Qty */}
                    <button
                      className="btn-sm border-none bg-light"
                      onClick={() => {
                        const updated = cartItems.map((item, i) =>
                          i === index && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
                        );
                        setCartItems(updated);
                        localStorage.setItem("cartItems", JSON.stringify(updated));
                      }}
                    >-</button>

                    <span className="fw-bold">{value.qty}</span>

                    {/* Increase Qty */}
                    <button
                      className="btn-sm"
                      onClick={() => {
                        const updated = cartItems.map((item, i) =>
                          i === index ? { ...item, qty: item.qty + 1 } : item
                        );
                        setCartItems(updated);
                        localStorage.setItem("cartItems", JSON.stringify(updated));
                      }}
                    >+</button>
                  </div>
                </td>

                <td>${value.price * value.qty}</td> {/* qty * price */}

                {/* Remove */}
                <td>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => {
                      const updated = cartItems.filter((_, i) => i !== index);
                      setCartItems(updated);
                      localStorage.setItem("cartItems", JSON.stringify(updated));
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}

          {/* Total Row */}
          {cartItems.length > 0 && (
            <tr>
              <td colSpan={3} className="text-end fw-bold">Total </td>
              <td colSpan={2} className="fw-bold">
                ${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>

     
    </>
  );
}

export default Nevbar;