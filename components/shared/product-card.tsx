import React from "react";
import { cn } from "@/lib/utils";
import { Item } from "@prisma/client";
import { Title } from "@/components/shared";

interface Props {
  item: Item;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ item, className }) => {
  const price = item.price.toFixed(2).split(".");
  return (
    <div
      className={cn(
        "border border-slate-200 max-h-[500px] p-4 flex flex-col items-center justify-between cursor-pointer group",
        className,
      )}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className={"w-72 h-72 group-hover:scale-105 transition-all"}
      />
      <div className="ml-2 mt-2">
        <Title
          text={item.title}
          size={"xs"}
          className={"text-primary font-bold"}
        />
        <p className={"flex items-center my-3"}>
          <span className={"w-3 h-3 rounded-full bg-green-400 mr-2"}></span> in
          stock
        </p>
        <div className={"flex items-end"}>
          <p className={"text-[#262e44] text-3xl font-bold p-0 m-0"}>
            {price[0]}
          </p>
          <span className={"text-base text-[#262e44] font-bold"}>
            .{price[1]} €
          </span>
        </div>
      </div>
    </div>
  );
};
