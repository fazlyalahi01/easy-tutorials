import { replaceMongoIdInArray } from "@/lib/formatData";
import { Testimonial } from "@/models/testimonial-model";

export async function getTestimonialList(courseId) {
    console.log(courseId);
    const testimonials = await Testimonial.find({ courseId: courseId }).lean();
    console.log(testimonials);
    return replaceMongoIdInArray(testimonials);
}