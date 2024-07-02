"use client"
import { AuthContext } from "@/contexts"
import React from "react"

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = React.useState(null); 

    React.useEffect(() => {
        const storedAuth = localStorage.getItem("auth");
        if (storedAuth) {
            setAuth(JSON.parse(storedAuth));
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