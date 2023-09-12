import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const students = await prisma.students_data.findMany();
    return NextResponse.json({ status: "Ok", students });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const {
      id_user,
      nama_lengkap,
      nama_panggilan,
      jenis_kelamin,
      tempat_tanggal_lahir,
      agama,
      kewarganegaraan,
      anak_keberapa,
      jumlah_saudara_kandung,
      jumlah_saudara_tiri,
      jumlah_saudara_angkat,
      bahasa_sehari_hari,
      alamat,
      nomor_telepon,
      bertempat_tinggal_bersama,
      jarak_tempat_tinggal_ke_sekolah,
      golongan_darah,
      penyakit_yang_pernah_diderita,
      kelainan_jasmani,
      tinggi_dan_berat_badan_saat_diterima,
      tahun_pelajaran,
      semester,
      berat_badan,
      tinggi_badan,
      asal_murid,
      nama_tk,
      alamat_tk,
      tanggal_dan_nomor_sstb,
      nama_sekolah_asal,
      dari_tingkat_kelas,
      nis,
      alasan_pindah,
      diterima_tanggal,
      diterima_saat_kelas,
      nama_ayah,
      tahu_lahir_ayah,
      agama_ayah,
      pendidikan_ayah,
      pekerjaan_ayah,
      nama_ibu,
      tahu_lahir_ibu,
      agama_ibu,
      pendidikan_ibu,
      pekerjaan_ibu,
      nama_wali,
      tahun_lahir_wali,
      agama_wali,
      pendidikan_wali,
      pekerjaan_wali,
      alamat_wali,
      hubungan_keluarga_wali,
      tahun_sekarang,
      kelas_sekarang,
      dari_kelas,
      tanggal_meninggalkan_sekolah,
      kelas_yang_ditinggalkan,
      alasan_meninggalkan_sekolah,
      sekolah_yang_dituju,
      kecamatan_sekolah_tujuan,
      kabupaten_sekolah_tujuan,
      provinsi_sekolah_tujuan,
      tempat_belajar,
      nomor_ijasah,
      akan_melanjutkan_ke,
    } = reqBody;

    const newStudent = await prisma.students_data.create({
      data: {
        id_user,
        nama_lengkap,
        nama_panggilan,
        jenis_kelamin,
        tempat_tanggal_lahir,
        agama,
        kewarganegaraan,
        anak_keberapa,
        jumlah_saudara_kandung,
        jumlah_saudara_tiri,
        jumlah_saudara_angkat,
        bahasa_sehari_hari,
        alamat,
        nomor_telepon,
        bertempat_tinggal_bersama,
        jarak_tempat_tinggal_ke_sekolah,
        golongan_darah,
        penyakit_yang_pernah_diderita,
        kelainan_jasmani,
        tinggi_dan_berat_badan_saat_diterima,
        tahun_pelajaran,
        semester,
        berat_badan,
        tinggi_badan,
        asal_murid,
        nama_tk,
        alamat_tk,
        tanggal_dan_nomor_sstb,
        nama_sekolah_asal,
        dari_tingkat_kelas,
        nis,
        alasan_pindah,
        diterima_tanggal,
        diterima_saat_kelas,
        nama_ayah,
        tahu_lahir_ayah,
        agama_ayah,
        pendidikan_ayah,
        pekerjaan_ayah,
        nama_ibu,
        tahu_lahir_ibu,
        agama_ibu,
        pendidikan_ibu,
        pekerjaan_ibu,
        nama_wali,
        tahun_lahir_wali,
        agama_wali,
        pendidikan_wali,
        pekerjaan_wali,
        alamat_wali,
        hubungan_keluarga_wali,
        tahun_sekarang,
        kelas_sekarang,
        dari_kelas,
        tanggal_meninggalkan_sekolah,
        kelas_yang_ditinggalkan,
        alasan_meninggalkan_sekolah,
        sekolah_yang_dituju,
        kecamatan_sekolah_tujuan,
        kabupaten_sekolah_tujuan,
        provinsi_sekolah_tujuan,
        tempat_belajar,
        nomor_ijasah,
        akan_melanjutkan_ke,
      },
    });

    return NextResponse.json({ status: "Ok", newStudent });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const idStudent = req.nextUrl.searchParams.get("id");
    let id = 0;

    if (idStudent !== null) {
      id = parseInt(idStudent); // Using radix 10 for decimal
    } else {
      console.log("id_user parameter not found in the URL");
    }

    const {
      id_user,
      nama_lengkap,
      nama_panggilan,
      jenis_kelamin,
      tempat_tanggal_lahir,
      agama,
      kewarganegaraan,
      anak_keberapa,
      jumlah_saudara_kandung,
      jumlah_saudara_tiri,
      jumlah_saudara_angkat,
      bahasa_sehari_hari,
      alamat,
      nomor_telepon,
      bertempat_tinggal_bersama,
      jarak_tempat_tinggal_ke_sekolah,
      golongan_darah,
      penyakit_yang_pernah_diderita,
      kelainan_jasmani,
      tinggi_dan_berat_badan_saat_diterima,
      tahun_pelajaran,
      semester,
      berat_badan,
      tinggi_badan,
      asal_murid,
      nama_tk,
      alamat_tk,
      tanggal_dan_nomor_sstb,
      nama_sekolah_asal,
      dari_tingkat_kelas,
      nis,
      alasan_pindah,
      diterima_tanggal,
      diterima_saat_kelas,
      nama_ayah,
      tahu_lahir_ayah,
      agama_ayah,
      pendidikan_ayah,
      pekerjaan_ayah,
      nama_ibu,
      tahu_lahir_ibu,
      agama_ibu,
      pendidikan_ibu,
      pekerjaan_ibu,
      nama_wali,
      tahun_lahir_wali,
      agama_wali,
      pendidikan_wali,
      pekerjaan_wali,
      alamat_wali,
      hubungan_keluarga_wali,
      tahun_sekarang,
      kelas_sekarang,
      dari_kelas,
      tanggal_meninggalkan_sekolah,
      kelas_yang_ditinggalkan,
      alasan_meninggalkan_sekolah,
      sekolah_yang_dituju,
      kecamatan_sekolah_tujuan,
      kabupaten_sekolah_tujuan,
      provinsi_sekolah_tujuan,
      tempat_belajar,
      nomor_ijasah,
      akan_melanjutkan_ke,
    } = reqBody;

    const data = await prisma.students_data.update({
      where: {
        id: id,
      },
      data: {
        id_user,
        nama_lengkap,
        nama_panggilan,
        jenis_kelamin,
        tempat_tanggal_lahir,
        agama,
        kewarganegaraan,
        anak_keberapa,
        jumlah_saudara_kandung,
        jumlah_saudara_tiri,
        jumlah_saudara_angkat,
        bahasa_sehari_hari,
        alamat,
        nomor_telepon,
        bertempat_tinggal_bersama,
        jarak_tempat_tinggal_ke_sekolah,
        golongan_darah,
        penyakit_yang_pernah_diderita,
        kelainan_jasmani,
        tinggi_dan_berat_badan_saat_diterima,
        tahun_pelajaran,
        semester,
        berat_badan,
        tinggi_badan,
        asal_murid,
        nama_tk,
        alamat_tk,
        tanggal_dan_nomor_sstb,
        nama_sekolah_asal,
        dari_tingkat_kelas,
        nis,
        alasan_pindah,
        diterima_tanggal,
        diterima_saat_kelas,
        nama_ayah,
        tahu_lahir_ayah,
        agama_ayah,
        pendidikan_ayah,
        pekerjaan_ayah,
        nama_ibu,
        tahu_lahir_ibu,
        agama_ibu,
        pendidikan_ibu,
        pekerjaan_ibu,
        nama_wali,
        tahun_lahir_wali,
        agama_wali,
        pendidikan_wali,
        pekerjaan_wali,
        alamat_wali,
        hubungan_keluarga_wali,
        tahun_sekarang,
        kelas_sekarang,
        dari_kelas,
        tanggal_meninggalkan_sekolah,
        kelas_yang_ditinggalkan,
        alasan_meninggalkan_sekolah,
        sekolah_yang_dituju,
        kecamatan_sekolah_tujuan,
        kabupaten_sekolah_tujuan,
        provinsi_sekolah_tujuan,
        tempat_belajar,
        nomor_ijasah,
        akan_melanjutkan_ke,
      },
    });
    return NextResponse.json({ status: "Ok", studetUpdated: data });
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
    const data = await prisma.students_data.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ status: "Ok", dataDeleted: data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}