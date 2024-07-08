import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
    const { userId } = auth();

    if (!userId) {
        return new NextResponse(JSON.stringify({ user: null }), {
            status: 401,
        });
    }

    const user = await db.user.findUnique({
        where: { clerkId: userId },
    });

    return NextResponse.json({ user });
}