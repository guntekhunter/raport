import { useRouter } from "next/navigation";
import React from "react";

export default function HomeClient() {
  const route = useRouter();
  const handleLogout = () => {
    route.push("/login");
  };
  return (
    <div>
      <h1>Selamat Datang di Welcome</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
