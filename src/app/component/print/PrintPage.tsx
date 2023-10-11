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
              <div className=" flex flex-row">
                <p className="basis-1/12">1.</p>
                <p className="basis-6/12 md:basis-5/12">
                  Nama Lengkap Peserta Didik
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">2.</p>
                <p className="basis-6/12 md:basis-5/12">Nama Panggilan</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">3.</p>
                <p className="basis-6/12 md:basis-5/12">Jenis Kelamin</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">4.</p>
                <p className="basis-6/12 md:basis-5/12">Tempat Tanggal Lahir</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">5.</p>
                <p className="basis-6/12 md:basis-5/12">Agama</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">6.</p>
                <p className="basis-6/12 md:basis-5/12">Kewarga Negaraan</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">7.</p>
                <p className="basis-6/12 md:basis-5/12">Anak Keberapa</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">8.</p>
                <p className="basis-6/12 md:basis-5/12">
                  Jumlah Saudara Kandung
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">9.</p>
                <p className="basis-6/12 md:basis-5/12">Jumlah Sadara Tiri</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">10.</p>
                <p className="basis-6/12 md:basis-5/12">
                  Jumlah Saudara Angkat
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">11.</p>
                <p className="basis-6/12 md:basis-5/12">
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
                <p className="basis-6/12 md:basis-5/12">Alamat</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">13.</p>
                <p className="basis-6/12 md:basis-5/12">No. Telpon/ HP</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">14.</p>
                <p className="basis-6/12 md:basis-5/12">
                  Bertempat tinggal pada/bersama
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">15.</p>
                <p className="basis-6/12 md:basis-5/12">
                  Jarak tempat tinggal ke sekolah
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
            </div>
          </div>
          {/* KETERANGAN TENTANG KESEHATAN */}
          <div className="pt-[1rem]">
            <p className="text-[.9rem] font-bold">
              C. KETERANGAN TENTANG KESEHATAN
            </p>
            <div className="pl-[1rem] font-medium">
              <div className="flex flex-row">
                <p className="basis-1/12">16.</p>
                <p className="basis-6/12 md:basis-5/12">Golongan darah</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">17.</p>
                <p className="basis-6/12 md:basis-5/12">
                  Penyakit yang pernah diderita
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">18.</p>
                <p className="basis-6/12 md:basis-5/12">Kelainan jasmani</p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">19.</p>
                <p className="basis-6/12 md:basis-5/12">
                  Tinggi dan berat badan saat diterima
                </p>
                <p className="basis-1/12 text-center">:</p>
                <p className="basis-5/12 md:basis-9/12">123123123</p>
              </div>
              <div className="flex flex-row">
                <p className="basis-1/12">20.</p>
                <p className="basis-6/12 md:basis-5/12">Keadaan jasmani</p>
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
