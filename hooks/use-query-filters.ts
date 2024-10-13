import { useEffect } from "react";
import qs from "qs";
import { Filters } from "@/hooks/use-filters";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  useEffect(() => {
    const params = {
      ...filters.refreshRates,
      ...filters.screenSizes,
      ...filters.price,
      manufacturer: Array.from(filters.manufacturer),
      energyRating: Array.from(filters.energyRating),
      pictureEnhancement: Array.from(filters.pictureEnhancement),
      functions: Array.from(filters.functions),
      sort: filters.sort,
    };
    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });
    router.push(`?${query}`, {
      scroll: false,
    });
  }, [
    filters.manufacturer,
    filters.energyRating,
    filters.pictureEnhancement,
    filters.functions,
    filters.sort,
    filters.refreshRates,
    filters.screenSizes,
    filters.price,
    router,
  ]);
};
