import React from "react";

const MyFooter = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-light mt-5">
        <div className="footer container py-5">
          <div className="row gy-4">
            {/* Brand Info */}
            <div className="col-12 col-md-6 col-lg-4">
              <h2>Sadzone</h2>
              <p>
                Whether you're a trendsetter, a minimalist, or an adventure at
                heart, Sadzone has something for everyone. Our diverse range of
                styles caters to various personas.
              </p>
              <div className="d-flex gap-2 mt-3">
                <i className="ri-twitter-x-line border rounded-circle fs-5 p-2"></i>
                <i className="ri-facebook-line border rounded-circle fs-5 p-2"></i>
                <i className="ri-instagram-line border rounded-circle fs-5 p-2"></i>
                <i className="ri-pinterest-line border rounded-circle fs-5 p-2"></i>
              </div>
            </div>

            {/* About Us */}
            <div className="col-12 col-md-6 col-lg-2">
              <h5>About Us</h5>
              <p>Our Story</p>
              <p>Mission & Values</p>
              <p>Meet the Team</p>
              <p>Sustainability Efforts</p>
              <p>Brand Partnerships</p>
              <p>Influencer Collaborations</p>
            </div>

            {/* Accessibility */}
            <div className="col-12 col-md-6 col-lg-2">
              <h5>Accessibility</h5>
              <p>Accessibility Statement</p>
              <p>Site Map</p>
              <p>Web Accessibility Options</p>
              <p>ADA Compliance</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>

            {/* Community */}
            <div className="col-12 col-md-6 col-lg-2">
              <h5>Join Our Community</h5>
              <p>VIP Membership</p>
              <p>Loyalty Program</p>
              <p>Customer Reviews</p>
              <p>Style Forums</p>
              <p>Job Openings</p>
              <p>Terms of Service</p>
            </div>

            {/* Newsletter */}
            <div className="col-12 col-md-8 col-lg-2">
              <h5>Let's Get in Touch</h5>
              <p>Sign up for our newsletter and receive 10% off your first order</p>
              <form>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </form>
            </div>
          </div>

          <hr className="border-secondary mt-4" />
          <div className="text-center pb-3">
            <small>© {new Date().getFullYear()} Sadzon. All rights reserved.</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFooter;
