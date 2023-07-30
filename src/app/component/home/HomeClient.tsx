"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function HomeClient() {
  const route = useRouter();
  const handleLogout = () => {
    route.push("/login");
  };
  return (
    <div className="flex justify-around bg-yellow-200">
      <h1>Selamat Datang di Welcome member</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
