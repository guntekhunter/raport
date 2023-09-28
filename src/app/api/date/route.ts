import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

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
          user_id = parseInt(userId); // Using radix 10 for decimal
          the_subject = subject; // Using radix 10 for decimal
        }
      } else {
        console.log("Month parameter is null or empty");
      }
    } else {
      console.log("id_user parameter is null");
    }

    const data = await prisma.date.findFirst({
      where: {
        user_id: user_id,
        mounth: the_mounth,
        mata_pelajaran: the_subject,
      },
    });
    return NextResponse.json({ status: "Ok", data: data });
  } catch (error) {
    console.log(error);
  }
}