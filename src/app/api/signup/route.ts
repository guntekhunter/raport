import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
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
    const { email, name, isAdmin, password } = reqBody;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return NextResponse.json(
        { error: "user already exist" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        isAdmin,
        password: hashedPassword,
      },
    });
    const users = await prisma.user.findMany();
    return NextResponse.json({
      status: "Ok",
      message: "new user added",
      users,
      newUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
