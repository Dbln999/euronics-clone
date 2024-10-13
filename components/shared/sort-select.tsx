import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { FiltersReturnProps } from "@/hooks/use-filters";

interface Props {
  className?: string;
  filters: FiltersReturnProps;
}

export const SortSelect: React.FC<Props> = ({ filters }: Props) => {
  return (
    <div className={"flex justify-between w-56 items-center"}>
      <p className={"text-lg"}>Sort</p>
      <Select value={filters.sort} onValueChange={filters.setSort}>
        <SelectTrigger className="w-[180px] text-base">
          <SelectValue placeholder="Top products" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="top" className={"text-base"}>
            Top products
          </SelectItem>
          <SelectItem value="asc" className={"text-base"}>
            Price ascending
          </SelectItem>
          <SelectItem value="desc" className={"text-base"}>
            Price descending
          </SelectItem>
          <SelectItem value="date" className={"text-base"}>
            By date
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
