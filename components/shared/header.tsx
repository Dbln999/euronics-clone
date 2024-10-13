import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { Container, HeaderButtons, SearchInput } from "@/components/shared";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={cn("w-full bg-primary h-20 flex items-center", className)}
    >
      <Container className={"w-full"}>
        <div className={"flex items-center justify-evenly w-full"}>
          <Link href={"/"} className={"flex items-center justify-center"}>
            <Image
              src={"/logo.svg"}
              alt={"logo"}
              width={170}
              height={170}
              className={"cursor-pointer"}
            />
          </Link>

          <Select>
            <SelectTrigger className="w-[60px] text-white border-0 mt-2 focus:ring-0">
              <SelectValue placeholder="EN" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ru">RU</SelectItem>
              <SelectItem value="en">EN</SelectItem>
              <SelectItem value="ee">EE</SelectItem>
            </SelectContent>
          </Select>
          <SearchInput />
          <div className={"flex items-center justify-between w-96"}>
            <HeaderButtons title={"Log in"} href={"user"} />
            <HeaderButtons title={"Shopping Cart"} href={"cart"} />
          </div>
        </div>
      </Container>
    </header>
  );
};
