import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const userId = req.nextUrl.searchParams.get("user_id");
    const subject = req.nextUrl.searchParams.get("subject");
    const type = req.nextUrl.searchParams.get("type");
    let user_id = 0;
    let the_subject: string = "";
    let the_type = "";

    if (userId !== null) {
      if (type !== null && type !== "") {
        if (subject !== "" && subject !== null) {
          the_type = type;
          user_id = parseInt(userId);
          the_subject = subject;
        }
      } else {
        console.log("Month parameter is null or empty");
      }
    } else {
      console.log("id_user parameter is null");
    }
    const data = await prisma.nilai_siswa.findMany({
      where: {
        user_id,
      },
      include: {
        students: {
          select: {
            nama_lengkap: true,
          },
        },
        nilai: {
          where: {
            user_id,
            nilai_type: the_type,
            mapel: the_subject,
          },
          include: {
            kd: true, // Include the date associated with absen
          },
        },
      },
    });
    return NextResponse.json({ status: "Ok", data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
