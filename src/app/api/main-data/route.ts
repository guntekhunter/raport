import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export const config = {
  runtime: "edge", // this is a pre-requisite
  regions: ["iad1"], // only execute this function in iad1
};
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = req.nextUrl.searchParams.get("id_user");
    let id = 0;

    if (reqBody !== null) {
      id = parseInt(reqBody); // Using radix 10 for decimal
    } else {
      console.log("id_user parameter not found in the URL");
    }
    const data = await prisma.main_data.findFirst({
      where: {
        id_user: id,
      },
    });
    return NextResponse.json({ status: "Ok", data: data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const {
      guru_kelas,
      nip,
      kelas_huruf,
      kelas_angka,
      semester,
      id_user,
      nama_sekolah,
      npsn,
      status_sekolah,
      alamat_sekolah,
      desa,
      kecamatan,
      kabupaten,
      propinsi,
      kepala_sekolah,
      nip_kepsek,
      tahun_ajaran,
    } = reqBody;

    const exitingData = await prisma.main_data.findFirst({
      where: {
        id_user,
      },
    });
    let data;

    if (!exitingData) {
      data = await prisma.main_data.create({
        data: {
          guru_kelas,
          nip,
          kelas_huruf,
          kelas_angka,
          semester,
          id_user,
          nama_sekolah,
          npsn,
          status_sekolah,
          alamat_sekolah,
          desa,
          kecamatan,
          kabupaten,
          propinsi,
          kepala_sekolah,
          nip_kepsek,
          tahun_ajaran,
        },
      });
    } else {
      data = await prisma.main_data.update({
        where: {
          id: exitingData.id,
        },
        data: {
          guru_kelas,
          nip,
          kelas_huruf,
          kelas_angka,
          semester,
          id_user,
          nama_sekolah,
          npsn,
          status_sekolah,
          alamat_sekolah,
          desa,
          kecamatan,
          kabupaten,
          propinsi,
          kepala_sekolah,
          nip_kepsek,
          tahun_ajaran,
        },
      });
    }

    return NextResponse.json({ status: "Ok", data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const reqBody = req.nextUrl.searchParams.get("id");
    let id = 0;

    if (reqBody !== null) {
      id = parseInt(reqBody); // Using radix 10 for decimal
    } else {
      console.log("id_user parameter not found in the URL");
    }
    const data = await prisma.main_data.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ status: "Ok", dataDeleted: data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
