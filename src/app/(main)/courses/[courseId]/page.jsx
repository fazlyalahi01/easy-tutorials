import { getCategoryList } from "@/queries/category-queries";
import CourseDetails from "./_componets/CourseDetails";
import CourseDetailsOverview from "./_componets/CourseDetailsOverview";
import RelatedCoure from "./_componets/RelatedCourse";
import Testimonials from "./_componets/Testimonials";
import { getCourseById } from "@/queries/course-queries";
const courses = [
    {
        id: 1,
        title: "Design",
        thumbnail: "/assets/images/categories/design.jpg",
    },

    {
        id: 3,
        title: "Development",
        thumbnail: "/assets/images/categories/development.jpg",
    },
    {
        id: 4,
        title: "Marketing",
        thumbnail: "/assets/images/categories/marketing.jpg",
    },
    {
        id: 5,
        title: "IT & Software",
        thumbnail: "/assets/images/categories/it_software.jpg",
    },
    {
        id: 6,
        title: "Personal Development",
        thumbnail: "/assets/images/categories/personal_development.jpg",
    },
    {
        id: 7,
        title: "Business",
        thumbnail: "/assets/images/categories/business.jpg",
    },
    {
        id: 8,
        title: "Photography",
        thumbnail: "/assets/images/categories/photography.jpg",
    },
    {
        id: 9,
        title: "Music",
        thumbnail: "/assets/images/categories/music.jpg",
    },
];

const SingleCoursePage = async ({ params: { courseId } }) => {
    const courses = await getCategoryList();
    const course = await getCourseById(courseId);

    console.log(course);
    return (
        <>
            <CourseDetailsOverview courseId={courseId} />
            <CourseDetails />
            <Testimonials testimonials={course.testimonials} />
            <RelatedCoure course={course} />
        </>
    );
};
export default SingleCoursePage;
