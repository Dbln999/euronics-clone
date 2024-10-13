"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Title } from "@/components/shared/title";
import { ChevronRight } from "lucide-react";
import { useNewsStore } from "@/store";
import { Skeleton } from "@/components/ui";

interface Props {
  className?: string;
}

const MAIN_PAGE_NEWS_LIMIT = 3;

export const News: React.FC<Props> = ({ className }) => {
  const { fetchNews, news, loading } = useNewsStore();

  useEffect(() => {
    fetchNews(MAIN_PAGE_NEWS_LIMIT);
  }, []);

  return (
    <div className={cn("mt-10", className)}>
      <div className={"flex items-center justify-between"}>
        <Title text={"News"} className={"text-primary"} size={"lg"} />
        <p className={"flex text-primary text-base font-bold"}>
          View all news <ChevronRight />
        </p>
      </div>
      <div className={"mt-4 flex items-start justify-between"}>
        {loading
          ? Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className={"w-96 flex flex-col items-center"}>
                <Skeleton className={"w-96 h-[213px]"} />
                <Skeleton className={"w-11/12 h-72 mt-4"} />
              </div>
            ))
          : news.map((oneNews) => (
              <div className={"flex flex-col w-96"} key={oneNews.id}>
                <img
                  src={oneNews.imageUrl}
                  alt={oneNews.title}
                  width={384}
                  height={213}
                />
                <div
                  className={
                    "w-11/12 self-center flex flex-col items-center justify-center"
                  }
                >
                  <Title
                    text={oneNews.title}
                    className={
                      "text-[#262e44] font-bold text-[22px] mt-4 mb-2 "
                    }
                  />
                  <p className={"text-base text-[#262e44]"}>
                    {oneNews.content}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
