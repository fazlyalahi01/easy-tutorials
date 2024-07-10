"use client"
import { AuthContext } from "@/contexts"
import React from "react"

export const useAuth = () => {
    const { auth, setAuth } = React.useContext(AuthContext);
    return { auth, setAuth };
}