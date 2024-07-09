"use server";
import { User } from "@/models/user-model";
import { validatePassword } from "@/queries/user-queries";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export async function changePasswordAction(formData, email) {

    const oldPassword = formData.get("oldPassword");
    const newPassword = formData.get("newPassword");
    
    const isMatch = await validatePassword(email, oldPassword);

    if (!isMatch) {
        throw new Error("Invalid old password");
    }

    const filter = {email: email};

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const dataToUpdate = {
        password: hashedPassword
    }

    try{
        await User.findOneAndUpdate(filter, dataToUpdate);
        revalidatePath('/account');
    } catch(error) {
        throw new Error(error);
    }

}