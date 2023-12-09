import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";

// Get all orders
export async function GET() {
    const prisma = new PrismaClient();
    const ordenes = await prisma.orden.findMany({
        where: {
            estado: false
        }
    });

    // console.log(ordenes);
    return NextResponse.json(ordenes)
}

// Create an order
export async function POST(request) {
    const prisma = new PrismaClient();

    const { nombre, total, pedido, fecha } = await request.json()
    const nuevaOrden = await prisma.orden.create({
        data: {
            nombre,
            total,
            pedido,
            fecha
        },
    });

    // console.log(nuevaOrden);
    return NextResponse.json(nuevaOrden)
}