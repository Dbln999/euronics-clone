import React from "react";
import { InfoBlock } from "@/components/shared/info-block";

interface Props {
  className?: string;
}

export const InfoBlocks: React.FC<Props> = () => {
  return (
    <div className={"flex w-full items-center justify-between mt-7"}>
      <InfoBlock
        icon={
          "https://www.euronics.ee/UserFiles/Pictures/5360_EN_5360_ET_value_credit_t.svg"
        }
        title={"Hire-purchase"}
        description={"Use monthly payment"}
      />
      <div className={"h-16 w-[2px] bg-gray-200"}></div>
      <InfoBlock
        icon={
          "https://www.euronics.ee/UserFiles/Pictures/5341_EN_5341_ET_value_delivery.svg"
        }
        title={"Delivery & Installation"}
        description={"Fast and convenient delivery"}
      />
      <div className={"h-16 w-[2px] bg-gray-200"}></div>

      <InfoBlock
        icon={
          "https://www.euronics.ee/UserFiles/Pictures/5361_EN_5361_ET_value_warranty.svg"
        }
        title={"Protection"}
        description={"Extend the categories warranty"}
        className={"border-r-0"}
      />
    </div>
  );
};
