import { create } from "zustand";
import { Api } from "@/services/api-client";
import { News } from "@prisma/client";

export interface CategoriesState {
  loading: boolean;
  error: boolean;
  news: News[];
  fetchNews: (limit: number) => Promise<void>;
}

export const useNewsStore = create<CategoriesState>((set) => ({
  loading: true,
  error: false,
  news: [],
  fetchNews: async (limit) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.news.getNews(limit);
      set({ news: data });
    } catch (e) {
      console.error(e);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
