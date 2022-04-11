import React from "react";
import Background from "../../assets/images/signin.png";
import { Link, navigate } from "@reach/router";
import { useForm } from 'react-hook-form';
import './signup.styles.css';

const Signup = () => {
    const {handleSubmit, register, reset } = useForm([]);
    function Submit () {
        navigate("/bills")
        reset()
    }
    return(
        <div className="signup">
            <div className="create-left">
                <img src={Background} alt="A smiling woman with her hand on a chin" />
                <p>Building exceptional<br /> services with Back Office<br /> Support and Business<br /> 
                Perfomance</p>
            </div>
            <div className="create-right">
                <p><strong>Create account</strong></p>
                <p>Build an exceptional business</p>
                <form className="form"  onSubmit={handleSubmit(Submit)}>
                    <div className="name">
                        <div className="input">
                            <label>First name</label>
                            <input type="text" placeholder="Enter your first name"  {...register("firstName",{required: true})} />
                        </div>
                        <div className="input">
                            <label>Last Name</label>
                            <input type="text" placeholder="Enter your last name"  {...register("lastName",{required: true})} />
                        </div>
                    </div>
                    <label>Phone Number</label>
                    <input type="text" placeholder="Enter your phone number" {...register("phoneNumber",{required: true})} />
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email"  {...register("email",{required: true})} />
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password"  {...register("password",{required: true})} />
                    <button className="sign-up">Sign Up</button> 
                </form>
                <div className="sign-in">
                    <p>Got an account? <Link to="#" className="signin-link">Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup;