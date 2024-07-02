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
            try {
                if (parsedAuth.token) {
                    const decodedToken = jwtDecode(parsedAuth.token);
                    if (decodedToken.exp * 1000 < Date.now()) {
                        console.log("token expired")
                        setAuth(null);
                        localStorage.removeItem("auth");
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
    }, []);

    React.useEffect(() => {
        if (auth) {
            localStorage.setItem("auth", JSON.stringify(auth));
        } else {
            localStorage.removeItem("auth");
        }
    }, [auth]);

    const SignOut = () => {
        setAuth(null);
        localStorage.removeItem("auth");
    };

    return (
        <AuthContext.Provider value={{ auth, setAuth, SignOut }}>
            {children}
        </AuthContext.Provider>
    )
}