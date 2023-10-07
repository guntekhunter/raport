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
          user_id = parseInt(userId); // Using radix 10 for decimal
          the_subject = subject; // Using radix 10 for decimal
        }
      } else {
        console.log("Month parameter is null or empty");
      }
    } else {
      console.log("id_user parameter is null");
    }

    const data = await prisma.date.findMany({
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

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json();
    const { date, mounth, user_id, mata_pelajaran } = reqBody;

    const newData = await prisma.date.create({
      data: {
        date,
        mounth,
        user_id,
        mata_pelajaran,
      },
    });

    const data = await prisma.date.findMany({
      where: {
        mounth,
        user_id,
        mata_pelajaran,
      },
    });

    return NextResponse.json({ status: "Ok", newData, data });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json();

    const idDate = req.nextUrl.searchParams.get("id");
    let id = 0;

    if (idDate !== null) {
      id = parseInt(idDate); // Using radix 10 for decimal
    } else {
      console.log("id_date parameter not found in the URL");
    }

    const { date, mounth, user_id, mata_pelajaran } = reqBody;

    const data = await prisma.date.update({
      where: {
        id: id,
      },
      data: {
        date,
        mounth,
        user_id,
        mata_pelajaran,
      },
    });

    return NextResponse.json({ status: "OK", updatedData: data });
  } catch (error) {
    console.log(error);
  }
}
