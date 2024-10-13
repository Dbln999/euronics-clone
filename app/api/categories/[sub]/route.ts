import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(
  req: NextRequest,
  { params }: { params: { sub: string } },
) {
  try {
    const subCategory = params.sub;

    if (!subCategory) {
      return NextResponse.json({});
    }

    const category = await prisma.category.findFirst({
      where: {
        subCategory: {
          some: {
            title: {
              equals: subCategory,
              mode: "insensitive",
            },
          },
        },
      },
    });

    return NextResponse.json(category);
  } catch (e) {
    console.error("Error in api/categories/[sub] ", e);
  }
}
