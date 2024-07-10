"use server"

import { User } from "@/models/user-model";
import { NextResponse } from "next/server";

export const updateSocialMediaAction = async (email, phone, socialMedia) => {
    const filter = { email: email };

    const dataToUpdate = {
        socialMedia: socialMedia, 
        phone: phone
    }

    try {
        await User.findOneAndUpdate(filter, dataToUpdate);
    } catch (error) {
        throw new Error(error);
    }

}
