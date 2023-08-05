"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";

export default function HomeClient() {
  const [isDrop, setIsDrop] = useState(false);
  const [guru, setGuru] = useState("");
  const [nip, setNip] = useState("");
  const [kelasAngka, setKelasAngka] = useState("");
  const [kelasHuruf, setKelasHuruf] = useState("");

  const route = useRouter();

  const dropDown = () => {
    setIsDrop(!isDrop);
  };

  return (
    <div className="flex justify-around py-[2rem] bg-gray-50 h-[100vh]">
      <div className="w-[80%] rounded-md px-[3.5rem] py-[1.5rem] border-[1.5px] border-gray-200 bg-white h-[20rem]">
        <div className="flex justify-between py-[1rem] border-b-[1.5px]">
          <div>Guru Kelas</div>
          <input
            value={guru}
            placeholder="Salsul Rijal S.Pt"
            className="flex justify-center text-center"
          />
        </div>
        <div className="flex justify-between py-[1rem] border-b-[1.5px]">
          <div>NIP</div>
          <input
            value={nip}
            placeholder="1829040023"
            className="flex justify-center text-center"
          />
        </div>
        <div className="flex justify-between py-[1rem] border-b-[1.5px]">
          <div>Kelas</div>
          <input
            value={kelasAngka}
            className="w-[1rem] flex justify-center text-center"
            placeholder="II"
          />
          <input
            value={kelasHuruf}
            className="w-[1rem] flex justify-center text-center"
            placeholder="A"
          />
        </div>
        <div className="flex justify-between py-[1rem]">
          <div>Semester</div>
          <div className="relative">
            <button
              className="flex rounded-md transition-all duration-300"
              onClick={dropDown}
            >
              <p>Ganjil</p>
            </button>
            <div
              className={`absolute bg-white right-0 rounded-md shadow-md top-[2.5rem] ${
                isDrop ? "block" : "hidden"
              }`}
            >
              <p className="hover:bg-gray-200 w-full px-[1rem] h-full p-[.2rem]">
                Ganjil
              </p>
              <p className="hover:bg-gray-200 w-full px-[1rem] h-full p-[.2rem]">
                Genap
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
