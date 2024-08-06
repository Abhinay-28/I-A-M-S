// import res from "express/lib/response";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import './register.css'

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  

  const navigate= useNavigate()

  const {storeToeknInLS} = useAuth() 

  const handleInput = (e)=>{
    let name = e.target.name
    let value=e.target.value
    setUser({
      ...user,
        [name]:value,
    })

  }

  const handleRegister = (e)=>{
    e.preventDefault()
    navigate("/login")
  }


  const handleSubmit =async (e)=>{
   e.preventDefault()
   console.log(user)
//    alert(user)

   try {

    const response =await fetch(`http://localhost:9998/api/auth/register`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user),
       })

       if(response.ok){
        const res_data = await response.json()
        console.log(res_data)
        storeToeknInLS(res_data.token)
        localStorage.setItem("token",res_data)

        setUser({
            username: "",
            email: "",
            phone: "",
            password: "",
        })
        navigate("/login")
       }
    
       console.log(response)
    
   } catch (error) {
    console.log("register",error)
   }

  
  }

  return (
    <>
      <section>
        <main>
          <div className="section-registrations">
            
              <div className="registration-images">
                <img src="" alt="" />
              </div>

              {/* registration form */}
              <div className="registration-forms">
                <h1 className="main-heading mb-3"> registration form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder=" enter your username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="enter your phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="enter your password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button className="btn-register" type="submit">
                    Register
                  </button>
                  <br /><br />
                  <button className="btn-register" onClick={handleRegister}type="submit">
                    Already Registered?Login
                  </button>
                </form>
              </div>
            
          </div>
        </main>
      </section>
    </>
  );
};
