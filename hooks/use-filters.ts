import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useSet } from "react-use";

interface QueryFilters extends ScreenSizeProps, RefreshRateProps, PriceProps {
  manufacturer: string;
  energyRating: string;
  pictureEnhancement: string;
  functions: string;
  sort: SortProps;
}

export type SortProps = "asc" | "desc" | "date" | "top";

interface ScreenSizeProps {
  sizeFrom?: number;
  sizeTo?: number;
}

interface RefreshRateProps {
  refreshRateFrom?: number;
  refreshRateTo?: number;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export interface Filters {
  manufacturer: Set<string>;
  energyRating: Set<string>;
  pictureEnhancement: Set<string>;
  functions: Set<string>;
  sort: SortProps;
  screenSizes: ScreenSizeProps;
  refreshRates: RefreshRateProps;
  price: PriceProps;
}

export interface FiltersReturnProps extends Filters {
  setScreenSizes: (name: keyof ScreenSizeProps, value: number) => void;
  setRefreshRates: (name: keyof RefreshRateProps, value: number) => void;
  setPrice: (name: keyof PriceProps, value: number) => void;
  setManufacturer: (key: string) => void;
  setEnergyRating: (key: string) => void;
  setPictureEnhancement: (key: string) => void;
  setFunctions: (key: string) => void;
  setSort: (key: SortProps) => void;
}

export const useFilters = (): FiltersReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const [manufacturer, { toggle: toggleManufacturer }] = useSet(
    new Set<string>(searchParams.get("manufacturer")?.split(",")),
  );

  const [screenSize, setScreenSize] = useState({
    sizeFrom: Number(searchParams.get("sizeFrom")) || 42,
    sizeTo: Number(searchParams.get("sizeTo")) || 77,
  });

  const [refreshRate, setRefreshRate] = useState({
    refreshRateFrom: Number(searchParams.get("refreshRateFrom")) || 100,
    refreshRateTo: Number(searchParams.get("refreshRateTo")) || 144,
  });

  const [price, setPrice] = useState({
    priceFrom: Number(searchParams.get("priceFrom")) || 0,
    priceTo: Number(searchParams.get("priceTo")) || 3000,
  });

  const [energyRating, { toggle: toggleEnergyRating }] = useSet(
    new Set<string>(
      searchParams.get("energyRating")
        ? searchParams.get("energyRating")?.split(",")
        : [],
    ),
  );

  const [pictureEnhancement, { toggle: togglePictureEnhancement }] = useSet(
    new Set<string>(
      searchParams.get("pictureEnhancement")
        ? searchParams.get("pictureEnhancement")?.split(",")
        : [],
    ),
  );

  const [functions, { toggle: toggleFunctions }] = useSet(
    new Set<string>(
      searchParams.get("functions")
        ? searchParams.get("functions")?.split(",")
        : [],
    ),
  );

  const [sort, setSort] = useState<SortProps>(
    (searchParams.get("sort") as SortProps) || "top",
  );

  const updateScreenSize = (name: keyof ScreenSizeProps, value: number) => {
    setScreenSize((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateRefreshRate = (name: keyof RefreshRateProps, value: number) => {
    setRefreshRate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return useMemo(
    () => ({
      manufacturer,
      energyRating,
      pictureEnhancement,
      functions,
      sort,
      price,
      screenSizes: screenSize,
      refreshRates: refreshRate,
      setScreenSizes: updateScreenSize,
      setRefreshRates: updateRefreshRate,
      setPrice: updatePrice,
      setManufacturer: toggleManufacturer,
      setFunctions: toggleFunctions,
      setEnergyRating: toggleEnergyRating,
      setPictureEnhancement: togglePictureEnhancement,
      setSort: setSort,
    }),
    [
      manufacturer,
      energyRating,
      pictureEnhancement,
      functions,
      sort,
      price,
      screenSize,
      refreshRate,
      toggleManufacturer,
      toggleFunctions,
      toggleEnergyRating,
      togglePictureEnhancement,
    ],
  );
};
