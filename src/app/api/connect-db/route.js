import dbConnect from "@/services/dbConnect"

export const connectDB = async () => {
    try {
        dbConnect()
    } catch (e) {
        console.error(e)
    }
}