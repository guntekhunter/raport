"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddSiswa from "../models/AddSiswa";
import Cookies from "js-cookie";
import Link from "next/link";
import axios from "axios";

export default function Siswa() {
  const [isActive, setIsActive] = useState(false);
  const [studentsData, setStudentsData] = useState([]);

  const modalActive = () => {
    setIsActive(!isActive);
  };

  const handleDelete = async (id: number) => {
    try {
      const idUser = Cookies.get("user id");
      const siswa = await axios.delete(
        `http://localhost:3000/api/siswa?id=${id}&id_user=${idUser}`
      );
      setStudentsData(siswa.data.data);
      console.log(siswa);
    } catch (err) {
      console.log(err);
    }
  };

  const callbackActive = async (active: boolean) => {
    setIsActive(active);
  };

  const fetchSiswa = async () => {
    try {
      const id = Cookies.get("user id");
      const siswa = await axios.get(
        `http://localhost:3000/api/siswa?id_user=${id}`
      );
      setStudentsData(siswa.data.students);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSiswa();
  }, []);

  return (
    <div className="flex justify-around relative">
      <AddSiswa
        callbackActive={callbackActive}
        className={`${isActive ? "" : "hidden"}`}
      />
      <div className="w-[80%] py-[2rem]">
        <Link
          href="/new-siswa"
          className="bg-[#793FDF] rounded-md text-white px-[2rem] py-[.5rem]"
        >
          Tambah Siswa
        </Link>
        <div className="rounded-md py-[1rem] w-full">
          <p className="text-[1rem] font-bold">SISWA</p>
        </div>
        <div className="rounded-md border border-gray-300 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 rounded-md overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium">
                  No
                </th>
                <th className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium">
                  Nama Lengkap
                </th>
                <th className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium">
                  Tempat Tanggal Lahir
                </th>
                <th className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium">
                  Orang Tua/Wali
                </th>
                <th className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium">
                  NISN
                </th>
                <th className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium">
                  Edit/Hapus
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {studentsData?.map((item: any, key) => (
                <tr key={key}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.nisn}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.nama_lengkap}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.tempat_tanggal_lahir}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.nama_wali}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.nisn}</td>
                  <td className="px-6 py-4 whitespace-no-wrap flex justify-between py-[1rem]">
                    <button
                      className="p-[.5rem] bg-red-200 border-red-300 border-[1.3px] rounded-md"
                      onClick={(e) => handleDelete(item.id)}
                    >
                      <Image
                        src="/delete.png"
                        alt=""
                        width={500}
                        height={500}
                        className="w-4"
                      />
                    </button>
                    <div className="p-[.5rem] bg-green-200 border-green-300 border-[1.3px] rounded-md">
                      <Image
                        src="/editing.png"
                        alt=""
                        width={500}
                        height={500}
                        className="w-4"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="rounded-md border-[1.5px] border-gray-200 bg-whitepy-[1rem] border-b-[1.5px] w-full ">
          <div className="bg-[#F5F5F5] px-[2rem] flex justify-between">
            <div>Nama</div>
            <div>Kelas</div>
            <div></div>
          </div>
          <div className="">ahhay</div>
        </div> */}
      </div>
    </div>
  );
}
