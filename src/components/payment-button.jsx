"use client"
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/formatPrice";
import { createCheckoutSession } from "@/actions/stripe";

const PaymentButton = ({ isLink }) => {
    const handleStripePayment = async(data) => {
        const {url} = await createCheckoutSession(data); 
        window.location.assign(url);
    }
    return (
        <form action={handleStripePayment}>
            {isLink ? (
                <Button
                    variant="ghost"
                    className="text-xs text-sky-700 h-7 gap-1"
                    type="submit"
                >
                    {formatPrice(49)} । Enroll
                    <ArrowRight className="w-3" />
                </Button>
            ) : (
                <Button
                 type="submit"
                 className={cn(buttonVariants({ size: "lg" }))}>
                    {formatPrice(49)} । Enroll Now
                </Button>
            )}
        </form>
    );
}
export default PaymentButton;