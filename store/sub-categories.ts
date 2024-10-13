import { create } from "zustand";
import { Api } from "@/services/api-client";
import { SubCategory } from "@prisma/client";

export interface SubCategoriesState {
  loading: boolean;
  error: boolean;
  subCategories: SubCategory[];
  fetchSubCategories: (categoryId: number) => Promise<void>;
}

export const useSubCategoriesStore = create<SubCategoriesState>((set) => ({
  loading: true,
  error: false,
  subCategories: [],
  fetchSubCategories: async (categoryId: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.subCategories.getSubCategories(categoryId);
      set({ subCategories: data });
    } catch (e) {
      console.error(e);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
