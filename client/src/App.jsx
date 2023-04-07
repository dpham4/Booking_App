import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage, IndexPage, RegisterPage, AccountPage } from "./pages";
import Layout from "./Layout";
import axios from "axios";
import { UserContextProvider } from "./UserContext";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
    return (
        <UserContextProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<IndexPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                        path="/account/:subpage?"
                        element={<AccountPage />}
                    />
                    <Route
                        path="/account/:subpage/:action"
                        element={<AccountPage />}
                    />
                </Route>
            </Routes>
            s
        </UserContextProvider>
    );
}

export default App;
