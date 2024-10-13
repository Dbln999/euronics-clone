"use client";
import React from "react";
import { Button } from "@/components/ui";
import { useCategoriesStore } from "@/store";

interface Props {
  text: "Services" | "Products";
}

export const CategorySelectionButton: React.FC<Props> = ({ text }) => {
  const { setCategoryType, type } = useCategoriesStore();

  return (
    <Button
      variant={"default"}
      onClick={() => setCategoryType(text)}
      className={
        type === text
          ? "px-4 h-10 transition-all bg-secondary text-base text-primary rounded-none shadow-none hover:bg-secondary"
          : "px-4 h-10 bg-transparent text-base text-secondary border-none rounded-none shadow-none hover:bg-secondary/30"
      }
    >
      {text}
    </Button>
  );
};
