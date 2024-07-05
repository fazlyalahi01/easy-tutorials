import mongoose, { Schema } from "mongoose";

const enrollmentSchema = new Schema({
    enrollment_date: {
        required: true,
        type: Date
    },

    status: {
        required: true,
        type: String
    },

    completion_date: {
        required: false,
        type: Date
    },

    method: {
        required: true,
        type: String
    },

    course: {
        required: true,
        type: Schema.Types.ObjectId
    },

    student: {
        required: true,
        type: Schema.Types.ObjectId,
    },
});

export const Enrollment = mongoose.models.Enrollment ?? mongoose.model("Enrollment", enrollmentSchema);