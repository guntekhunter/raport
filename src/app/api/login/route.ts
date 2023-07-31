import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import getConfig from "next/config";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ status: "Ok" });
}

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "email tidak terdaftar" },
        { status: 400 }
      );
    }

    const validatePassword = await bcryptjs.compare(password, user.password);

    if (!validatePassword) {
      return NextResponse.json({ error: "password salah" }, { status: 400 });
    }

    //create token data
    const tokenData = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      success: true,
      message: "Login Successfull",
      user,
    });

    response.cookies.set("token", token, { httpOnly: true });

    return response;

    // console.log(serverRuntimeConfig.secret);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
