"use server"
import { stripe } from "@/lib/stripe";
import { formatAmountForStripe } from "@/lib/stripe-helpers";
import { headers } from "next/headers";
const CURRENCY = "usd";

export const createCheckoutSession = async (formData) => {    
    const courseId = formData.get("courseId");
    const price = formData.get("price");
    const title = formData.get("title");
    const description = formData.get("description");
    const email = formData.get("email");

    const ui_mode = "hosted";
    const origin = headers().get("origin");

    const checkoutSession = await stripe.checkout.sessions.create({
        mode: "payment",
        submit_type: "auto",
        customer_email: email,
        line_items: [
            {
                quantity: 1,
                price_data: {
                    unit_amount: formatAmountForStripe(price, CURRENCY),
                    currency: CURRENCY,
                    product_data: {
                        name: title,
                        description: description
                    }
                }
            }
        ],
        ...(ui_mode === "hosted" && {
            success_url: `${origin}/enroll-success?session_id={CHECKOUT_SESSION_ID}&courseId=${courseId}&email=${email}`,
            cancel_url: `${origin}/courses`,
        }),
        ui_mode,
    })
    return {
        client_secret: checkoutSession.client_secret,
        url: checkoutSession.url
    }
}

export const createPaymentIntent = async (formData) => {
    const price = formData.get("price")
    const paymentIntent = await stripe.paymentIntents.create({
        amount: formatAmountForStripe(price, CURRENCY),
        currency: CURRENCY,
        automatic_payment_methods: {
            enabled: true
        }
    })
    return paymentIntent
}