"use client";
import React, { useState } from "react";
import Input from "./Input";
import DropDownSiswa from "./DropDownSiswa";
import Link from "next/link";

export default function AddSiswa() {
  const [gender, setGender] = useState("Jenis Kelamin");
  const [isActive, setIsActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [isPindahan, setIsPindahan] = useState(false);

  const classCallback = (item: any, name: any) => {
    setButtonActive(true);
    if (name === "Jenis Kelamin") {
      setGender(item);
    }
  };

  const cancel = () => {
    callbackActive(false);
  };

  const pindahan = () => {
    setIsPindahan(!isPindahan);
  };
  return (
    <div className={`w-full flex justify-around z-1 py-[1.7rem]`}>
      <div className="w-[80%] space-y-[.7rem]">
        <div className="space-y-[1rem]">
          <Link
            href="siswa"
            className="bg-[#793FDF] rounded-md text-white px-[2rem] py-[.5rem]"
          >
            Back
          </Link>
          <p className="font-bold">TAMBAH PESERTA DIDIK</p>
        </div>
        <div className="flex justify-between rounded-md px-[3.5rem] py-[1.5rem] border-[1.5px] border-gray-200 border-b-[1.5px] bg-white w-full">
          <div className="w-full h-full">
            <div className="py-[1rem] space-y-4">
              <div className="font-bold">
                Keterangan Tentang Diri Peserta Didik
              </div>
              <div className="flex justify-between">
                <Input title="Nama Lengkap" />
                <Input title="Nama Panggilan" />
                <DropDownSiswa
                  name="semester"
                  title={gender}
                  isActive={isActive}
                  drop={["Laki-Laki", "Perempuan"]}
                  classCallback={classCallback}
                />
              </div>
              <div className="flex justify-between">
                <Input title="Tempat Tanggal Lahir" />
                <Input title="Agama" />
                <Input title="Kewarganegaraan" />
              </div>
              <div className="flex justify-between">
                <Input title="Anak Keberapa" />
                <Input title="Jumlah Saudara kandung" />
                <Input title="Jumlah Saudara Tiri" />
              </div>
              <div className="flex justify-between">
                <Input title="Jumlah Saudara Angkat" />
                <Input title="Bahasa Sehari-hari di Keluarga" />
                <div className="">
                  <div className="h-[2rem] px-[.5rem] rounded-md w-[13.7rem]" />
                </div>
              </div>
              <div className="font-bold pt-[1rem]">
                Keterangan Perkebangan Peserta Didik
              </div>
              <div className="font-bold pt-[.5rem] text-[.7rem]">
                Menerima Beasiswa
              </div>
              <div className="flex justify-between">
                <Input title="Tahun" />
                <Input title="Kelas" />
                <Input title="Dari" />
              </div>
              <div className="w-full flex justify-center text-[.7rem] py-[.5rem] rounded-md bg-[#793FDF] text-white">
                Tambahkan Pencapaian Peserta Didik
              </div>
              <div className="font-bold pt-[1rem]">
                Keterangan Tempat Tinggal
              </div>
              <div className="flex justify-between">
                <Input title="Alamat" />
                <Input title="Nomor Telepon / HP" />
                <Input title="Bertempat tinggal pada/bersama" />
              </div>
              <div className="flex justify-between">
                <Input title="Jarak Tempat Tinggal ke Sekolah" />
              </div>
              <div className="font-bold pt-[1rem]">
                Keterangan Tentang Kesehatan
              </div>
              <div className="flex justify-between">
                <Input title="Golongan Darah" />
                <Input title="Pnyakit Yang Pernah Diderita" />
                <Input title="Kelainan Jasmani" />
              </div>
              <div className="flex justify-between">
                <Input title="Tinggi dan Berat badan saat diterima" />
                <Input title="Tahun Pelajaran " />
                <Input title="Semester" />
              </div>
              <div className="flex justify-between">
                <Input title="Berat Badan" />
                <Input title="Tinggi Badan" />
                <div className="">
                  <div className="h-[2rem] px-[.5rem] rounded-md w-[13.7rem]" />
                </div>
              </div>
              <button
                className="bg-[#793FDF] rounded-md text-white px-[2rem] py-[.5rem] text-[.7rem]"
                onClick={pindahan}
              >
                {!isPindahan ? (
                  <p>Siswa ini pindahan?</p>
                ) : (
                  <p>bukan pindahan?</p>
                )}
              </button>
              <div
                className={`space-y-[.7rem] pb-[.4rem] ${
                  isPindahan
                    ? "transition-opacity ease-in duration-200 opacity-100"
                    : "transition-opacity ease-out duration-200 opacity-0 pointer-events-none absolute"
                }`}
              >
                <div className="font-bold">Keterangan Tentang Pendidikan</div>
                <div className="font-bold pt-[.5rem] text-[.7rem]">
                  Pendidkan Sebelumnya
                </div>
                <div className="flex justify-between">
                  <Input title="Asal Murid" />
                  <Input title="Nama Taman Kanak-kanak" />
                  <Input title="Alamat" />
                </div>
                <div className="flex justify-between">
                  <Input title="Tanggal dan Nomor STTB" />
                </div>
                <div className="font-bold pt-[.5rem] text-[.7rem]">
                  Pindahan Dari Sekolah Lain
                </div>
                <div className="flex justify-between">
                  <Input title="Nama Sekolah Asal" />
                  <Input title="Dari Tingkat / Kelas" />
                  <Input title="NIS" />
                </div>
                <div className="flex justify-between">
                  <Input title="Alasan Pindah" />
                </div>
                <div className="font-bold pt-[.5rem] text-[.7rem]">
                  Diterima Disekolah Ini
                </div>
                <div className="flex justify-between">
                  <Input title="Diterima Tanggal" />
                  <Input title="Di Kelas / Tingkat" />
                  <div className="">
                    <div className="h-[2rem] px-[.5rem] rounded-md w-[13.7rem]" />
                  </div>
                </div>
              </div>
              <div className="font-bold">Keterangan Tentang Ayah Kandung</div>
              <div className="flex justify-between">
                <Input title="Nama" />
                <Input title="Tahun Lahir" />
                <Input title="Agama" />
              </div>
              <div className="flex justify-between">
                <Input title="Pendidikan" />
                <Input title="Pekerjaan" />
                <div className="">
                  <div className="h-[2rem] px-[.5rem] rounded-md w-[13.7rem]" />
                </div>
              </div>
              <div className="font-bold pt-[1rem]">
                Keterangan Tentang Ibu Kandung
              </div>
              <div className="flex justify-between">
                <Input title="Nama" />
                <Input title="Tahun Lahir" />
                <Input title="Agama" />
              </div>
              <div className="flex justify-between">
                <Input title="Pendidikan" />
                <Input title="Pekerjaan" />
                <div className="">
                  <div className="h-[2rem] px-[.5rem] rounded-md w-[13.7rem]" />
                </div>
              </div>
              <div className="font-bold pt-[1rem]">Keterangan Tentang Wali</div>
              <div className="flex justify-between">
                <Input title="Nama" />
                <Input title="Tahun Lahir" />
                <Input title="Agama" />
              </div>
              <div className="flex justify-between">
                <Input title="Pendidikan" />
                <Input title="Pekerjaan" />
                <Input title="Alamat Rumah. Nomor Telp." />
              </div>
              <div className="flex justify-between">
                <Input title="Hubungan Keluarga" />
              </div>

              {/* <div className="font-bold pt-[1rem]">Meninggalkan Sekolah</div>
            <div className="flex justify-between">
              <Input title="Tanggal Meninggalkan Sekolah" />
              <Input title="Kelas Yang Ditinggalkan" />
              <Input title="Alasan" />
            </div>
            <div className="flex justify-between">
              <Input title="Sekolah Yang Dituju" />
              <Input title="Kecamatan" />
              <Input title="Kabupaten" />
            </div>
            <div className="flex justify-between">
              <Input title="Provinsi" />
            </div> */}
              {/* <div className="font-bold pt-[1rem]">Akhir Pendidikan</div>
            <div className="flex justify-between">
              <Input title="Tempat belajar / Lulus Tahun" />
              <Input title="Nomor Ijasah / STL" />
              <Input title="Akan Melanjutkan Ke" />
            </div> */}
            </div>
            <div className="flex justify-between w-[45%]">
              <button className="bg-[#793FDF] rounded-md text-white px-[2rem] py-[.5rem]">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function callbackActive(arg0: boolean) {
  throw new Error("Function not implemented.");
}
