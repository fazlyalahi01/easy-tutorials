import { User } from "@/models/user-model";
import dbConnect from "@/services/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    const { firstName, lastName, email, password, role } = body;
    console.log(firstName, lastName, email, password, role);

    try {
        dbConnect();
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