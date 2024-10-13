"use client";
import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { useCarouselImagesStore } from "@/store";
import Autoplay from "embla-carousel-autoplay";
import { Skeleton } from "@/components/ui";

interface Props {
  className?: string;
}

export const DiscountCarousel: React.FC<Props> = () => {
  const { carouselImages, fetchCarouselImages, loading } =
    useCarouselImagesStore();
  useEffect(() => {
    fetchCarouselImages();
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton className={"w-screen h-[500px]"} />
      ) : (
        <Carousel
          className="left-1/2 -translate-x-1/2 mt-2"
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className={"z-10"}>
            {carouselImages.map((image) => (
              <CarouselItem key={image.id}>
                <img
                  src={image.imageUrl}
                  alt={image.imageUrl}
                  className={"w-full h-[500px] object-cover"}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={
              "absolute z-20 left-2 bg-transparent border-transparent hover:bg-[#262e44] rounded shadow-none"
            }
          />
          <CarouselNext
            className={
              "absolute z-20 right-2 bg-transparent border-transparent hover:bg-[#262e44] rounded shadow-none"
            }
          />
        </Carousel>
      )}
    </>
  );
};
