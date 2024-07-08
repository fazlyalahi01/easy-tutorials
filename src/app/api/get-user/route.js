import { getUserByEmail } from "@/queries/user-queries";
import dbConnect from "@/services/dbConnect";
import { NextResponse } from "next/server";

export async function GET(request) {
    dbConnect();
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    if (!email) {
        return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }
    try {
        const user = await getUserByEmail(email);
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        return NextResponse.json(user);
    } catch (e) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}