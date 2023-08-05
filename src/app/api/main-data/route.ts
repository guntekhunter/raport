import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const data = await prisma.main_data.findMany();
    return NextResponse.json({ status: "Ok", data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { guru_kelas, nip, kelas_huruf, kelas_angka, semester, id_user } =
      reqBody;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
