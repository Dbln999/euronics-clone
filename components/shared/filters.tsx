"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { CheckboxFilterGroup, Title } from "@/components/shared/";
import { RangeSlider } from "./range-slider";
import { FiltersReturnProps } from "@/hooks/use-filters";

interface Props {
  className?: string;
  filters: FiltersReturnProps;
}

export const Filters: React.FC<Props> = ({ className, filters }) => {
  const updateScreenSizes = (screenSizes: number[]) => {
    filters.setScreenSizes("sizeFrom", screenSizes[0]);
    filters.setScreenSizes("sizeTo", screenSizes[1]);
  };

  const updateRefreshRates = (refreshRates: number[]) => {
    filters.setRefreshRates("refreshRateFrom", refreshRates[0]);
    filters.setRefreshRates("refreshRateTo", refreshRates[1]);
  };

  const updatePrices = (prices: number[]) => {
    filters.setPrice("priceFrom", prices[0]);
    filters.setPrice("priceTo", prices[1]);
  };

  return (
    <div className={cn("", className)}>
      <Title text={"Filters"} size={"sm"} className={"mb-5 font-bold"}></Title>

      <CheckboxFilterGroup
        name={"Manufacturer"}
        className={"mb-5"}
        title={"Manufacturer"}
        onClickCheckbox={filters.setManufacturer}
        selected={filters.manufacturer}
        items={[
          { text: "Philips", value: "Philips" },
          { text: "LG", value: "LG" },
          { text: "Sony", value: "Sony" },
          { text: "Samsung", value: "Samsung" },
        ]}
      />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className={"font-bold mb-3"}>Screen size:</p>
        <RangeSlider
          min={42}
          max={77}
          step={1}
          value={[
            filters.screenSizes.sizeFrom || 42,
            filters.screenSizes.sizeTo || 77,
          ]}
          onValueChange={updateScreenSizes}
        ></RangeSlider>
      </div>
      <CheckboxFilterGroup
        name={"Energy rating"}
        className={"mb-5"}
        title={"Energy rating"}
        onClickCheckbox={filters.setEnergyRating}
        selected={filters.energyRating}
        items={[
          { text: "F", value: "F" },
          { text: "G", value: "G" },
          { text: "E", value: "E" },
        ]}
      />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className={"font-bold mb-3"}>Price:</p>
        <RangeSlider
          min={0}
          max={3000}
          step={1}
          value={[filters.price.priceFrom || 0, filters.price.priceTo || 3000]}
          onValueChange={updatePrices}
        ></RangeSlider>
      </div>
      <CheckboxFilterGroup
        name={"Picture enhancement"}
        className={"mb-5"}
        title={"Picture enhancement"}
        onClickCheckbox={filters.setPictureEnhancement}
        selected={filters.pictureEnhancement}
        items={[{ text: "HDR", value: "HDR" }]}
      />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className={"font-bold mb-3"}>Refresh rate: </p>
        <RangeSlider
          min={100}
          max={144}
          step={1}
          value={[
            filters.refreshRates.refreshRateFrom || 100,
            filters.refreshRates.refreshRateTo || 144,
          ]}
          onValueChange={updateRefreshRates}
        ></RangeSlider>
      </div>
      <CheckboxFilterGroup
        name={"Functions"}
        className={"mb-5"}
        title={"Functions"}
        onClickCheckbox={filters.setFunctions}
        selected={filters.functions}
        items={[
          { text: "Smart TV", value: "Smart TV" },
          { text: "Netflix", value: "Netflix" },
          { text: "Disney+", value: "Disney+" },
          { text: "screen mirroring", value: "screen mirroring" },
          { text: "Apple TV", value: "Apple TV" },
          { text: "Apple Airplay 2", value: "Apple Airplay 2" },
          {
            text: "Recording to USB memory stick or external HDD",
            value: "Recording to USB memory stick or external HDD",
          },
        ]}
      />
    </div>
  );
};
