import './Login.css';
import React,{useState} from 'react';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
const Login=()=>{
    const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };
    return (
        <div >
          <button className="toggle" onClick={toggleForm}>SignIn || SignUp</button>
          {showLogin ? <Signin /> : <Signup />}
        </div>
    );
}
export default Login;