import { create } from "zustand";
import { Api } from "@/services/api-client";
import { DiscountImagesForCarousel } from "@prisma/client";

export interface CarouselImagesState {
  loading: boolean;
  error: boolean;
  carouselImages: DiscountImagesForCarousel[];
  fetchCarouselImages: () => Promise<void>;
}

export const useCarouselImagesStore = create<CarouselImagesState>((set) => ({
  loading: true,
  error: false,
  carouselImages: [],
  fetchCarouselImages: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.carouselImages.getCarouselImages();
      set({ carouselImages: data });
    } catch (e) {
      console.error(e);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
