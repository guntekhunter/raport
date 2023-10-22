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

    const data = await prisma.nilai.findMany({
      where: {
        user_id: user_id,
        nilai_type: the_type,
        mapel: the_subject,
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
    const { id_nilai, nilai_type, mapel, id_kd, nilai, user_id } = reqBody;

    const newData = await prisma.nilai.create({
      data: {
        id_nilai,
        nilai_type,
        mapel,
        id_kd,
        nilai,
        user_id,
      },
    });

    const dataNilai = await prisma.nilai.findMany({
      where: {
        user_id,
        nilai_type,
        mapel,
      },
    });
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
            user_id: user_id,
            nilai_type,
            mapel,
          },
          include: {
            kd: true, // Include the date associated with absen
          },
        },
      },
    });

    return NextResponse.json({ status: "Ok", newData, dataNilai, data });
  } catch (error) {
    console.log(error);
  }
}
export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json();
    const { nilai, id, nilai_type, mapel, user_id } = reqBody;

    const newData = await prisma.nilai.update({
      where: {
        id,
      },
      data: {
        nilai,
      },
    });

    const dataNilai = await prisma.nilai.findMany({
      where: {
        user_id,
        nilai_type,
        mapel,
      },
    });
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
            user_id: user_id,
            nilai_type,
            mapel,
          },
          include: {
            kd: true,
          },
        },
      },
    });
    http://localhost:3000/api/absen?user_id=${parsedId}&absen_id=${absenId}&subject=${subject}&mounth=${mounth}

    return NextResponse.json({
      status: "Ok",
      newData,
      dataNilai,
      data: sortedData,
    });
  } catch (error) {
    console.log(error);
  }
}
