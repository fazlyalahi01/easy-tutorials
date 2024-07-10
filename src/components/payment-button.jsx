"use client"
import { createCheckoutSession } from "@/actions/stripe";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";

const PaymentButton = ({ isLink, course }) => {
    const { price, title, id, description } = course;
    const router = useRouter();
    const { auth } = useAuth();
    const handleStripePayment = async (formData) => {
        const { url } = await createCheckoutSession(formData);
        // window.location.assign(url);
        router.push(url);
    }



    return (
        <form action={handleStripePayment}>        
            <input type="hidden" name="email" value={auth?.user?.email} />
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