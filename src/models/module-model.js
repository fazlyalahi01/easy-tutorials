import mongoose, { Schema } from "mongoose";

const moduleSchema = new Schema({
    title: {
        required: true,
        type: String,
        trim: true,
    },
    description: {
        required: true,
        type: String,
        trim: true
    },
    status: {
        required: true,
        type: String,
        enum: ['active', 'inactive'],
    },
    slug: {
        required: true,
        type: String,
        trim: true,
        unique: true
    },
    course: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Course"
    },
    lessonIds: {
        required: true,
        type: [Schema.Types.ObjectId], 
        ref: 'Lesson',
    }

})

export const Module = mongoose.models.Module ?? mongoose.model("Module", moduleSchema);