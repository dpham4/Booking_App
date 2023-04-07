import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/login", { email, password });
            setUser(data);
            alert("Login successful");
            setRedirect(true);
        } catch (error) {
            alert("Login failed");
        }
    };

    if (redirect) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLogin}>
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
                    <button className="primary" onClick={handleLogin}>
                        Login
                    </button>
                </form>
                <div className="text-center py-2 text-gray-500">
                    Don't have an account yet?
                    <Link to={"/register"} className="underline text-black">
                        Register now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
