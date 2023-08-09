import React,{useState} from 'react';
import './Signup.css';
const Signup=()=>{
    const [Userid, SetUserid] = useState("");
    const [Password, Setpassword] = useState("");
    const [cpass,setcpass] = useState("");  
    const HandelUser = (event) => {
      SetUserid(event.target.value);
    };
    const HandelPass =(event)=>{
      Setpassword(event.target.value);
    }
    const HandelcPass=(event)=>{
        setcpass(event.target.value);
    }
    const handelSubmit =(event)=>{
      event.preventDefault();
      const bucket={
          userid:Userid,
          password:Password
      }
      if(Password===cpass){
          console.log(bucket);
      }
      else{
      console.log("Confirm Password is not same as Password !!");
      setcpass('');
      }
    }
    return (
      <div className="box">
        <div className="login-form">
          <form onSubmit={handelSubmit}>
            <div className="input-field">
              <input
                className='input'
                type="text"
                placeholder="UserId/Email"
                onChange={HandelUser}
                required
              />
            </div>
            <div className="input-field">
              <input
                className='input'
                type="password"
                placeholder="Password"
                onChange={HandelPass}
                required
              />
            </div>
            <div className="input-field">
              <input
              className='input'
                type="text"
                id="text"
                placeholder="Confirm Password"
                onChange={HandelcPass}
                required
              />
            </div>
            <button type="submit"
            className='button'
            >Sign up</button>
          </form>
        </div>
      </div>
    );
  };
  export default Signup;