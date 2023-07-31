"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Title from "./Title";
import Tabel from "./Tabel";

//@ts-ignore
export default function HomeAdmin() {
  const route = useRouter();
  const handleLogout = () => {
    route.push("/login");
  };
  return (
    <div className="flex justify-around">
      <div className="w-[80%]">
        <div className=" py-[2rem] space-y-[1rem]">
          <Title>Buat User Baru</Title>
          <div className="space-y-[1rem]">
            <div className="w-full flex justify-between">
              <div>
                <p className="text-[.9rem]">Email</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem] w-[20rem]"
                  type="text"
                  autoComplete="off"
                  // onChange={(e: any) => {
                  //   setEmail(e.target.value);
                  // }}
                />
              </div>
              <div>
                <p className="text-[.9rem]">Name</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem] w-[20rem]"
                  type="text"
                  autoComplete="off"
                  // onChange={(e: any) => {
                  //   setEmail(e.target.value);
                  // }}
                />
              </div>
              <div>
                <p className="text-[.9rem]">Password</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem] w-[20rem]"
                  type="text"
                  autoComplete="off"
                  // onChange={(e: any) => {
                  //   setEmail(e.target.value);
                  // }}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-[2rem] py-[.5rem] bg-blue-400 rounded-md text-white"
          >
            Logout
          </button>
        </div>

        <Tabel />
      </div>
    </div>
  );
}
