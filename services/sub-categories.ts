import { SubCategory } from "@prisma/client";
import { ApiRoutes, axiosInstance } from "@/services";

export const getSubCategories = async (
  categoryId: number,
): Promise<SubCategory[]> => {
  return (
    await axiosInstance.get<SubCategory[]>(ApiRoutes.SUB_CATEGORIES, {
      params: { categoryId },
    })
  ).data;
};
