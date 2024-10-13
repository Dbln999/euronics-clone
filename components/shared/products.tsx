"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/shared";
import { Item } from "@prisma/client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Skeleton } from "@/components/ui";

interface Props {
  items: Item[];
  className?: string;
}

export const Products: React.FC<Props> = ({ className, items }) => {
  const [parent] = useAutoAnimate();

  if (items.length === 0)
    return (
      <div className={cn("grid grid-cols-4 mt-10 w-full", className)}>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Skeleton
            key={idx}
            className={
              "w-72 border mx-1 border-slate-200 h-[400px] rounded-none p-4 flex flex-col items-center justify-between"
            }
          />
        ))}
      </div>
    );

  return (
    <div ref={parent} className={cn("grid grid-cols-4 mt-10", className)}>
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};
