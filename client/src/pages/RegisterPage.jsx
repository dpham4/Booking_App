import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = async (e) => {
        e.preventDefault();
        // axios.get("/login");
        try {
            await axios.post("/register", {
                name,
                email,
                password,
            });
            // res.json()
            alert("Registered successful. Now you can login");
        } catch (error) {
            alert("Registered fail. Please try again later ");
        }
    };

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="you@gmaill.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="primary">Register</button>
                </form>
                <div className="text-center py-2 text-gray-500">
                    Already a member?
                    <Link to={"/login"} className="underline text-black">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
