import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Book, BookCheck, Clock, Clock10, FileQuestion, NotepadText, Radio, StickyNote, Tv, Video } from "lucide-react";
import LessonList from "./LessonList";

const CourseDetailsTabTwo = ({ course }) => {
    const totalDuration = course?.modules?.reduce((acc, module) => acc + module?.duration, 0);
    const moduleSlugs = course?.modules?.map((module) => module.slug);
    return (
        <>

            <div class="flex gap-x-5 items-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
                <span className="flex items-center gap-1.5">
                    <BookCheck className="w-4 h-4" />
                    {course?.modules?.length} Chapters
                </span>
                <span className="flex items-center gap-1.5">
                    <Clock10 className="w-4 h-4" />
                    {(totalDuration / 60).toPrecision(2)} Hours
                </span>
            </div>
            {/* contents */}

            <Accordion
                defaultValue={moduleSlugs}
                type="multiple"
                collapsible
                className="w-full"
            >
                {
                    course?.modules?.map((module) => (
                        <AccordionItem value={module.slug} key={module.id} className="border-none my-2">
                            <AccordionTrigger className="bg-gray-100 p-4 rounded-md ">
                                <div>{module.title}</div>
                                <span className="flex items-center gap-1.5 text-sm">
                                    <Clock10 className="w-4 h-4" />
                                    {(totalDuration / 60).toPrecision(2)} Hours ।
                                    <Book className="w-4 h-4" />
                                    2 Lessons
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="p-2">                              
                                <div className="space-y-3">
                                    <button
                                        type="button"
                                        className={cn(
                                            "flex flex-col justify-start gap-x-4 gap-y-4 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                        )}
                                    >
                                        {
                                            module?.lessonIds?.map((lessonId) => (
                                                <LessonList key={lessonId} lessonId={lessonId} />
                                            ))
                                        }
                                    </button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </>
    );
}
export default CourseDetailsTabTwo;