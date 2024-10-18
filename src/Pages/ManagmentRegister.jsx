import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { default as logo } from "../assets/logo.svg";

const ManagmentRegister = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();

    async function handleRegister(e) {
        try {
            e.preventDefault();
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/"); 
        } catch (error) {
            console.log(error);
        }
    }

    const googleProvider = new GoogleAuthProvider();
    async function googleSignUp() {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto p-8 lg:px-12 lg:py-16 bg-white shadow-xl rounded-lg flex flex-col lg:flex-row justify-between">
                
                <div className="lg:w-1/2 flex flex-col justify-center mb-10 lg:mb-0">
                    <div className="flex items-center mb-5">
                        <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#d3613a]">
                            CLASS TRACKER<br />
                            <span className="text-[#1e2d4c] font-extrabold"> RBU </span>
                        </h2>
                    </div>
                    <p className="text-lg text-[#1e2d4c] leading-relaxed">
                        Welcome! Please register to manage classes and oversee the student progress.
                    </p>
                </div>

                <div className="lg:w-1/2 bg-[#f4f4f4] p-8 rounded-lg shadow-md" style={{ marginLeft: "20px" }}>
                    <h3 className="text-2xl font-bold text-[#d3613a] text-center mb-5">
                        Management Registration
                    </h3>
                    <form>
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={e => setFullName(e.target.value)}
                                className="form-input mt-1 block w-full border-gray-300 shadow-sm rounded-md px-4 py-2 focus:ring-[#d3613a] focus:border-[#d3613a] focus:outline-none transition duration-200 ease-in-out"
                            />
                        </div>

                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Department"
                                value={department}
                                onChange={e => setDepartment(e.target.value)}
                                className="form-input mt-1 block w-full border-gray-300 shadow-sm rounded-md px-4 py-2 focus:ring-[#d3613a] focus:border-[#d3613a] focus:outline-none transition duration-200 ease-in-out"
                            />
                        </div>

                        <div className="mb-6">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="form-input mt-1 block w-full border-gray-300 shadow-sm rounded-md px-4 py-2 focus:ring-[#d3613a] focus:border-[#d3613a] focus:outline-none transition duration-200 ease-in-out"
                            />
                        </div>

                        <div className="mb-6">
                            <input
                                type="password"
                                placeholder="Password (Minimum 6 Characters)"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="form-input mt-1 block w-full border-gray-300 shadow-sm rounded-md px-4 py-2 focus:ring-[#d3613a] focus:border-[#d3613a] focus:outline-none transition duration-200 ease-in-out"
                            />
                        </div>

                        <button
                            type="submit"
                            onClick={handleRegister}
                            className="w-full bg-[#d3613a] text-white font-bold py-2 rounded shadow hover:bg-[#1e2d4c] transition-colors"
                        >
                            Register
                        </button>

                        <div className="text-center mt-4">
                            <p className="text-[#d3613a] font-semibold">or sign up with:</p>
                            <button
                                type="button"
                                onClick={googleSignUp}
                                className="text-[#d3613a] mt-2"
                            >
                               
                            </button>
                            <p className="mt-4 text-sm text-[#d3613a] font-semibold">
                                Already have an account?{" "}
                                <Link to="/ManagmentLogin" className="text-blue-500 font-extrabold">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ManagmentRegister;
