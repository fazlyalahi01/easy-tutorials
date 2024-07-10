import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseDetailsTabOne from "./CourseDetailsTabOne";
import CourseDetailsTabThree from "./CourseDetailsTabThree";
import CourseDetailsTabTwo from "./CourseDetailsTabTwo";
import { formatTimestampIntoDate } from "@/lib/formatDate";
import Image from "next/image";

const CourseDetails = ({ course }) => {
    return (
        <section className="py-8 md:py-12">
            <div className="container">
                <span className="bg-success px-4 py-0.5 rounded-full text-xs font-medium text-white inline-block">
                    {course?.category?.title}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3">
                    {course?.title}
                </h3>
                
                <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
                    <div className="flex items-center gap-2">
                        <Image
                            className="w-[40px] h-[40px] rounded-full"
                            src={course?.instructor?.profilePicture}
                            alt="sumit saha"
                            width={40}
                            height={40}
                        />
                        <p className="font-bold">{course?.instructor?.firstName} {course?.instructor?.lastName}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-success font-semibold">Last Updated: </span>
                        <span>{formatTimestampIntoDate(course?.modifiedOn)}</span>
                    </div>
                </div>

                {/* Tab */}
                <div className="my-6">
                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 my-6 max-w-[768px]">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="curriculum">Carriculum</TabsTrigger>
                            <TabsTrigger value="instructor">Instructor</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview">
                            <CourseDetailsTabOne description={course?.description} learning={course?.learning} />
                        </TabsContent>
                        <TabsContent value="curriculum">
                            <CourseDetailsTabTwo course={course} />
                        </TabsContent>
                        <TabsContent value="instructor">
                            <CourseDetailsTabThree instructor={course?.instructor} />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}
export default CourseDetails;