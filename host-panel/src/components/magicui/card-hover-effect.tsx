// @NOTE: in case you are using Next.js
"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";


type CardHoverEffectProps = {
  containerClassName?: string;
  itemClassName?: string;
  hoveredItemClassName?: string;
  items: {
    title: string;
    description: string;
    href: string;
    imgUrl: string
  }[]
};

export function CardHoverEffect({
  containerClassName,
  itemClassName,
  hoveredItemClassName,
  items,
}: CardHoverEffectProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-wrap gap-4", containerClassName)}>
      {items.map((item, idx) => {
        const { title, description, href, imgUrl } = item;

        return (
          <Link
            key={idx}
            href={href}
            rel="noopener noreferrer"
            className={cn("relative flex flex-col gap-3 p-4", itemClassName)}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <AnimatePresence>
              {hoveredIdx === idx && (
                <motion.span
                  className={cn(
                    "absolute inset-0 z-0 block h-full w-full rounded-xl bg-neutral-200",
                    hoveredItemClassName
                  )}
                  layoutId="cardHoverEffect"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="z-[1] space-y-3">
              <div className="flex items-center gap-4">
                <img
                  src={imgUrl}
                  alt=""
                  className="size-14 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg/tight font-medium text-gray-900">{title}</h3>
                  <p className="mt-0.5 text-gray-700">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
