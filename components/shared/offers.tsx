import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Offers: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("w-full flex justify-between items-center mt-7", className)}
    >
      <img
        src={
          "https://www.euronics.ee/UserFiles/Pictures/9377_EN_EURONICS_DeLonghi_espressomasin_FRONTPAGESMALL_384x384px_EE.jpg"
        }
        alt={"offer 1"}
        width={384}
        height={384}
        className={"cursor-pointer"}
      />
      <img
        src={
          "https://www.euronics.ee/UserFiles/Pictures/9388_EN_EURONICS_Hisense_teler_FRONTPAGESMALL_384x384px_EE.jpg"
        }
        alt={"offer 2"}
        width={384}
        height={384}
        className={"cursor-pointer"}
      />
      <img
        src={
          "https://www.euronics.ee/UserFiles/Pictures/9397_EN_EURONICS_Philips_tolmuimeja_5000_FRONTPAGESMALL_384x384px_EE.jpg"
        }
        alt={"offer 3"}
        width={384}
        height={384}
        className={"cursor-pointer"}
      />
    </div>
  );
};
