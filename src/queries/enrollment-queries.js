import { replaceMongoIdInArray } from "@/lib/formatData";
import { Enrollment } from "@/models/enrollment-model";

export async function getEnrollmentList(courseId) {
    console.log(courseId)
    const enrollments = await Enrollment.find({ course: courseId }).lean();
    console.log(enrollments)
    return replaceMongoIdInArray(enrollments)
}