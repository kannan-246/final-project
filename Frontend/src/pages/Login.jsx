import React, { useContext } from "react";
import { Mycontext } from "../context/Contextprovider";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const { loginData, handleInput, loginSubmit, } = useContext(Mycontext);
   const navigate = useNavigate();

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={(e) => loginSubmit(e, navigate)}>
        <h2 className="login-title">Welcome Back</h2>

        <input type="email"  name="email"  placeholder="Email" value={loginData.email} onChange={(e) => handleInput(e, "login")} required  />                                    
        <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={(e) => handleInput(e, "login")} required />
        <div className="login-row">
          <label className="remember">
            <input type="checkbox" /> Remember
          </label>
          <a className="forgot" href="#!">Forgot?</a>
        </div>

        <button type="submit" className="btn-login">Login</button>

        <p className="small">
          Don't have an account? <a href="/">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
