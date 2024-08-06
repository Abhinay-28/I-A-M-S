// src/LoginForm.js
import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';



const Login = () => {

    const navigate = useNavigate();
    const {storeToeknInLS} = useAuth()

   

    const handleRegister = ()=>{
      navigate('/register')
    }

    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [login,setLogin] = useState({
    email:"",
    password:"",

  })



  const handleLogin = async(e) => {
    // Perform logout logic here (e.g., clearing authentication tokens)
    // navigate('/Dashboard');

    e.preventDefault();
    if (validateForm()) {
      alert(`Logged in with email: ${email} and password: ${password}`);
     
      // Perform actual login logic here
    }
    // alert(login)
    console.log(login)

    try {

      const response =await fetch(`http://localhost:9998/api/auth/login`,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(login),
         })
  
         if(response.ok){
          const res_data = await response.json()
          setLogin({
             
              email: "",
             
              password: "",
          })
          storeToeknInLS(res_data.token)
          navigate("/dashboard")
         }
      
         console.log(response)
      
     } catch (error) {
      console.log("login",error)
     }



    
  };

  const handleInput = (e)=>{
    let  name= e.target.name
    
    let value = e.target.value
    setLogin({
      ...login,
        [name]:value,
    })

  }



  const validateForm = () => {
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Logged in with email: ${email} and password: ${password}`,login);
      // Perform actual login logic here
    }
    console.log(login)
  };



  

  return (
    
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email:</label>
          <input
            type="email"
             name="email"
            value={login.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label>password:</label>
          <input
            type="password"
            value={login.password}
            name="password"
            onChange={handleInput}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit"  onClick={handleLogin}>Login</button>
      </form>

      <br />
      <button onClick={handleRegister}>Not Login?Register</button>
    </div>
  );
};

export default Login;
