import { prisma } from "@/prisma";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{ slug: string }>) {
  const product = await prisma.product.findFirst({
    where: {
      slug: props.params.slug
    }
  })
}