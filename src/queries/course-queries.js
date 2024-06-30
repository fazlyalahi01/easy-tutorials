import { Category } from "@/models/category-model";
import { Course } from "@/models/course-model";
import { Module } from "@/models/module-model";
import { Testimonial } from "@/models/testimonial-model";
import { User } from "@/models/user-model";
import mongoose, { Schema } from "mongoose";
import { getEnrollmentList } from "./enrollment-queries";
import { replaceMongoIdInObject } from "@/lib/formatData";
import { getTestimonialList } from "./testimonial-queries";

export async function getCourseList() {
    const allCourse = await Course.find().populate({
        path: "category",
        model: Category
    }).populate({
        path: "instructor",
        model: User
    }).populate({
        path: "testimonials",
        model: Testimonial
    }).populate({
        path: "modules",
        model: Module
    });
    return allCourse
}


export async function getCourseById(courseId) {
    const course = await Course.findById(new mongoose.Types.ObjectId(courseId)).populate({
        path: "category",
        model: Category
    }).populate({
        path: "testimonials",
        model: Testimonial,
        populate: {
            path: "user",
            model: User
        }
    }).populate({
        path: "instructor",
        model: User
    }).populate({
        path: "modules",
        model: Module
    }).lean();
    return replaceMongoIdInObject(course);
}


export async function getCourseInfoForInstructor(instructorId) {

    const courses = await Course.find({ instructor: instructorId }).lean();
    const enrollments = await Promise.all(
        courses.map(async (course) => {
            const count = await getEnrollmentList(course._id.toString());
            return count.length;
        })
    )

    const totalEnrollments = enrollments.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    });

    const testimonials = await Promise.all(
        courses.map(async (course) => {
            const count = await getTestimonialList(course._id.toString());
            return count;
        })
    )

    const totalTestimonials = testimonials.flat();

    const avgRating = Math.round(totalTestimonials.reduce((acc, val) => acc + val.rating, 0) / totalTestimonials.length);


    return {
        courseCount: courses.length,
        totalStudents: totalEnrollments,
        totalReviews: totalTestimonials.length,
        avgReview: avgRating,
    }
}





