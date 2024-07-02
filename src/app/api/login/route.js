import { User } from "@/models/user-model";
import dbConnect from "@/services/dbConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

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
        const token = jwt.sign({ first_name: user.firstName, last_name: user.lastName, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1m" });
        return NextResponse.json({ message: "Login successful", token }, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json(error.message, { status: 500 });
    }
}