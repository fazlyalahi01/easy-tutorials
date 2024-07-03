"use client"
import { AuthContext } from "@/contexts"
import React from "react"
import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = React.useState(null);

    React.useEffect(() => {
        const storedAuth = localStorage.getItem("auth");
        const parsedAuth = JSON.parse(storedAuth);
        if (parsedAuth?.token) {
            setAuth(parsedAuth);
        }
    }, []);

    React.useEffect(() => {
        if (auth) {
            localStorage.setItem("auth", JSON.stringify(auth));
        } else {
            localStorage.removeItem("auth");
        }
    }, [auth]);    

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}