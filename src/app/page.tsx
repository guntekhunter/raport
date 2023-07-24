"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HomeClient from "./component/home/HomeClient";

export default function Home() {
  return (
    <div>
      <HomeClient />
    </div>
  );
}
