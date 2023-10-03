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

    const data = await prisma.absen.findMany({
      where: {
        user_id: user_id,
        mounth: the_mounth,
        subject: the_subject,
      },
    });
    return NextResponse.json({ status: "Ok", data: data });
  } catch (err) {
    console.log(err);
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json();
    const { date_id, absens_id, user_id, mounth, subject, status } = reqBody;
    console.log(mounth);

    const newData = await prisma.absen.create({
      data: {
        date_id,
        absens_id,
        user_id,
        mounth,
        subject,
        status,
      },
    });

    const data = await prisma.absen.findMany({
      where: {
        user_id,
        mounth,
        subject,
      },
    });

    return NextResponse.json({ status: "Ok", newData, data, mounth });
  } catch (error) {
    console.log(error);
  }
}
