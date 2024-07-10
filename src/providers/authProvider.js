"use client"
import { AuthContext } from "@/contexts";
import jsCookie from "js-cookie";
import React from "react";

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = React.useState(null);
    React.useEffect(() => {
        const storedAuth = localStorage.getItem("auth");
        const parsedAuth = JSON.parse(storedAuth);
        if (parsedAuth) {
            setAuth(parsedAuth);
        }
    }, []);

    React.useEffect(() => {
        if (auth) {
            localStorage.setItem("auth", JSON.stringify(auth));
            jsCookie.set("auth", JSON.stringify(auth));
        } else {
            localStorage.removeItem("auth");
            jsCookie.remove("auth");
        }
    }, [auth]);    

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}