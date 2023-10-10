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
    const type = req.nextUrl.searchParams.get("type");
    let user_id = 0;
    let the_subject: string = "";
    let the_type = "";

    if (userId !== null) {
      if (type !== null && type !== "") {
        if (subject !== "" && subject !== null) {
          the_type = type;
          user_id = parseInt(userId); // Using radix 10 for decimal
          the_subject = subject; // Using radix 10 for decimal
        }
      } else {
        console.log("Month parameter is null or empty");
      }
    } else {
      console.log("id_user parameter is null");
    }

    const data = await prisma.kd.findMany({
      where: {
        user_id: user_id,
        nilai_type: the_type,
        mapel: the_subject,
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
    const { nilai_type, mapel, no_kd, ket_kd, user_id } = reqBody;

    const newData = await prisma.kd.create({
      data: {
        nilai_type,
        mapel,
        no_kd,
        ket_kd,
        user_id,
      },
    });

    const data = await prisma.kd.findMany({
      where: {
        nilai_type,
        user_id,
        mapel,
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

    const { no_kd, ket_kd } = reqBody;

    const data = await prisma.kd.update({
      where: {
        id: id,
      },
      data: {
        no_kd,
        ket_kd,
      },
    });

    return NextResponse.json({ status: "OK", updatedData: data });
  } catch (error) {
    console.log(error);
  }
}
