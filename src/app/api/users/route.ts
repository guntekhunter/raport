import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const user = await prisma.user.findMany();
    return NextResponse.json({ status: "Ok", user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { id } = reqBody;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      console.log(`Post with ID ${id} not found.`);
      return;
    }
    const deletedUser = await prisma.user.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ status: "Ok", deletedUser });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
