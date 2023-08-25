"use client";
import React from "react";

// @ts-ignore
export default function AddSiswa({ callbackActive, className }) {
  const cancel = () => {
    callbackActive(false);
  };
  return (
    <div
      className={`absolute w-full h-[89vh] justify-around flex z-10 py-[2rem] ${className}`}
    >
      <div className="flex justify-between rounded-md px-[3.5rem] py-[1.5rem] border-[1.5px] border-gray-200 border-b-[1.5px] bg-white w-[40rem]">
        <div className="w-full h-full">
          <p className="font-bold">Masukkan Data Siswa</p>
          
          <div className="flex justify-between w-[45%]">
            <button className="bg-[#793FDF] rounded-md text-white px-[2rem] py-[.5rem]">
              Simpan
            </button>
            <button
              className="bg-[#793FDF] rounded-md text-white px-[2rem] py-[.5rem]"
              onClick={cancel}
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
