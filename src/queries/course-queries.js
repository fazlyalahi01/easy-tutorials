import { replaceMongoIdInObject } from "@/lib/commonUtils";
import { Category } from "@/models/category-model";
import { Course } from "@/models/course-model";
import { Module } from "@/models/module-model";
import { Testimonial } from "@/models/testimonial-model";
import { User } from "@/models/user-model";
import mongoose, { Schema } from "mongoose";

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
    console.log(courseId)
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
    }).lean();
    return replaceMongoIdInObject(course);
}





