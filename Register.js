import React, { useState } from "react";
import {Link} from "react-router-dom";
import  "./Register.css";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="App">
        <div className="auth-form-container">
            
            <h1>SURVEYL</h1><br></br>
            <h2>REGISTER</h2><br></br>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">First Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="First Name" />
            <label htmlFor="name">Last Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Last Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="your email@gmail.com" id="email" name="Email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="Password" /><br></br>
            <button type="submit"><Link to="/Home">Log In</Link></button>
        </form><br></br>
        <Link to="/Login">
            <button className="link-btn">Already have an account? Login here.</button>
            </Link>
    </div></div>
    )
}
