import React from 'react'
import { Logo } from '../../assets/asset'

const MyAbout = () => {
  return (
    <>
    <div className="container">
        <img src={Logo.Aboutimg} alt="" className='mt-5' height={400} width="100%"/>
        <div className="mt-5">
            <h3>Welcome to SADZON, your one-stop destination for all things trendy and affordable!
                We bring you the latest products in electronics, fashion, and accessories, carefully selected to meet your lifestyle needs.
                </h3>
                <h3 className='mt-5'>
                At SADZON, our mission is simple — to deliver quality products at unbeatable prices while providing a smooth and secure online shopping experience.</h3>

                <h3 className='mt-5'>💡 Why Choose Us?</h3>
                    <ul>
                    <h3><li> Best Deals Everyday – Save big with exciting offers and seasonal discounts.</li></h3>
                    <h3><li> Fast & Reliable Delivery – We ensure your orders reach you safely and on time.</li></h3>
                    <h3><li> Customer First Policy – Our support team is always ready to help you.</li></h3>
                    <h3><li>Secure Shopping – We value your trust and protect your data with top-notch security.</li></h3>
                    </ul>

                <h3 className='mt-5'>📦Our Categories</h3>
                <h3>From the latest laptops and smartphones to fashion wear and home essentials, SADZON is constantly updating its collection to bring you the newest trends.</h3>

                <h3 className='mt-5'>❤️ Our Vision </h3>
                <h3>To become one of India’s most trusted and loved online stores by delivering happiness through every product.</h3>

                <h3 className='mt-5'>📞 Contact Us</h3>
                <h3>Have questions or suggestions? We’d love to hear from you!</h3>
                <h3> Email: support@sadzon.com</h3>
                <h3> Location: Chennai, India</h3>
        </div>
    </div>
    </>
  )
}

export default MyAbout