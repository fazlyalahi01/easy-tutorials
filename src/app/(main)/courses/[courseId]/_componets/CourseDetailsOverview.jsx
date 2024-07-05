import PaymentButton from "@/components/payment-button";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { getCourseById } from "@/queries/course-queries";
import Image from "next/image";
import Link from "next/link";

const CourseDetailsOverview = async ({ course }) => {
    console.log(course)
    return (
        <div className="overflow-x-hidden  grainy">
            <section className="pt-12  sm:pt-16 bg-lightBg">
                <div className="container flex flex-col-reverse md:flex-row md:justify-between py-12">
                    <div className=" mx-auto md:w-[60%] flex flex-col  justify-center pr-12">

                        <Link href="#">
                            <Badge>{course?.category?.title}</Badge>
                        </Link>
                        <p className="mt-3 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                            <span className="relative inline-flex sm:inline">
                                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                <span className="relative">{course?.title}</span>
                            </span>
                        </p>

                        <h5 className="text-sm text-primary pt-2 leading-relaxed">{course?.description}</h5>

                        <div className="mt-6 flex items-center flex-wrap gap-3">
                            <PaymentButton asLink={false} course={course} />

                            <Link
                                href=""
                                className={cn(
                                    buttonVariants({ variant: "outline", size: "lg" })
                                )}
                            >
                                See Intro
                            </Link>
                        </div>
                    </div>

                    <div className="md:pb-12  my-6 md:w-[40%]">
                        <div className="relative">
                            <div className="absolute inset-0 h-2/3"></div>
                            <div className="relative mx-auto">
                                <div className="lg:max-w-3xl lg:mx-auto">
                                    <Image
                                        className="w-full rounded-lg"
                                        width={768}
                                        height={463}
                                        src={`/images/courses/${course?.thumbnail}`}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default CourseDetailsOverview;