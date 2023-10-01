import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = req.nextUrl.searchParams.get("user_id");
    let id = 0;

    if (reqBody !== null) {
      id = parseInt(reqBody); // Using radix 10 for decimal
    } else {
      console.log("id_user parameter not found in the URL");
    }
    const data = await prisma.absens.findMany({
      where: {
        user_id: id,
      },
      include: {
        students: {
          select: {
            nama_lengkap: true,
          },
        },
        absen: {
          include: {
            date: true, // Include the date associated with absen
          },
        },
      },
    });
    return NextResponse.json({ status: "Ok", data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
