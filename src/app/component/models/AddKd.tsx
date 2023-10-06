"use client";
import React, { useState } from "react";
import Input from "../siswa/Input";
import axios from "axios";
import Cookies from "js-cookie";

// @ts-ignore
export default function AddKd({ className, callbackModal, type, subject, callbackData }) {
  const [noKd, setNoKd] = useState("");
  const [ketKd, setKetKd] = useState("");
  const handleInput = async () => {
    try {
      const user = Cookies.get("user id");
      let parsedId = 0;
      if (user !== undefined) {
        parsedId = parseInt(user); // Parsing the user ID to an integer
      } else {
        console.log("User ID not found in localStorage");
      }
      const kdData = {
        nilai_type:type,
        mapel: subject,
        no_kd:noKd,
        ket_kd: ketKd,
        user_id: parsedId
      }
      const data = await axios.post("/api/kd", kdData)
      setNoKd("")
      setKetKd("")
      callbackData(data.data)
      callbackModal(false)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-20 ${className}`}
    >
      <div className="p-[3rem] rounded-lg bg-white space-y-[1rem]">
        <div className="font-bold text-[1.5rem]">Tambah Konpetensi Dasar</div>
        <div className="space-y-[1rem] text-[.8rem]">
          <div>
            <p>No KD</p>
            <input
              onChange={(e) => {
                setNoKd(e.target.value);
              }}
              className="flex justify-center text-left w-full rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem] py-2"
            />
          </div>
          <div>
            <p>No KD</p>
            <textarea
              onChange={(e) => {
                setKetKd(e.target.value);
              }}
              className="flex justify-center text-left w-full rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem] py-2"
            />
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
          <button onClick={handleInput} className="bg-[#793FDF] text-white w-full py-[.5rem] rounded-md hover:bg-black-200">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
