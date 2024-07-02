import { User } from "@/models/user-model";
import dbConnect from "@/services/dbConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    const { email, password } = body;
    try {
        dbConnect();
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json("User not found", { status: 404 });
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return NextResponse.json("Invalid credentials", { status: 401 });
        }
        return NextResponse.json({message:  "Login successful", user}, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json(error.message, { status: 500 });
    }
}