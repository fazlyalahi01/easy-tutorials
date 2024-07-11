import { User } from "@/models/user-model";
import { getUserByEmail } from "@/queries/user-queries";
import dbConnect from "@/services/dbConnect";
import { NextResponse } from "next/server";

export async function GET(request) {
    dbConnect();
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    try {
        if (!email) {
            const users = await User.find();
            return NextResponse.json({ message: "Users fetched successfully", data: users }, { status: 200 });
        } else if (email) {
            const user = await getUserByEmail(email);
            if (!user) {
                return NextResponse.json({ message: "User not found", status: 404 });
            }

            return NextResponse.json({ message: "User fetched successfully", data: user, status: 200 });
        }
    } catch (e) {
        return NextResponse.json({ message: "Something went wrong", status: 500 });
    }
}