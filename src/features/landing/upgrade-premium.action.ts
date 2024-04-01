"use server";
import { env } from "@/env";
import { getServerUrl } from "@/get-server-url";
import { ActionError, userAction } from "@/safe-actions";
import { stripe } from "@/stripe";
import { redirect } from "next/navigation";
import { z } from "zod";

export const upgradeToPremium = userAction(
  z.string(),
  async (_, context) => {
    const stripeCustomerId = context.user.stripeCustomerId;
    if (!stripeCustomerId) {
      throw new ActionError("User does not have a stripe customer id");
    }

    const stripeCheckout = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      payment_method_types: ["card", "link"],
      mode: "subscription",
      line_items: [
        {
          price: env.NODE_ENV === "development"
            ? "price_1P0h0G01P4NEqDx0vY2MhhjV"
            : "",
          quantity: 1,
        }],
      success_url: `${getServerUrl()}/success`,
      cancel_url: `${getServerUrl()}/cancel`,
    })
    if (!stripeCheckout.url) {
      throw new ActionError("Stripe checkout url not found");
    }
    redirect(stripeCheckout.url);
  })