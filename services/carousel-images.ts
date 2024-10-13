import { DiscountImagesForCarousel } from "@prisma/client";
import { ApiRoutes, axiosInstance } from "@/services";

export const getCarouselImages = async (): Promise<
  DiscountImagesForCarousel[]
> => {
  return (
    await axiosInstance.get<DiscountImagesForCarousel[]>(
      ApiRoutes.CAROUSEL_IMAGES,
    )
  ).data;
};
