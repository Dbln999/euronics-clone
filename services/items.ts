import { axiosInstance, ApiRoutes } from "@/services/";
import { Item } from "@prisma/client";

export const search = async (query: string): Promise<Item[]> => {
  return (
    await axiosInstance.get<Item[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: { query },
    })
  ).data;
};
