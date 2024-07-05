import { replaceMongoIdInArray } from "@/lib/formatData";
import { Testimonial } from "@/models/testimonial-model";

export async function getTestimonialList(courseId) {
    const testimonials = await Testimonial.find({ courseId: courseId }).lean();
    return replaceMongoIdInArray(testimonials);
}