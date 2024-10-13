import { News } from "@prisma/client";
import { ApiRoutes, axiosInstance } from "@/services";

export const getNews = async (limit: number): Promise<News[]> => {
  return (
    await axiosInstance.get<News[]>(ApiRoutes.NEWS, { params: { limit } })
  ).data;
};
