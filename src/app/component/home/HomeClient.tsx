"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import DropDown from "./DropDown";
import axios from "axios";

export default function HomeClient() {
  const [guru, setGuru] = useState("");
  const [nip, setNip] = useState("");
  const [kelasAngka, setKelasAngka] = useState("");
  const [kelasHuruf, setKelasHuruf] = useState("");

  const route = useRouter();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("/api/main-data");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <div className="flex justify-around py-[2rem] bg-gray-50">
      <div className="w-[80%] flex justify-between">
        <div className="w-[50%] rounded-md px-[3.5rem] py-[1.5rem] border-[1.5px] border-gray-200 bg-white">
          <div className="flex justify-between py-[1rem] border-b-[1.5px]">
            <div>Guru Kelas</div>
            <input
              onChange={(e) => {
                setGuru(e.target.value);
              }}
              value={guru}
              placeholder="Salsul Rijal S.Pt"
              className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
            />
          </div>
          <div className="flex justify-between py-[1rem] border-b-[1.5px]">
            <div>NIP</div>
            <input
              value={nip}
              onChange={(e) => {
                setNip(e.target.value);
              }}
              placeholder="1829040023"
              className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
            />
          </div>
          <div className="flex justify-between py-[1rem] border-b-[1.5px]">
            <div>Kelas</div>
            <DropDown title="II" drop={["I", "II", "III", "IV", "V", "VI"]} />
          </div>
          <div className="flex justify-between py-[1rem]">
            <div>Semester</div>
            <DropDown title="Ganjil" drop={["Ganjil", "Genap"]} />
          </div>
          <div>
            <button className="bg-black w-full py-[1rem] rounded-md mb-[2rem] text-white mt-[2rem] hover:bg-black-200">
              Simpan Perubahan
            </button>
          </div>
        </div>
        <div className="w-[47%] rounded-md px-[3.5rem] py-[1.5rem] border-[1.5px] border-gray-200 bg-white "></div>
      </div>
    </div>
  );
}
