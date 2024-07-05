import { replaceMongoIdInObject } from "@/lib/formatData";
import { User } from "@/models/user-model";

export async function getUserByEmail(email) {
    const user = await User.findOne({ email }).lean();
    return replaceMongoIdInObject(user);
}