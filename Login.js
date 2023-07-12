import React, { useState } from "react";
import {Link} from "react-router-dom";
import  "./Login.css";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        
    }

    return (
        <div className="App">
        <div className="auth-form-container">
            <h1>SURVEYL</h1><br></br>
            <h2>LOGIN</h2><br></br>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="your email@gmail.com" id="email" name="Email" />
                <label htmlFor="Password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="Password" />
                <br></br>
                <br></br>
                
                <button type="submit"><div className="logins"><Link to="/Home">Log In</Link></div></button>
            </form><br></br>
                <Link to ="/Register">
                <button className="link-btn">Don't have an account? Register here.</button>
                </Link>
        </div></div>
    )
}