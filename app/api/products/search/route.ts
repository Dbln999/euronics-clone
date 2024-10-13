import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query") || "";

  const products = await prisma.item.findMany({
    where: {
      title: {
        contains: query,
        mode: "insensitive",
      },
    },
    take: 5,
  });

  return NextResponse.json(products);
}
