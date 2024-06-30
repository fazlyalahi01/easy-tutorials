import { replaceMongoIdInObject } from "@/lib/formatData";
import { Lesson } from "@/models/lesson-model";

export async function getLessonById(lessonId) {
    const lessons = await Lesson.findById(lessonId).lean();
    return replaceMongoIdInObject(lessons);
}