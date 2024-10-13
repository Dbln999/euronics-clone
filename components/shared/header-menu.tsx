import React from "react";
import { cn } from "@/lib/utils";
import { CategorySelectionButton, Container } from "@/components/shared";
import { Button } from "@/components/ui";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const HeaderMenu: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-full h-10 bg-primary/95", className)}>
      <Container>
        <div className={"flex items-center justify-between h-10"}>
          <div
            className={
              "bg-transparent flex items-center justify-between max-w-sm"
            }
          >
            <CategorySelectionButton text={"Products"} />
            <CategorySelectionButton text={"Services"} />
            <Button
              variant={"default"}
              className={cn(
                "px-4 h-10 transition-all bg-transparent text-base text-secondary border-none rounded-[2px] shadow-none hover:bg-secondary/30",
              )}
            >
              News
            </Button>
          </div>
          <span className={"text-base text-[#d6d8e1] flex items-center"}>
            Customer service is opened daily 9-21 &nbsp;
            <PhoneIcon size={20} />
            &nbsp; 640 6400
          </span>
          <div className={"flex items-center"}>
            <Link
              className={"text-[#d6d8e1] px-2 hover:underline"}
              href={"/promotions"}
            >
              Promotions
            </Link>
            <Link
              className={"text-[#d6d8e1] px-2 hover:underline"}
              href={"/stores"}
            >
              Stores
            </Link>
            <Link
              className={"text-[#d6d8e1] px-2 hover:underline"}
              href={"/shopping-info"}
            >
              Shopping info
            </Link>
            <Link
              className={"text-[#d6d8e1] px-2 hover:underline"}
              href={"/write-to-us"}
            >
              Write to us
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
