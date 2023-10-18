import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export const config = {
  runtime: "edge", // this is a pre-requisite
  regions: ["iad1"], // only execute this function in iad1
};

// export async function GET(req: NextRequest, res: NextResponse) {
//   try {
//     const reqData = await req.json();
//     const { user_id, siswa_id } = reqData;

//     console.log(user_id, siswa_id);
//     const reqBody = req.nextUrl.searchParams.get("id");
//     let id = 0;

//     if (reqBody !== null) {
//       id = parseInt(reqBody); // Using radix 10 for decimal
//     } else {
//       console.log("id_user parameter not found in the URL");
//     }
//     const student = await prisma.students_data.findFirst({
//       where: {
//         id: id,
//       },
//     });
//     return NextResponse.json({ status: "Ok", student });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = req.nextUrl.searchParams.get("id");
    const userId = req.nextUrl.searchParams.get("user_id");
    let id = 0;
    let idUser = 0;

    if (reqBody && userId !== null) {
      idUser = parseInt(userId);
      id = parseInt(reqBody); // Using radix 10 for decimal
    } else {
      console.log("id_user parameter not found in the URL");
    }
    const data = await prisma.nilai_siswa.findFirst({
      where: {
        siswa_id: id,
        user_id: idUser,
      },
      include: {
        students: {
          select: {
            nama_lengkap: true,
            nisn: true,
          },
        },
        nilai: {
          where: {
            user_id: idUser,
          },
        },
      },
    });
    return NextResponse.json({ status: "Ok", data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
