import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5050/planner/login", { email, password })
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                sessionStorage.setItem("username", email
                );
                navigate("/tasks")
            }else{
                navigate("/signup")
                alert("You are not registered to this service")

            }
       
        })
        .catch(err => console.log(err))
    }

    const logout = () => {
        sessionStorage.removeItem("username");
        location.reload();
    };


  return (
    <>
    {(!sessionStorage.username) ? (
        <div className="d-flex justify-content-center align-items-center">
        <div className="bg-white p-3 rounded w-25">
            <h2><center>Login</center></h2>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Email' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0' 
                    onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password" 
                    placeholder='Enter Password' 
                    name='password' 
                    className='form-control rounded-0' 
                    onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Login
                </button>
                </form>
                <p>Don't have an account?</p>
                <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Sign Up
                </Link>
            
        </div>
        </div>
    ) : (
        <div className="d-flex justify-content-center align-items-center">
        <div className="bg-white p-3 rounded w-25">
            <h1>User is logged in</h1>
            <br></br>
            <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" onClickCapture={logout}>
                Logout User
            </button>
        </div>
        </div>
    )}
    </>
  );
}

export default Login;