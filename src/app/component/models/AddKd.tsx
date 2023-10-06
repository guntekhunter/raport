import React from "react";
import Input from "../siswa/Input";

// @ts-ignore
export default function addKd({ className, callbackModal }) {
  const handleInput = () => {};
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-20 ${className}`}
    >
      <div className="p-[3rem] rounded-lg bg-white space-y-[1rem]">
        <div className="font-bold text-[1.5rem]">Tambah Konpetensi Dasar</div>
        <div className="space-y-[1rem] text-[.8rem]">
          <div>
            <p>No KD</p>
            <input className="flex justify-center text-left w-full rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem] py-2" />
          </div>
          <div>
            <p>No KD</p>
            <textarea className="flex justify-center text-left w-full rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem] py-2" />
          </div>
        </div>
        <div className="flex space-x-[1rem]">
          <button
            className="bg-[#FFF5D6] text-black w-full py-[.5rem] rounded-md hover:bg-black-200"
            onClick={() => {
              callbackModal(false);
            }}
          >
            Batal
          </button>
          <button className="bg-[#793FDF] text-white w-full py-[.5rem] rounded-md hover:bg-black-200">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
