"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      className={`${
        pathname === "/login" ? "hidden" : ""
      } py-[.8rem] flex justify-around bg-white shadow-md`}
    >
      <div className="w-[80%] flex justify-between">
        <p className="font-bold flex items-center">RAPORT</p>
        <div className="flex items-center space-x-[1rem]">
          <p>ommaleka</p>
          <div className="w-[2rem] h-[2rem] bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
}
