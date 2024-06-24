import mongoose, { Schema } from "mongoose"

const courseSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    thumbnail: {
        required: true,
        type: String
    },
    modules: {
        required: true,
        type: Array,
        ref: "Module"
    },
    price: {
        required: true,
        type: Number,
    },
    active: {
        required: true,
        type: Boolean,
    },
    category: {
        required: true,
        type: Schema.ObjectId,
        ref: "Category"
    },
    instructor: {
        required: true,
        type: Schema.ObjectId,
        ref: "User"
    },
    testimonials: {
        required: true,
        type: Array,
        ref: "Testimonial"
    },
    quizSet: {
        required: true,
        type: Schema.ObjectId,
    }

})

export const Course = mongoose.models.Course ?? mongoose.model("Course", courseSchema);