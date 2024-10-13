import { Category } from "@prisma/client";
import { ApiRoutes, axiosInstance } from "@/services";

export const getCategories = async (): Promise<Category[]> => {
  return (await axiosInstance.get<Category[]>(ApiRoutes.CATEGORIES)).data;
};

export const getCategoryBySubCategory = async (
  category: string,
): Promise<Category> => {
  return (
    await axiosInstance.get<Category>(ApiRoutes.CATEGORIES + `/${category}`)
  ).data;
};
