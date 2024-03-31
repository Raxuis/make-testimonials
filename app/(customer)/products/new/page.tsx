import { Layout, LayoutTitle } from "@/components/layout";
import type { PageParams } from "@/types/next";
import { ProductForm } from "../[productId]/edit/ProductForm";
import { requiredCurrentUser } from "@/auth/current-user";
import { prisma } from "@/prisma";
import { AlertTriangle } from "lucide-react";
import PricingPage from "@/features/landing/PricingSection";

export default async function RoutePage(props: PageParams<{}>) {
  const user = await requiredCurrentUser();

  const isAuthorized = user.plan === "PREMIUM"
    ? true
    : await prisma.product.count({
      where: {
        userId: user.id,
      }
    }) < 1;
  if (!isAuthorized) {
    return (
      <Layout>
        <LayoutTitle>
          Create product
        </LayoutTitle>
        <p className="inline-flex gap-2">
          <AlertTriangle />
          You need to upgrade to premium plan to create more products.
        </p>
        <PricingPage />
      </Layout>
    );
  }
  return (
    <Layout>
      <LayoutTitle>
        Create product
      </LayoutTitle>
      <ProductForm />
    </Layout>
  )
}