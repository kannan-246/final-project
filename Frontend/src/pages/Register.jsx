import React, { useContext } from "react";
import { Mycontext } from "../context/Contextprovider";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const { registerData, handleInput, registerSubmit } = useContext(Mycontext);
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={(e) => registerSubmit(e, navigate)}>
        <h2 className="title">Create Account</h2>

        <input type="text" name="firstname" placeholder="First Name" value={registerData.firstname} onChange={(e) => handleInput(e, "register")} required />
        <input type="text" name="lastname" placeholder="Last Name" value={registerData.lastname} onChange={(e) => handleInput(e, "register")} required/>
        <input type="email" name="email" placeholder="Email" value={registerData.email} onChange={(e) => handleInput(e, "register")} required />
        <input type="password" name="password" placeholder="Password" value={registerData.password} onChange={(e) => handleInput(e, "register")} required/>
        <button type="submit" className="btn-register">Register</button>
        <p className="small">
          if u have already resterd <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
