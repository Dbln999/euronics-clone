import { prisma } from "@/prisma/prisma-client";
import { sortOrderBy } from "@/lib/sort-order-by";
import { SortProps } from "@/hooks";

export interface GetSearchParams {
  query?: string;
  manufacturer?: string;
  subCategory?: string;
  energyRating?: string;
  pictureEnhancement?: string;
  functions?: string;
  refreshRateFrom?: string;
  refreshRateTo?: string;
  sizeFrom?: string;
  sizeTo?: string;
  sort?: string;
  priceFrom?: string;
  priceTo?: string;
  // limit?: string;
  // page?: string;
}

const DEFAULT_MIN_SCREEN_SIZE = 42;
const DEFAULT_MAX_SCREEN_SIZE = 77;
const DEFAULT_MIN_REFRESH_RATE = 100;
const DEFAULT_MAX_REFRESH_RATE = 144;
const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 3000;

export const findPizzas = async (params: GetSearchParams) => {
  const manufacturer = params.manufacturer?.split(",").map(String);
  const energyRating = params.energyRating?.split(",").map(String);
  const pictureEnhancement = params.pictureEnhancement?.split(",").map(String);
  const functions = params.functions?.split(",").map(String);
  const subCategory = params.subCategory;
  const sort = params.sort;

  const minScreenSize = Number(params.sizeFrom) || DEFAULT_MIN_SCREEN_SIZE;
  const maxScreenSize = Number(params.sizeTo) || DEFAULT_MAX_SCREEN_SIZE;
  const minRefreshRate =
    Number(params.refreshRateFrom) || DEFAULT_MIN_REFRESH_RATE;
  const maxRefreshRate =
    Number(params.refreshRateTo) || DEFAULT_MAX_REFRESH_RATE;
  const minPrice = Number(params.priceFrom) || DEFAULT_MIN_PRICE;
  const maxPrice = Number(params.priceTo) || DEFAULT_MAX_PRICE;

  const orderBy = sortOrderBy(sort as SortProps);

  const items = await prisma.item.findMany({
    orderBy: orderBy,
    where: {
      manufacturer: {
        in: manufacturer,
      },
      energyRating: {
        in: energyRating,
      },
      pictureEnhancements: {
        in: pictureEnhancement,
      },
      functions: {
        hasEvery: functions ? functions : [],
      },
      screenSize: {
        gte: minScreenSize,
        lte: maxScreenSize,
      },
      refreshRate: {
        gte: minRefreshRate,
        lte: maxRefreshRate,
      },
      price: {
        gte: minPrice,
        lte: maxPrice,
      },
      categories: {
        some: {
          subCategory: {
            title: {
              equals: subCategory,
              mode: "insensitive",
            },
          },
        },
      },
    },
  });

  return items;
};
