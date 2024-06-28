import { SectionTitle } from "@/components/section-title";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ArrowRight, BookCheck, BookOpen, CheckCheck, Clock10, FileQuestion, MessageSquare, NotepadText, Presentation, Radio, Star, StickyNote, Tv, UsersRound, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CourseDetailsOverview from "./_componets/CourseDetailsOverview";
import RelatedCoure from "./_componets/RelatedCourse";
import Testimonials from "./_componets/Testimonials";
import CourseDetails from "./_componets/CourseDetails";
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
const SingleCoursePage = () => {
    return (
        <>
            <CourseDetailsOverview />
            <CourseDetails />
            <Testimonials courses={courses} />
            <RelatedCoure courses={courses} />
        </>
    );
};
export default SingleCoursePage;
