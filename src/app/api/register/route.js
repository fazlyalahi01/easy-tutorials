import { User } from "@/models/user-model";
import dbConnect from "@/services/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    const { firstName, lastName, email, password, role } = body;
    console.log(firstName, lastName, email, password, role);

    try {
        dbConnect();
    // check if user already exist with this email 
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({message: "User already exists"}, { status: 409 });
        }
        await User.create({
            firstName,
            lastName,
            email,
            password,
            role
        });
        return NextResponse.json("User created successfully", { status: 201 });
    } catch (error) {
        return NextResponse.json(error.message, { status: 500 });
    }
}