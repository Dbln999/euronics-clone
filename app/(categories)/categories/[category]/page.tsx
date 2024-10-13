import React from "react";
import { CategoryHeading, Wrapper } from "@/components/shared";
import { findPizzas, GetSearchParams } from "@/lib/";

export default async function ProductPage({
  params: { category },
  searchParams,
}: {
  params: { category: string };
  searchParams: GetSearchParams;
}) {
  const subCategory = decodeURIComponent(category);
  const items = await findPizzas({ ...searchParams, subCategory: category });

  return (
    <>
      <CategoryHeading subCategory={subCategory} />
      <div className={"flex justify-between w-full"}>
        <Wrapper items={items} category={category} />
      </div>
    </>
  );
}
