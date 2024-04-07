import { requiredCurrentUser } from "@/auth/current-user";
import { Layout, LayoutTitle } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/prisma";
import type { PageParams } from "@/types/next";
import { ReviewItem } from "../../(user)/wall/[slug]/ReviewCard";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertTitle } from "@/components/ui/alert";

export default async function RoutePage(props: PageParams<{}>) {
  const user = await requiredCurrentUser();

  const productsCount = await prisma.product.count({
    where: {
      userId: user.id
    },
  });

  const reviewsCount = await prisma.review.count({
    where: {
      product: {
        userId: user.id
      }
    },
  });

  const lastReview = await prisma.review.findFirst({
    where: {
      product: {
        userId: user.id
      }
    },
    orderBy: {
      createdAt: "desc"
    },
    take: 1,
  })

  return (
    <Layout>
      <LayoutTitle>
        Dashboard
      </LayoutTitle>
      <h2 className="text-xl font-bold">Welcome back, {user.name}</h2>
      <div className="flex flex-wrap items-start gap-4">
        <Card className="min-w-52">
          <CardHeader>
            <CardDescription>Products</CardDescription>
            <CardTitle>{productsCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="min-w-52">
          <CardHeader>
            <CardDescription>Reviews</CardDescription>
            <CardTitle>{reviewsCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="min-w-52">
          <CardHeader>
            <CardTitle>Last review</CardTitle>
          </CardHeader>
          <CardContent>
            {lastReview ? (<ReviewItem review={lastReview} />) : <p>No review yet.</p>}
          </CardContent>
        </Card>
        <Card className="min-w-52">
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Link className={buttonVariants({ size: "lg" })} href="/products/new">Create a product</Link>
          </CardContent>
        </Card>
        <Card className="min-w-52">
          <CardHeader>
            <CardTitle>Plan</CardTitle>
            <CardDescription>{user.plan}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p>Max {user.plan === "FREE" ? 100 : "infinite"} reviews.</p>
            <Progress value={
              (productsCount * 100) / 100
            } max={1} />
            <p>Max {user.plan === "FREE" ? 1 : "infinite"} products.</p>
            <Progress value={
              (productsCount * 100) / 1
            } max={1} />
            {user.plan === "FREE" && productsCount === 1 || reviewsCount === 100 ? (
              <Alert>
                <AlertTitle>You reached the limit of your free plan, please upgrade.</AlertTitle>
                <Link href="/upgrade">Upgrade</Link>
              </Alert>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}