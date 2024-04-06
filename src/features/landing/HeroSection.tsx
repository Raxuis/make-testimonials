"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-highlight";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Products",
    thumbnail:
      "/demonstration-pages/products-page.jpeg",
  },
  {
    title: "Create New Product",
    thumbnail:
      "/demonstration-pages/product-new-page.jpeg",
  },
  {
    title: "Product Infos",
    thumbnail:
      "/demonstration-pages/product-infos-page.jpeg",
  },

  {
    title: "Wall of Reviews",
    thumbnail:
      "/demonstration-pages/product-wall-reviews.jpeg",
  },
  {
    title: "Reviews",
    thumbnail:
      "/demonstration-pages/review-page.jpeg",
  },
  {
    title: "Fabulous Dark Mode",
    thumbnail:
      "/demonstration-pages/darkmode.jpeg",
  },
  {
    title: "Questions Edition",
    thumbnail:
      "/demonstration-pages/question-page.jpeg",
  },
  {
    title: "User Friendly Pages",
    thumbnail:
      "/demonstration-pages/darkmode-review-wall-page.jpeg",
  },
  {
    title: "Fabulous Dark Mode",
    thumbnail:
      "/demonstration-pages/darkmode-products-page.jpeg",
  }
];
