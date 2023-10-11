import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export const config = {
  runtime: "edge", // this is a pre-requisite
  regions: ["iad1"], // only execute this function in iad1
};

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = req.nextUrl.searchParams.get("id");
    let id = 0;

    if (reqBody !== null) {
      id = parseInt(reqBody); // Using radix 10 for decimal
    } else {
      console.log("id_user parameter not found in the URL");
    }
    const studentt = await prisma.students_data.findFirst({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ status: "Ok", studentt });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
