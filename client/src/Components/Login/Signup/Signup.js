import React,{useState} from 'react';
import axios from 'axios'
import './Signup.css';
const Signup=()=>{
    const [form,setForm]=useState([])

    const handleChange=(e)=>setForm({...form,[e.target.name]:e.target.value})

    const handelSubmit =async(event)=>{
      event.preventDefault();
      // console.log(form);
      const{user,password,email}=form
      const bucket={
          
          user:user,
          password:password,
          email:email
      }
      if(form.cpassword===bucket.password){
        const {data}=await axios.post('http://localhost/login',bucket)
        
        if(data.message==="success")
          alert("You've Signed Up !")
        else
          alert("You've Not Signed Up !")
      }
      else{
      console.log("Confirm Password is not same as Password !!");
      // setcpass('');
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
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                name="email"
                className='input'
                type="text"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                name="password"
                className='input'
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                className='input'
                name="cpassword"
                type="password"
                id="text"
                placeholder="Confirm Password"
                onChange={handleChange}
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