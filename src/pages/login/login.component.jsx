import React from "react";
import Background from "../../assets/images/signin.png";
import { Link, navigate } from "@reach/router";
import { useForm } from 'react-hook-form';
import "./login.css";

const Login = () => {
    const {handleSubmit, register } = useForm([]);
    function Submit () {
        navigate("/bills")
    }
    return(
        <div className="login">
            <div className="create-left">
                <img src={Background} alt="A smiling woman with her hand on a chin" />
                <p>Building exceptional<br /> services with Back Office<br /> Support and Business<br /> 
                Perfomance</p>
            </div>
            <div className="create-right">
                <p><strong>Log in to your account</strong></p>
                <form className="form" onSubmit={handleSubmit(Submit)}>
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email"  {...register("email",{required: true})} />
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password"  {...register("password",{required: true})} />
                    <button className="sign-up">Login</button> 
                </form>
                <div className="sign-in">
                    <p>Don't have an account?<Link to="/" className="signin-link"> Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;