"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { CategoryLink, Container } from "@/components/shared/";
import { useCategoriesStore } from "@/store";
import { Skeleton } from "@/components/ui";

interface Props {
  className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
  const { fetchCategories, categories, loading, type } = useCategoriesStore();
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={cn("w-full", className)}>
      <Container>
        <div className={"flex justify-evenly gap-5 h-20"}>
          {loading
            ? Array.from({ length: 10 }).map((_, idx) => (
                <div
                  key={idx}
                  className={
                    "flex w-full flex-col items-center justify-center h-24 mx-5"
                  }
                >
                  <Skeleton className={"w-10 h-9"} />
                  <Skeleton className={"w-16 h-4 mt-2 mb-2"} />
                </div>
              ))
            : categories
                .filter((c) => c.type === type)
                .map((category) => (
                  <CategoryLink
                    key={category.id}
                    id={category.id}
                    icon={category.imageUrl}
                    title={category.title}
                    href={category.title.toLowerCase()}
                  />
                ))}
        </div>
      </Container>
    </div>
  );
};
