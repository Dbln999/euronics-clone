import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Title } from "@/components/shared/title";

interface Props {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export const InfoBlock: React.FC<Props> = ({
  className,
  description,
  title,
  icon,
}) => {
  return (
    <div className={cn("flex min-w-60", className)}>
      <Image src={icon} alt={title} width={68} height={68} />
      <div className={"flex flex-col ml-4 items-start justify-center"}>
        <Title text={title} className={"text-primary font-bold text-base"} />
        <p className={"text-muted"}>{description}</p>
      </div>
    </div>
  );
};
