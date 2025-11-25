import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Mycontact = () => {
  return (
    <>
    <h1 className='text-center m-5'>Contact Us</h1>
    <div className="container d-flex">  
    <div className="row1 text-center m-5">
        <i className="ri-map-pin-2-line border rounded-circle bg-dark text-light  p-3 fs-3"></i>
        <h3 className='mt-3'>Store Address</h3>
        <p>PO Box 16122 Collins Street West Victoria  8007 Australia</p>
    </div>
    <div className="row2 text-center m-5">
        <i className="ri-phone-line border rounded-circle bg-dark text-light p-3 fs-3"></i>
        <h3 className='mt-3'>Call Info</h3>
        <p>Open a chat or give us call at <br /> +61 3 8376 6284  </p>
        <p></p>
    </div>
    <div className="row3 text-center m-5">
        <i className="ri-mail-fill border rounded-circle bg-dark text-light p-3 fs-3"></i>
        <h3 className='mt-3'>Email Support</h3>
        <p>Sent mail to <br /> support@Sadzon.com </p>
        <p></p>
    </div>
    <div className="row4 text-center m-5">
        <i className="ri-chat-4-line border rounded-circle bg-dark text-light p-3 fs-3"></i>
        <h3 className='mt-3'>Live Support</h3>
        <p>Live chat service <br /> https://www.livechat.com </p>
        <p></p>
        </div>    
    </div>    

    <Row className="g-5 m-5">
        {/* Form */}
        <Col md={6}>
          <h2 className="mb-4">Get In Touch</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Control as="textarea" rows={5} placeholder="Your Message (optional)" />
            </Form.Group>
            <Button variant="dark">Send Message</Button>
          </Form>
        </Col>
 

   {/* Google Map */}
        <Col md={6}>
          <iframe
            title="Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353158453!3d-37.81720997975111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d452e3b5b01%3A0x5045675218ce6e0!2s16122%20Collins%20St%2C%20West%20Melbourne%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sin!4v1694444444444!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>

    </>
  )
}

export default Mycontact
