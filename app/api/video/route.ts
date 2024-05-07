import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { term } = body;

    if (!term) {
      return new NextResponse('Missing search term', { status: 400 });
    }

    const results = await prisma.video.findMany({
      where: {
        OR: [
          { title: { contains: term, mode: "insensitive" } },
          { description: { contains: term, mode: "insensitive" } },
        ],
      },
    });

    return NextResponse.json(results);
  } catch (error: any) {
    console.log(error, 'SEARCH ERROR');
    return new NextResponse('Internal Error', { status: 500 });
  }
}
