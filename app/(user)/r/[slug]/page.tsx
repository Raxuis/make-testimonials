import { cn } from "@/lib/utils";
import { prisma } from "@/prisma";
import type { PageParams } from "@/types/next";
import { notFound } from "next/navigation";

export default async function RoutePage(props: PageParams<{ slug: string }>) {
  const product = await prisma.product.findFirst({
    where: {
      slug: props.params.slug
    }
  });
  if (!product) {
    return notFound();
  }
  return <div className={cn("h-full w-full", product.backgroundColor)}>{product.name}</div>
}