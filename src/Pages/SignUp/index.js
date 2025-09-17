import React, { useContext, useEffect, useState, Suspense } from "react";
import { MyContext } from "../../App";
import "../../Pages/SignIn/SignIn.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";

// Lazy load Spline viewer to prevent script duplication issues
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SignUp = () => {
    const context = useContext(MyContext);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Hide header & footer on SignUp page
    useEffect(() => {
        context.setIsHeaderFooterShow(false);
        return () => {
            context.setIsHeaderFooterShow(true); // ✅
        }
    }, []);
    const onChangeInput = (e) => {
        setFormFields((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        setErrorMessage(""); // Reset error message when typing
    };

    const validateForm = () => {
        const { name, email, password, confirmPassword } = formFields;

        if (!name.trim()) return "Name is required.";
        if (!/^\S+@\S+\.\S+$/.test(email)) return "Enter a valid email.";
        if (password.length < 6) return "Password must be at least 6 characters.";
        if (password !== confirmPassword) return "Passwords do not match.";
        return "";
    };

    const handleSignup = async () => {
        const error = validateForm();
        if (error) {
            setErrorMessage(error);
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/register", {
                name: formFields.name,
                email: formFields.email,
                password: formFields.password,
            });

            alert(response.data.message);
            context.setIsLogin(true);
        } catch (error) {
            setErrorMessage(error.response?.data?.error || "Signup failed!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="signin-container">
            {/* Left Side: Spline 3D Model */}
            <div className="spline-container">
                <Suspense fallback={<div>Loading 3D Model...</div>}>
                    <Spline scene="https://prod.spline.design/wyRxJz95lK-xYZvU/scene.splinecode" />
                </Suspense>
            </div>

            {/* Right Side: Sign Up Form */}
            <div className="signin-form">
                <h1>Welcome to Drape Fit</h1>
                <p>Create an Account</p>

                <div className="input-container">
                    <TextField 
                        name="name" 
                        value={formFields.name} 
                        onChange={onChangeInput} 
                        placeholder="Enter your name" 
                        required fullWidth 
                        variant="outlined" 
                        className="custom-input" 
                        InputProps={{ style: { color: "white", fontSize: "1.7rem" } }} 
                    />
                    <TextField 
                        name="email" 
                        value={formFields.email} 
                        onChange={onChangeInput} 
                        placeholder="Enter your email" 
                        type="email" required 
                        fullWidth variant="outlined" 
                        className="custom-input" 
                        InputProps={{ style: { color: "white", fontSize: "1.7rem" } }} 
                    />
                    <TextField 
                        name="password" 
                        value={formFields.password} 
                        onChange={onChangeInput} 
                        placeholder="Enter your password" 
                        type="password" 
                        required fullWidth 
                        variant="outlined" 
                        className="custom-input" 
                        InputProps={{ style: { color: "white", fontSize: "1.7rem" } }} 
                    />
                    <TextField 
                        name="confirmPassword" 
                        value={formFields.confirmPassword} 
                        onChange={onChangeInput} 
                        placeholder="Confirm password" 
                        type="password" 
                        required fullWidth 
                        variant="outlined" 
                        className="custom-input" 
                        InputProps={{ style: { color: "white", fontSize: "1.7rem" } }} 
                    />
                </div>

                {/* Display error message */}
                {errorMessage && <p style={{ color: "red", fontSize: "1.5rem" }}>{errorMessage}</p>}

                <br />
                <Button 
                    variant="contained" 
                    fullWidth 
                    className="login-btn" 
                    onClick={handleSignup} 
                >
                    {isLoading ? "Signing Up..." : "Sign Up"}
                </Button>

                <br />
            
                <br />
                <p className="signup-link">
                    Already have an Account? <Link to="/SignIn">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;