"use server"
import { stripe } from "@/lib/stripe";
import { formatAmountForStripe } from "@/lib/stripe-helpers";
import { headers } from "next/headers";
const CURRENCY = "usd";

export const createCheckoutSession = async (data) => {
    const ui_mode = "hosted";
    const origin = headers().get("origin");

    const checkoutSession = await stripe.checkout.sessions.create({
        mode: "payment",
        submit_type: "auto",
        line_items: [
            {
                quantity: 1,
                price_data: {
                    unit_amount: formatAmountForStripe(1000, CURRENCY),
                    currency: CURRENCY,
                    product_data: {
                        name: "Easy Tutorials",
                    }
                }
            }
        ],
        ...(ui_mode === "hosted" && {
            success_url: `${origin}/enroll-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/courses`,
        }),
        ui_mode,
    })
    return {
        client_secret: checkoutSession.client_secret,
        url: checkoutSession.url
    }
}

export const createPaymentIntent = async (data) => {
    // const { amount } = data
    const paymentIntent = await stripe.paymentIntents.create({
        amount: formatAmountForStripe(1000, CURRENCY),
        currency: CURRENCY,
        automatic_payment_methods: {
            enabled: true
        }
    })
    return paymentIntent
}