"use client"
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/formatPrice";
import { createCheckoutSession } from "@/actions/stripe";

const PaymentButton = ({ isLink, course }) => {
    const {price, title, id, description} = course; 
    const handleStripePayment = async (formData) => {
        const { url } = await createCheckoutSession(formData);
        window.location.assign(url);
    }

    console.log(course);
    return (
        <form action={handleStripePayment}>
            <input type="hidden" name="courseId" value={id} />
            <input type="hidden" name="price" value={price} />
            <input type="hidden" name="title" value={title} />
            <input type="hidden" name="description" value={description} />
            {isLink ? (
                <Button
                    variant="ghost"
                    className="text-xs text-sky-700 h-7 gap-1"
                    type="submit"
                >
                    {formatPrice(price)} । Enroll
                    <ArrowRight className="w-3" />
                </Button>
            ) : (
                <Button
                    type="submit"
                    className={cn(buttonVariants({ size: "lg" }))}>
                    {formatPrice(price)} । Enroll Now
                </Button>
            )}
        </form>
    );
}
export default PaymentButton;