import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/formatPrice";
import { getCourseList } from "@/queries/course-queries";
import { ArrowRight, ArrowRightIcon, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Courses = async() => {
    const courses = await getCourseList();
    return (
        <section id="courses" className="container space-y-6   md:py-12 lg:py-24">
            <div className="flex items-center justify-between">
                <SectionTitle>Courses</SectionTitle>
                <Link
                    href={""}
                    className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
                >
                    Browse All <ArrowRightIcon className="h-4 w-4" />
                </Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {courses.map((course) => {
                    return (
                        <Link key={course.id} href={`/courses/${course.id}`}>
                            <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
                                <div className="relative w-full aspect-video rounded-md overflow-hidden">
                                    <Image
                                        src={`/images/courses/${course.thumbnail}`}
                                        alt={"course"}
                                        className="object-cover"
                                        fill
                                    />
                                </div>
                                <div className="flex flex-col pt-2">
                                    <div className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
                                        Reactive Accelerator
                                    </div>
                                    <p className="text-xs text-muted-foreground">Development</p>
                                    <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                                        <div className="flex items-center gap-x-1 text-slate-500">
                                            <div>
                                                <BookOpen className="w-4" />
                                            </div>
                                            <span>4 Chapters</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <p className="text-md md:text-sm font-medium text-slate-700">
                                            {formatPrice(49)}
                                        </p>

                                        <Button
                                            variant="ghost"
                                            className="text-xs text-sky-700 h-7 gap-1"
                                        >
                                            Enroll
                                            <ArrowRight className="w-3" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
export default Courses;