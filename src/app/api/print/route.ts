import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export const config = {
  runtime: "edge",
  regions: ["iad1"],
};

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
            keterangan_perkembangan_pesdik: true,
            nama_wali: true,
          },
        },
        user: {
          select: {
            main_data: {
              select: {
                nama_sekolah: true,
                alamat_sekolah: true,
                kelas_angka: true,
                semester: true,
                guru_kelas: true,
                nip: true,
                desa: true,
                kepala_sekolah: true,
                nip_kepsek: true,
                tahun_ajaran: true,
              },
            },
          },
        },
        nilai: {
          select: {
            id_nilai: true,
            nilai_type: true,
            mapel: true,
            id_kd: true,
            nilai: true,
            user_id: true,
          },
        },
      },
    });
    return NextResponse.json({ status: "Ok", data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
