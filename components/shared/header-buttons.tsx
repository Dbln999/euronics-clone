import React from "react";
import { cn } from "@/lib/utils";
import { ShoppingCart, User } from "lucide-react";
import { Title } from "@/components/shared/title";
import Link from "next/link";

interface Props {
  className?: string;
  title: string;
  href: "user" | "cart";
}

export const HeaderButtons: React.FC<Props> = ({ className, href, title }) => {
  return (
    <Link
      href={`/${href}`}
      className={cn(
        "h-14 p-2 hover:bg-white/30 flex items-center justify-center rounded-xl mx-4",
        className,
      )}
    >
      <div
        className={
          "w-10 h-10 border-secondary/85 border rounded-[50%] flex items-center justify-center"
        }
      >
        {href === "user" ? (
          <User className={"text-secondary/85 w-5 h-5"} />
        ) : (
          <ShoppingCart className={"text-secondary/85 w-5 h-5"} />
        )}
      </div>

      <Title
        text={title}
        className={"text-secondary/85 text-lg font-bold ml-3"}
      />
    </Link>
  );
};
