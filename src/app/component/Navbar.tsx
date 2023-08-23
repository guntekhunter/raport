"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

export default function Navbar() {
  const [isDrop, setIsDrop] = useState(false);

  const route = useRouter();

  const pathname = usePathname();

  const handleDrop = () => {
    setIsDrop(!isDrop);
  };

  const logout = () => {
    setIsDrop(!isDrop);
    Cookies.remove("token");
    Cookies.remove("user id");
    route.push("/");
  };

  return (
    <div
      className={`${
        pathname === "/" ? "hidden" : ""
      } py-[.8rem] flex justify-around bg-white border-b-[1px] sticky top-0 inset-0 bg-white bg-opacity-90 backdrop-filter backdrop-blur-md z-10`}
    >
      <div className="w-[80%] flex justify-between">
        <div className="flex space-x-[2rem]">
          <p className="font-bold flex items-center">RAPORT</p>
          <div className="flex items-center space-x-[2rem]">
            <Link
              href="/member"
              className="cursor-pointer transform duration-200 ease-in px-[1rem] hover:shadow-md rounded-md"
            >
              Dashboard
            </Link>
            <Link
              href="/siswa"
              className="cursor-pointer transform duration-200 ease-in px-[1rem] hover:shadow-md rounded-md"
            >
              Siswa
            </Link>
            <Link
              href="/absen"
              className="cursor-pointer transform duration-200 ease-in px-[1rem] hover:shadow-md rounded-md"
            >
              Absen
            </Link>
            <Link
              href="/"
              className="cursor-pointer transform duration-200 ease-in px-[1rem] hover:shadow-md rounded-md"
            >
              Nilai
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-[1rem]">
          <p>ommaleka</p>
          <button
            className="w-[2rem] h-[2rem] bg-black rounded-full"
            onClick={handleDrop}
          />
          <button
            className={`${
              isDrop ? "" : "hidden"
            } absolute top-[4rem] right-[10%] px-[1rem] py-[.3rem] rounded-md shadow-md hover:bg-gray-100`}
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
