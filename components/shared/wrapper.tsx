"use client";
import React from "react";
import { SortSelect } from "@/components/shared/sort-select";
import { Products } from "@/components/shared/products";
import { Item } from "@prisma/client";
import { Filters } from "@/components/shared/filters";
import { useFilters, useQueryFilters } from "@/hooks";

interface Props {
  items: Item[];
  category: string;
}

export type OrderBy = "asc" | "desc" | "date" | "top";

export const Wrapper: React.FC<Props> = ({ items, category }) => {
  const filters = useFilters();

  useQueryFilters(filters);

  return (
    <>
      <Filters filters={filters} className={"w-96 p-10"} />
      <div className={"w-fit"}>
        <div
          className={
            "text-primary font-semibold border border-primary rounded-full w-fit px-3 py-1 my-6"
          }
        >
          {category}
        </div>
        <SortSelect filters={filters} />
        <Products items={items} />
      </div>
    </>
  );
};
