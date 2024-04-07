"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";

export function CardBefore() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative size-auto  rounded-xl border border-black/[0.1] bg-red-500/50 p-6 dark:border-white/[0.2] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Before maketestimonials.vercel.app
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          Customers don&apos;t trust your product
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          Customers don&apos;t make reviews because it&apos;s too long
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          It&apos;s hard to get reviews from customers
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
