"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function HomeClient() {
  const route = useRouter();
  const handleLogout = () => {
    route.push("/login");
  };
  return (
    <div className="flex justify-around py-[2rem]">
      <div className="w-[80%] rounded-md px-[3.5rem] py-[3rem] border-[1.5px] border-gray-200">
        <div className="flex justify-between py-[1rem] border-b-[1.5px]">
          <div>Guru Kelas</div>
          <div>Samsul Rijal S.Pd</div>
        </div>
        <div className="flex justify-between py-[1rem] border-b-[1.5px]">
          <div>NIP</div>
          <div>1324592295</div>
        </div>
        <div className="flex justify-between py-[1rem] border-b-[1.5px]">
          <div>Semester</div>
          <div className="relative">
            <p>Ganjil</p>
            <div className="absolute bg-red-200 px-[1rem] py-[1rem] space-y-[.5rem] right-0">
              <p>Ganjil</p>
              <p>Genap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
