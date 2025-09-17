import React, { useState, useContext, useEffect, Suspense } from "react";
import { MyContext } from "../../App";
import "../../Pages/SignIn/SignIn.css";
import TextField from "@mui/material/TextField"; 
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SignIn = () => {
    const context = useContext(MyContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        context.setIsHeaderFooterShow(false);
        return () => {
            context.setIsHeaderFooterShow(true); // ✅
        }
    }, []);

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/login", {
                email,
                password
            });
            console.log("Login response:", response.data);
            alert(response.data.message);
            context.setIsLogin(true);

            if (response.data.username) {
            context.setUsername(response.data.username);
        } else {
            console.error("Username missing in login response!");
        }
        
            navigate('/'); // after login go home
        } catch (error) {
            console.error(error);
            setErrorMessage(error.response?.data?.error || "Login failed!");
        }
    };

    return (
        <div className="signin-container">
            <div className="spline-container">
                <Suspense fallback={<div>Loading...</div>}>
                    <Spline scene="https://prod.spline.design/wyRxJz95lK-xYZvU/scene.splinecode" />
                </Suspense>
            </div>

            <div className="signin-form">
                <h1>Welcome to Drape Fit</h1>
                <p>Sign in to continue</p>

                <div className="input-container">
                    <TextField 
                        placeholder="Enter your email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required fullWidth 
                        variant="outlined" 
                        className="custom-input" 
                        InputProps={{ style: { color: "white", fontSize: "1.7rem" } }}
                    />
                    <TextField 
                        placeholder="Enter your password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required fullWidth 
                        variant="outlined" 
                        className="custom-input" 
                        InputProps={{ style: { color: "white", fontSize: "1.7rem" } }}
                    />
                </div>

                {errorMessage && <p style={{ color: "red", fontSize: "1.5rem" }}>{errorMessage}</p>}

                <div className="checkbox-container">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>

                <Button variant="contained" fullWidth className="login-btn" onClick={handleLogin}>
                    Login
                </Button>

                <br />
                <p className="signup-link">
                    Not Registered? <Link to="/SignUp">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
