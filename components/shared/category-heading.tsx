"use client";
import React, { useEffect } from "react";
import { Title } from "@/components/shared";
import { ChevronRight } from "lucide-react";
import { useCategoriesStore } from "@/store";

interface Props {
  subCategory: string;
}

export const CategoryHeading: React.FC<Props> = ({ subCategory }) => {
  const { getCategoryBySubCategory, activeCategory } = useCategoriesStore();
  useEffect(() => {
    getCategoryBySubCategory(subCategory);
  }, [subCategory]);

  return (
    <div
      className={"bg-slate-100 py-4 flex flex-col justify-between mt-2 px-32"}
    >
      <p className={"flex text-gray-500 text-lg items-center"}>
        {activeCategory?.title}
        <ChevronRight size={15} className={"mx-2"} />
        {subCategory}
      </p>
      <Title
        text={subCategory}
        className={"text-primary font-light"}
        size={"xl"}
      />
    </div>
  );
};
