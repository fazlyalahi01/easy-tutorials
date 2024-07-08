"use server";
import { User } from "@/models/user-model";
import { revalidatePath } from "next/cache";

export const updateProfileAction = async (email, profileData) => {
    try {
        const fileter = { email }
        const res = await User.findOneAndUpdate(fileter, profileData); 
        revalidatePath("/account");
    } catch (e) {
        throw new Error("Something went wrong");
    }
}