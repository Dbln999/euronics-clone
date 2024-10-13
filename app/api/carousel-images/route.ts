import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const carouselImages = await prisma.discountImagesForCarousel.findMany();
  return NextResponse.json(carouselImages);
}
