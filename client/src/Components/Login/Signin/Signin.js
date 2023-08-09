import "./Signin.css";
import React, { useState } from "react";
const Signin = () => {
  const [Userid, SetUserid] = useState("");
  const [Password, Setpassword] = useState("");

  const HandelUser = (event) => {
    SetUserid(event.target.value);
  };
  const HandelPass =(event)=>{
    Setpassword(event.target.value);
  }
  const handelSubmit =(event)=>{
    event.preventDefault();
    const bucket={
        userid:Userid,
        password:Password
    }
    console.log(bucket);
  }
  return (
    <div className="box">
      <div className="login-form">
        <form onSubmit={handelSubmit}>
          <div className="input-field">
            <input
            className='input'
              type="text"
              id="username"
              placeholder="UserId/Email"
              onChange={HandelUser}
              required
            />
          </div>
          <div className="input-field">
            <input
            className='input'
              type="password"
              id="password"
              placeholder="Password"
              onChange={HandelPass}
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
