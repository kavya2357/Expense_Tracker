import React, {useState} from 'react'
import image from './Styles/expensee.jpg'
import "./Styles/landingpage.css"
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase'

function Loginpage() {
    const navigate = useNavigate();

  const auth = getAuth(app);
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const signup=()=>{
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("Account created successfully")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
        // ..
      });
  }

  const login=()=>{
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        navigate('/home')
        // ...
        
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
      });
  }
  
  return (
    <div className='main'>
        <div className='left'>
            <img src={image} alt='img'/>
        </div>
        <div className='right'>
          <div className='login'>
            <h1 style={{margin:'0px',padding:'0px'}}>Login</h1>
            <p style={{fontSize:'1rem',lineHeight:'1.5rem'}}>Welcome back! please enter your details.</p>
          </div>

          <div className='form'>
            <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>

            <input type='password' placeholder='Password' style={{marginBottom:'0px'}} onChange={(e)=>setPassword(e.target.value)}/>
          </div>

          <div style={{display:'flex',justifyContent:'center'}}>
            <p style={{cursor:'pointer',textDecoration:'underline',textUnderlineOffset:'2px'}}>Forgot Password?</p>
          </div>

          <div style={{display:'flex',flexDirection:'column',width:'100%', justifyContent:'center',alignItems:'center'}}>
            <button className='buttonLogin' onClick={login}>Login</button>
            <button className='buttonSignup' onClick={signup}>Signup</button>
          </div>
            
          <div className='signup'>
            <p>Don't have an account? <span style={{fontWeight:'bold',textDecoration:'underline'}}>Sign up for free</span> </p>
          </div>

          
        </div>
    </div>
  )
}

export default Loginpage