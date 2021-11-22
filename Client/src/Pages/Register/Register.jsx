import "./Register.scss"
import { useRef } from "react";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
      setEmail(emailRef.current.value);
  }

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
}


  return (
    <div className="register">
      <div className="top">
        <button className="loginButton">Sign In</button>  
      </div>
    
      <div className="container">
        <h1>Relax you mind with your favourite songs</h1>
        <h2>Quick pre made playlists for one-click play action!</h2>
        <p>
          Interested? Enter you email to start!
        </p>
        {
          !email ? (
            <div className="input">
              <input type="email" placeholder="email address" ref = {emailRef} />
              <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
          ) : (
            <form className="input">
              <input type="password" placeholder="password" ref = {passwordRef} />
              <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>
          )
        }
        
      </div>
    </div>
  )
}

export default Register
