import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const categories = await prisma.categoria.findMany({
        include: {
            productos: true
        }
    });
    return NextResponse.json(categories);
}