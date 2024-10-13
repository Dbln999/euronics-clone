"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input } from "@/components/ui";
import { Item } from "@prisma/client";
import { useClickAway, useDebounce } from "react-use";
import { Api } from "@/services";
import Link from "next/link";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [parent] = useAutoAnimate();

  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const data = await Api.items.search(searchQuery);
        setItems(data);
      } catch (e) {
        console.error(e);
      }
    },
    250,
    [searchQuery],
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setItems([]);
  };
  return (
    <>
      {focused && (
        <div
          className={"fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"}
        ></div>
      )}
      <div className={"relative z-40"} ref={ref}>
        <Search
          className={
            "absolute right-3 top-1/2 -translate-y-1/2 h-5 text-primary/60"
          }
        />
        <Input
          className={
            "w-[430px] h-10 text-base bg-white rounded-3xl focus:border-amber-300 focus:border-2"
          }
          placeholder={"Search in Euronics..."}
          type={"text"}
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></Input>
        {items.length > 0 && (
          <div
            ref={parent}
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 opacity-0 invisible z-30",
              focused && "visible opacity-100 top-12",
            )}
          >
            {items.map((product) => (
              <Link
                onClick={onClickItem}
                key={product.id}
                className={
                  "flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10 border-b border-slate-300"
                }
                href={`/product/${product.id}`}
              >
                <img
                  src={product.imageUrl}
                  className={"rounded-sm w-20 h-20"}
                  alt={product.title}
                />
                <span className={"text-primary"}>{product.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
