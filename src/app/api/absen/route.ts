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
        is_active: true,
      },
    });

    const dataAbsen = await prisma.absen.findMany({
      where: {
        user_id,
        mounth,
        subject,
      },
    });
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
            mounth,
            subject,
          },
          include: {
            date: true, // Include the date associated with absen
          },
        },
      },
    });

    return NextResponse.json({ status: "Ok", newData, dataAbsen, data });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const userId = req.nextUrl.searchParams.get("user_id");
    const absenId = req.nextUrl.searchParams.get("absen_id");
    const subject = req.nextUrl.searchParams.get("subject");
    const mounth = req.nextUrl.searchParams.get("mounth");
    let user_id = 0;
    let absen_id = 0;
    let the_subject: string = "";
    let the_mounth = "";

    if (userId !== null) {
      if (absenId !== null) {
        if (mounth !== null && mounth !== "") {
          if (subject !== "" && subject !== null) {
            the_mounth = mounth;
            user_id = parseInt(userId);
            absen_id = parseInt(absenId);
            the_subject = subject;
          }
        } else {
          console.log("Month parameter is null or empty");
        }
      } else {
        console.log("id_user parameter is null");
      }
    }

    const dataDeleted = await prisma.absen.update({
      where: {
        id: absen_id,
      },
      data: {
        is_active: false,
      },
    });

    const dataAbsen = await prisma.absen.findMany({
      where: {
        user_id,
        mounth: the_mounth,
        subject: the_subject,
      },
    });
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
            date: true,
          },
        },
      },
    });

    const sortedData = data.map((item) => ({
      ...item,
      nilai: item.absen.sort((a, b) => a.id - b.id), // Sort the nilai array by id
    }));

    return NextResponse.json({
      status: "Ok",
      dataDeleted,
      dataAbsen,
      data: sortedData,
    });
  } catch (err) {
    console.log(err);
  }
}
