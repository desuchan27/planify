import db from "@/lib/db";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server"

export async function POST(
    req: Request,
    { params }: { params: { dailyId: string } },
) {
    try {
        const session = await getSession();

        const body = await req.json();

        const { label, time, repetitionPattern } = body;


        if (!session) {
            return new NextResponse("Unauthenticated", { status: 401 });
        }

        if (!label) {
            return new NextResponse("Label is required", { status: 400 })
        }

        if (!time) {
            return new NextResponse("Time is required", { status: 400 })
        }

        if (!repetitionPattern) {
            return new NextResponse("Repetition pattern is required", { status: 400 })
        }

        const storeByUserId = await db.toDo.findFirst({
            where: {
                id: params.dailyId,
                session: {
                    userId: session.user?.email
                }
            }
        })

        if (!storeByUserId) {
            return new NextResponse("Unauthorized", { status: 403 })
        }

        const billboard = await db.billboard.create({
            data: {
                label,
                imageUrl,
                storeId: params.storeId
            }
        })

        return NextResponse.json(billboard)

    } catch (error) {
        console.log('[BILLBOARDS_POST]', error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function GET(
    req: Request,
    { params }: { params: { toDoDailyId: string } },
) {
    try {

        if (!params.toDoDailyId) {
            return new NextResponse("To Do Daily ID is required", { status: 400 })
        }

        const toDoDaily = await db.toDo.findMany({
            where: {
                toDoDailyId: params.toDoDailyId
            }
        })

        return NextResponse.json(billboards)

    } catch (error) {
        console.log('[BILLBOARDS_GET]', error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}