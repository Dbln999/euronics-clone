import { create } from "zustand";
import { Api } from "@/services/api-client";
import { Category } from "@prisma/client";

export interface CategoriesState {
  loading: boolean;
  error: boolean;
  activeCategory: Category;
  type: "Products" | "Services";
  categories: Category[];
  fetchCategories: () => Promise<void>;
  setCategoryType: (type: "Products" | "Services") => void;
  setActiveCategory: (category: Category) => void;
  getCategoryBySubCategory: (subCategory: string) => Promise<void>;
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
  loading: true,
  error: false,
  type: "Products",
  activeCategory: {} as Category,
  categories: [],
  fetchCategories: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.categories.getCategories();
      set({ categories: data });
    } catch (e) {
      console.error(e);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  getCategoryBySubCategory: async (subCategory: string) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.categories.getCategoryBySubCategory(subCategory);
      set({ activeCategory: data });
      console.log(subCategory);
    } catch (e) {
      console.error(e);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  setCategoryType: (type) => set({ type }),
  setActiveCategory: (category) => set({ activeCategory: category }),
}));
