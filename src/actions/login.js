"use server"

import { getUserByEmail } from "@/queries/user-queries";
import bcrypt from "bcryptjs";

export const loginAction = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");    
    const user = await getUserByEmail(email);    
    if (!user) {
        return null;
    }

    const isValid = await bcrypt.compare(password, user.password);    
    if (!isValid) {
        return null;
    }

    return user;
}