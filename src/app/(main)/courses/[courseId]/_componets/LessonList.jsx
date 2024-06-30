import { AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { getLessonById } from "@/queries/lesson-queries";
import { Clock, Tv, Video } from "lucide-react";

const LessonList = async ({ lessonId }) => {
    const lesson = await getLessonById(lessonId);

    console.log(lesson)

    return (
        <>
            <div className="flex items-center gap-x-2">
                <Tv size={16} className={cn("text-slate-500")} />
                {lesson?.title}
            </div>
        </>
    );
}
export default LessonList;