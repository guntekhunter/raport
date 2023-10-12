"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Image from "next/image";
import { tr } from "date-fns/locale";

// @ts-ignore
export default function PrintPage({ id }) {
  const [student, setStudent] = useState<any>([]);
  const ref = useRef<HTMLDivElement>(null);
  const print = useReactToPrint({
    content: () => ref.current,
  });

  // useEffect(() => {
  //   const fetchStudent = async () => {
  //     if (id) {
  //       try {
  //         const data = await axios.get(
  //           `http://localhost:3000/api/print?id=${id}`
  //         );
  //         setStudent(data.data.student);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   };
  //   fetchStudent();
  // }, [id]);

  // useEffect(() => {
  //   if (id) {
  //     print();
  //   }
  // }, [id, print]);

  // console.log(student);

  // ----------------- temporary code ----------------
  const handlePrint = () => {
    print();
  };

  // if (!student) return null;

  return (
    <div className="py-6 text-[1rem] text-sm font-medium" ref={ref}>
      <button
        className="fixed top-[6rem] z-20 bg-blue-200 left-[2rem] p-[1rem]"
        onClick={handlePrint}
      >
        ahhay
      </button>

      {/* first page */}
      <div className="h-[68.5rem]">
        <div className="justify-end flex w-full">
          <div className="pr-[2rem]">
            <table className="w-[20rem]">
              <thead>
                <tr className="text-left">
                  <th className="text-[1rem] text-sm font-medium">No. Seri</th>
                  <th className="text-[1rem] text-sm font-medium">:</th>
                  <th className="text-[1rem] text-sm font-medium">123123123</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[1rem] text-sm font-medium">NISN</td>
                  <td className="text-[1rem] text-sm font-medium">:</td>
                  <td className="text-[1rem] text-sm font-medium">
                    ..... s.d. ....
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="flex justify-around pt-[5rem]">
            <Image
              src={"/logo.png"}
              alt={""}
              height={500}
              width={500}
              className="w-[15rem]"
            />
          </div>
          <div className="py-5 text-center space-y-[2rem]">
            <div className="font-bold text-7xl">BUKU INDUK</div>
            <div className="font-medium text-5xl">
              Peserta Didik Sekolah Dasar
            </div>
          </div>
          <div className="flex justify-center mt-[4rem] text-[.9rem] font-bold">
            <div className="w-[50%]">
              <div className="flex flex-row w-full">
                <p className="basis-6/12 md:basis-9/12">NAMA SEKOLAH</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-9/12 md:basis-9/12">SD INPRES LOJONG</p>
              </div>
              <div className="flex flex-row w-full">
                <p className="basis-6/12 md:basis-9/12">NPSN</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-9/12 md:basis-9/12">Tompobulu</p>
              </div>
              <div className="flex flex-row w-full">
                <p className="basis-6/12 md:basis-9/12">STATUS SEKOLAH</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-9/12 md:basis-9/12">Tompobulu</p>
              </div>
              <div className="flex flex-row w-full">
                <p className="basis-6/12 md:basis-9/12">ALAMAT SEKOLAH</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-9/12 md:basis-9/12">Tompobulu</p>
              </div>
              <div className="flex flex-row w-full">
                <p className="basis-6/12 md:basis-9/12">DESA</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-9/12 md:basis-9/12">Tompobulu</p>
              </div>
              <div className="flex flex-row w-full">
                <p className="basis-6/12 md:basis-9/12">KECAMATAN</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-9/12 md:basis-9/12">Tompobulu</p>
              </div>
              <div className="flex flex-row w-full">
                <p className="basis-6/12 md:basis-9/12">KABUPATEN</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-9/12 md:basis-9/12">Tompobulu</p>
              </div>
              <div className="flex flex-row w-full">
                <p className="basis-6/12 md:basis-9/12">PROPINSI</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-9/12 md:basis-9/12">Tompobulu</p>
              </div>
            </div>
          </div>

          <div className="pt-[5rem] text-center">
            <div className="font-bold text-[1.2rem]">
              KEMENTRIAN PENDIDIKAN DAN KEBUDAYAAN
            </div>
            <div className="font-bold text-[1.2rem]">REPUBLIK INDONESIA</div>
          </div>
        </div>
      </div>

      {/* second page */}
      <div className="h-[68.5rem] pt-[2rem] px-[2rem]">
        <div className="relative">
          <div className="py-5 text-center space-y-[2rem]">
            <div className="font-medium text-2xl">IDENTITAS PESERTA DIDIK</div>
          </div>
          {/* image */}
          <div className="absolute right-0 border-[1.5px] justify-around flex px-[2.5rem] py-[3.5rem]">
            <div>
              <div className="text-center">Foto</div>
              <div className="text-center">3 X 4 cm</div>
            </div>
          </div>
          {/* NIS & NISN */}
          <div className="text-[1rem] ml-[2.9rem]">
            <div className="flex flex-row ">
              <p className="basis-6/12 md:basis-2/12">NIS</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-8/12">123123123</p>
            </div>

            <div className="flex flex-row">
              <p className="basis-6/12 md:basis-2/12">NISN</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-8/12">123123123</p>
            </div>
          </div>
          {/* KETERANGAN TENTANG DIRI PESERTA DIDIK */}
          <div className="pt-[1rem]">
            <p className="text-[.9rem] font-bold">
              A. KETERANGAN TENTANG DIRI PESERTA DIDIK
            </p>
            <div className="pl-[1rem] font-medium">
              <div className="flex flex-row">
                <p className="basis-1/12">1.</p>
                <p className="basis-6/12 md:basis-7/12">
                  Nama Lengkap Peserta Didik
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row ">
                <p className="basis-1/12">2.</p>
                <p className="basis-6/12 md:basis-7/12">Nama Panggilan</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">3.</p>
                <p className="basis-6/12 md:basis-7/12">Jenis Kelamin</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">4.</p>
                <p className="basis-6/12 md:basis-7/12">Tempat Tanggal Lahir</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">5.</p>
                <p className="basis-6/12 md:basis-7/12">Agama</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">6.</p>
                <p className="basis-6/12 md:basis-7/12">Kewarga Negaraan</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">7.</p>
                <p className="basis-6/12 md:basis-7/12">Anak Keberapa</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">8.</p>
                <p className="basis-6/12 md:basis-7/12">
                  Jumlah Saudara Kandung
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">9.</p>
                <p className="basis-6/12 md:basis-7/12">Jumlah Sadara Tiri</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">10.</p>
                <p className="basis-6/12 md:basis-7/12">
                  Jumlah Saudara Angkat
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">11.</p>
                <p className="basis-6/12 md:basis-7/12">
                  Bahasa Sehari-hari dalam Keluarga
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
            </div>
          </div>
          {/* KETERANGAN TEMPAT TINGGAL */}
          <div className="pt-[1rem]">
            <p className="text-[.9rem] font-bold">
              B. KETERANGAN TEMPAT TINGGAL
            </p>
            <div className="pl-[1rem] font-medium">
              <div className=" flex flex-row">
                <p className="basis-1/12">12.</p>
                <p className="basis-6/12 md:basis-7/12">Alamat</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">13.</p>
                <p className="basis-6/12 md:basis-7/12">No. Telpon/ HP</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">14.</p>
                <p className="basis-6/12 md:basis-7/12">
                  Bertempat tinggal pada/bersama
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">15.</p>
                <p className="basis-6/12 md:basis-7/12">
                  Jarak tempat tinggal ke sekolah
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
            </div>
          </div>
          {/* KETERANGAN TENTANG KESEHATAN */}
          <div className="pt-[1rem] ">
            <p className="text-[.9rem] font-bold">
              C. KETERANGAN TENTANG KESEHATAN
            </p>
            <div className="pl-[1rem] font-medium relative">
              <div className="flex flex-row">
                <p className="basis-1/12">16.</p>
                <p className="basis-6/12 md:basis-7/12">Golongan darah</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">17.</p>
                <p className="basis-6/12 md:basis-7/12">
                  Penyakit yang pernah diderita
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">18.</p>
                <p className="basis-6/12 md:basis-7/12">Kelainan jasmani</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">19.</p>
                <p className="basis-6/12 md:basis-7/12">
                  Tinggi dan berat badan saat diterima
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">20.</p>
                <p className="basis-6/12 md:basis-7/12">Keadaan jasmani</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12"></p>
                <p className="basis-6/12 md:basis-7/12">Tahun Pelajaran</p>
                <p className="basis-1/12 text-center"></p>
                <p className="basis-5/12 md:basis-9/12"></p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12"></p>
                <p className="basis-6/12 md:basis-7/12">Semester</p>
                <p className="basis-1/12 text-center"></p>
                <p className="basis-5/12 md:basis-9/12"></p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12"></p>
                <p className="basis-6/12 md:basis-7/12">Berat badan</p>
                <p className="basis-1/12 text-center"></p>
                <p className="basis-5/12 md:basis-9/12"></p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12"></p>
                <p className="basis-6/12 md:basis-7/12">Tinggi badan</p>
                <p className="basis-1/12 text-center"></p>
                <p className="basis-5/12 md:basis-9/12"></p>
              </div>
              {/* table */}
              <div className="absolute top-[6rem] left-[23.4rem]">
                <div className="flex border-y border-x border-black">
                  <div className="w-[7rem] text-center px-[1rem] border-r border-black">
                    2019/2020
                  </div>
                  <div className="w-[7rem] text-center px-[1rem] border-r border-black"></div>
                  <div className="w-[7rem] text-center px-[1rem]"></div>
                </div>
                <div className="flex border-x border-b border-black">
                  <div className="w-[3.5rem] text-center border-r border-black">
                    SMT1
                  </div>
                  <div className="w-[3.5rem] text-center border-r border-black">
                    SMT2
                  </div>
                  <div className="w-[3.5rem] text-center border-r border-black">
                    SMT3
                  </div>
                  <div className="w-[3.5rem] text-center border-r border-black">
                    SMT4
                  </div>
                  <div className="w-[3.5rem] text-center border-r border-black">
                    SMT5
                  </div>
                  <div className="w-[3.5rem] text-center">SMT6</div>
                </div>
                <div className="flex border-x border-b border-black">
                  <div className="w-[3.5rem] text-center border-r border-black">
                    39 kg
                  </div>
                  <div className="w-[3.5rem] text-center border-r border-black"></div>
                  <div className="w-[3.5rem] text-center border-r border-black"></div>
                  <div className="w-[3.5rem] text-center border-r border-black"></div>
                  <div className="w-[3.5rem] text-center border-r border-black"></div>
                  <div className="w-[3.5rem] text-center"></div>
                </div>
                <div className="flex border-x border-b border-black">
                  <div className="w-[3.5rem] text-center border-r border-black">
                    140 cm
                  </div>
                  <div className="w-[3.5rem] text-center border-r border-black"></div>
                  <div className="w-[3.5rem] text-center border-r border-black"></div>
                  <div className="w-[3.5rem] text-center border-r border-black"></div>
                  <div className="w-[3.5rem] text-center border-r border-black"></div>
                  <div className="w-[3.5rem] text-center"></div>
                </div>
              </div>
            </div>
          </div>
          {/* KETERANGAN TENTANG PENIDIKAN */}
          <div className="pt-[1rem]">
            <p className="text-[.9rem] font-bold">
              D. KETERANGAN TENTANG PENDIDIKAN
            </p>
            <div className="pl-[1rem] font-medium">
              <div className=" flex flex-row">
                <p className="basis-1/12">21.</p>
                <p className="basis-6/12 md:basis-7/12">
                  Pendidikan sebelumnya
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="ml-[2.5rem]">
                <div className="flex flex-row">
                  <p className="basis-1/12">a.</p>
                  <p className="basis-6/12 md:basis-[5rem]/12">Asal Murid</p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-5/12 md:basis-9/12">123123123</p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-1/12">b.</p>
                  <p className="basis-6/12 md:basis-[5rem]/12">
                    Nama Taman Kanak-Kanak
                  </p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-5/12 md:basis-9/12">123123123</p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-1/12">c.</p>
                  <p className="basis-6/12 md:basis-[5rem]/12">Alamat</p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-5/12 md:basis-9/12">123123123</p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-1/12">d.</p>
                  <p className="basis-6/12 md:basis-[5rem]/12">
                    Tanggal dan Nomor STTB
                  </p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-5/12 md:basis-9/12">123123123</p>
                </div>
              </div>
            </div>
            <div className="pl-[1rem] font-medium">
              <div className=" flex flex-row">
                <p className="basis-1/12">22.</p>
                <p className="basis-6/12 md:basis-7/12">
                  Pindahan dari sekolah lian
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="ml-[2.5rem]">
                <div className="flex flex-row">
                  <p className="basis-1/12">a.</p>
                  <p className="basis-6/12 md:basis-[5rem]/12">
                    Nama Sekolah Asal
                  </p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-5/12 md:basis-9/12">123123123</p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-1/12">b.</p>
                  <p className="basis-6/12 md:basis-[5rem]/12">
                    Dari Tingkat / kelas
                  </p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-5/12 md:basis-9/12">123123123</p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-1/12">c.</p>
                  <p className="basis-6/12 md:basis-[5rem]/12">NISN</p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-5/12 md:basis-9/12">123123123</p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-1/12">d.</p>
                  <p className="basis-6/12 md:basis-[5rem]/12">Alasan Pindah</p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-5/12 md:basis-9/12">123123123</p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-1/12">e.</p>
                  <p className="basis-6/12 md:basis-[5rem]/12">
                    Diterima di sekolah ini
                  </p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-5/12 md:basis-9/12">123123123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* thirt page */}
      <div className="h-[68.5rem] pt-[2rem] px-[2rem]">
        {/* KETERANGAN TENTANG AYAH */}
        <div className="pt-[1rem]">
          <p className="text-[.9rem] font-bold">
            E. KETERANGAN TENTANG AYAH KANDUNG
          </p>
          <div className="pl-[1rem] font-medium">
            <div className=" flex flex-row">
              <p className="basis-1/12">24.</p>
              <p className="basis-6/12 md:basis-7/12">Nama</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">25.</p>
              <p className="basis-6/12 md:basis-7/12">Tahun Lahir</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">26.</p>
              <p className="basis-6/12 md:basis-7/12">Agama</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">27.</p>
              <p className="basis-6/12 md:basis-7/12">Pendidikan</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">28.</p>
              <p className="basis-6/12 md:basis-7/12">Pekerjaan</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
          </div>
        </div>
        {/* KETERANGAN TENTANG IBU */}
        <div className="pt-[1rem]">
          <p className="text-[.9rem] font-bold">F. KETERANGAN TENTANG IBU</p>
          <div className="pl-[1rem] font-medium">
            <div className=" flex flex-row">
              <p className="basis-1/12">29.</p>
              <p className="basis-6/12 md:basis-7/12">Nama</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">30.</p>
              <p className="basis-6/12 md:basis-7/12">Tahun Lahir</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">31.</p>
              <p className="basis-6/12 md:basis-7/12">Agama</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">32.</p>
              <p className="basis-6/12 md:basis-7/12">Pendidikan</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">33.</p>
              <p className="basis-6/12 md:basis-7/12">Pekerjaan</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
          </div>
        </div>
        {/* KETERANGAN TENTANG WALI */}
        <div className="pt-[1rem]">
          <p className="text-[.9rem] font-bold">G. KETERANGAN TENTANG WALI</p>
          <div className="pl-[1rem] font-medium">
            <div className=" flex flex-row">
              <p className="basis-1/12">34.</p>
              <p className="basis-6/12 md:basis-7/12">Nama</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">35.</p>
              <p className="basis-6/12 md:basis-7/12">Tahun Lahir</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">36.</p>
              <p className="basis-6/12 md:basis-7/12">Agama</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">37.</p>
              <p className="basis-6/12 md:basis-7/12">Pendidikan</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">38.</p>
              <p className="basis-6/12 md:basis-7/12">Pekerjaan</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">39.</p>
              <p className="basis-6/12 md:basis-7/12">
                Alamat Rumah. Nomor Telp.
              </p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">40.</p>
              <p className="basis-6/12 md:basis-7/12">Hubungan Keluarga</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
          </div>
        </div>
        {/* KETERANGAN PERKEMBANGAN PESERTA DIDIK */}
        <div className="pt-[1rem]">
          <p className="text-[.9rem] font-bold">
            H. KETERANGAN PERKEMBANGAN PESERTA DIDIK
          </p>
          <div className="pl-[1rem] font-medium">
            <div className=" flex flex-row">
              <p className="basis-1/12">41.</p>
              <p className="basis-6/12 md:basis-7/12">Menerima beasiswa</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>

            <div className="flex flex-row ml-[2.5rem]">
              <p className="basis-12/12">
                Tahun ............. /Kelas ..... dari
                ...........................................................
              </p>
            </div>
            <div className="flex flex-row ml-[2.5rem]">
              <p className="basis-12/12">
                Tahun ............. /Kelas ..... dari
                ...........................................................
              </p>
            </div>
            <div className="flex flex-row ml-[2.5rem]">
              <p className="basis-12/12">
                Tahun ............. /Kelas ..... dari
                ...........................................................
              </p>
            </div>
            <div className="flex flex-row ml-[2.5rem]">
              <p className="basis-12/12">
                Tahun ............. /Kelas ..... dari
                ...........................................................
              </p>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">42.</p>
              <p className="basis-6/12 md:basis-7/12">Meninggalkan sekolah</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="ml-[2.5rem]">
              <div className="flex flex-row">
                <p className="basis-1/12">a.</p>
                <p className="basis-6/12 md:basis-[5rem]/12">
                  Tanggal meninggalkan sekolah
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">b.</p>
                <p className="basis-6/12 md:basis-[5rem]/12">
                  Kelas yang ditinggalkan
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">c.</p>
                <p className="basis-6/12 md:basis-[5rem]/12">Alasan</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">d.</p>
                <p className="basis-6/12 md:basis-[5rem]/12">
                  Sekolah yang dituju
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">e.</p>
                <p className="basis-6/12 md:basis-[5rem]/12">Kecamatan</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">f.</p>
                <p className="basis-6/12 md:basis-[5rem]/12">Kabupaten</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">g.</p>
                <p className="basis-6/12 md:basis-[5rem]/12">Profinsi</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
            </div>
            <div className="flex flex-row">
              <p className="basis-1/12">43.</p>
              <p className="basis-6/12 md:basis-7/12">Meninggalkan sekolah</p>
              <p className="basis-1/12 text-center">:</p>
              <p className="basis-5/12 md:basis-9/12">123123123</p>
            </div>
            <div className="ml-[2.5rem]">
              <div className="flex flex-row">
                <p className="basis-1/12">a.</p>
                <p className="basis-6/12 md:basis-[5rem]/12">
                  Tamat belajar / lulus tahun
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">b.</p>
                <p className="basis-6/12 md:basis-[5rem]/12">
                  Nomor ijazah / STL
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">c.</p>
                <p className="basis-6/12 md:basis-[5rem]/12">
                  Akan melanjutkan ke
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
