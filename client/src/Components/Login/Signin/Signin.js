import "./Signin.css";
import React, { useState } from "react";
import axios from 'axios'
const Signin = () => {
  const[form,setForm]=useState([])
  
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handelSubmit =async(event)=>{
    event.preventDefault();
    const {user,password}=form;
    const bucket={
        user:user,
        password:password
    }
    console.log(bucket);
    try {
      const{data}=await axios.post("http://localhost/login/auth",bucket)
      console.log(data);
      if(data.message==="authorized")
        alert("Logged in succeessfully !")
    } catch (error) {
      alert("Something Went Wrong !");
    }
  }
  return (
    <div className="box">
      <div className="login-form">
        <form onSubmit={handelSubmit}>
          <div className="input-field">
            <input
              name="user"
              className='input'
              type="text"
              id="username"
              placeholder="UserId/Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <input
              name="password"
              className='input'
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <button  className='button'type="submit">Login</button>
          <a className="text" href="https://www.example.com">
            Forgot Password
          </a>
        </form>
      </div>
    </div>
  );
};
export default Signin;
