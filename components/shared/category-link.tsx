"use client";
import React, { useRef, useState } from "react";
import { Title } from "@/components/shared/title";
import Link from "next/link";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Skeleton,
} from "@/components/ui";
import { useSubCategoriesStore } from "@/store";
import { cn } from "@/lib/utils";
import { useClickAway } from "react-use";

interface Props {
  className?: string;
  id: number;
  icon: string;
  title: string;
  href: string;
}

export const CategoryLink: React.FC<Props> = ({ id, icon, title }) => {
  const [open, setOpen] = useState(false);

  const { fetchSubCategories, subCategories, loading } =
    useSubCategoriesStore();
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  return (
    <>
      {open && (
        <div
          className={"fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-40"}
        ></div>
      )}
      <div className={"mt-1"} ref={ref}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger onClick={() => fetchSubCategories(id)}>
            <div
              className={
                "flex flex-col justify-center px-4 py-2 items-center hover:bg-slate-200"
              }
            >
              <Image src={icon} alt={title} width={40} height={40} />
              <Title
                text={title}
                className={"text-primary text-base text-center"}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent
            className={"flex flex-col max-h-[360px] flex-wrap w-fit py-8 ml-10"}
          >
            {loading
              ? Array.from({ length: 20 }).map((_, idx) => (
                  <Skeleton key={idx} className={"w-72 h-10 my-2 mx-2"} />
                ))
              : subCategories.map((subCategory) => (
                  <Link
                    onClick={() => setOpen(false)}
                    href={"/categories/" + subCategory.title}
                    key={subCategory.id}
                    className={cn("text-primary hover:underline text-lg mx-8", {
                      "font-extrabold text-2xl mt-2 wrap": subCategory.heading,
                    })}
                  >
                    {subCategory.title}
                  </Link>
                ))}
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
