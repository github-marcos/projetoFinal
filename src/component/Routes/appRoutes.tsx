import React, { useState } from "react";
import { 
BrowserRouter as Router,
Route,
Routes,
Navigate,
} from "react-router-dom";

import Login from "./Pages/Login";
import Home from "./pages/Home";

import { AuthContext } from "../Contexts/auth";


const appRoutes = () => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log("login", {email, password});
        setUser(user:)
    };
    const logout = () => {
        console.log("logout");
    };

    return(
        <Router>
            <AuthContext.Provider value={{authenticated: !!user,user, login, logout }}>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/" elemet={<Home/>}/>
            </Routes>
            </AuthContext.Provider>
        </Router>
    );
};

export default appRoutes