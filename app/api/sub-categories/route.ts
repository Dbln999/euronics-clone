import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const categoryId = request.nextUrl.searchParams.get("categoryId");

  if (!categoryId) {
    return NextResponse.json({});
  }
  const subCategories = await prisma.subCategory.findMany({
    where: { categoryId: Number(categoryId) },
  });
  return NextResponse.json(subCategories);
}
