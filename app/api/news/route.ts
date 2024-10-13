import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const limit = request.nextUrl.searchParams.get("limit") || 10;

  const news = await prisma.news.findMany({
    take: Number(limit),
  });
  return NextResponse.json(news);
}
