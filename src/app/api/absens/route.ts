import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export const config = {
  runtime: "edge", // this is a pre-requisite
  regions: ["iad1"], // only execute this function in iad1
};
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const userId = req.nextUrl.searchParams.get("user_id");
    const subject = req.nextUrl.searchParams.get("subject");
    const mounth = req.nextUrl.searchParams.get("mounth");
    let user_id = 0;
    let the_subject: string = "";
    let the_mounth = "";

    if (userId !== null) {
      if (mounth !== null && mounth !== "") {
        if (subject !== "" && subject !== null) {
          the_mounth = mounth;
          user_id = parseInt(userId);
          the_subject = subject;
        }
      } else {
        console.log("Month parameter is null or empty");
      }
    } else {
      console.log("id_user parameter is null");
    }
    const data = await prisma.absens.findMany({
      where: {
        user_id,
      },
      include: {
        students: {
          select: {
            nama_lengkap: true,
          },
        },
        absen: {
          where: {
            user_id: user_id,
            mounth: the_mounth,
            subject: the_subject,
          },
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
