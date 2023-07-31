"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const route = useRouter();

  const loginHandler = async () => {
    try {
      if (!email || !password) {
        setButtonDisabled(true);
      }
      setIsLoading(true);
      const res = await axios.post("/api/login", {
        email: email,
        password: password,
      });
      if (res.status && res.data.user.isAdmin) {
        route.push("/");
      } else {
        route.push("/member");
      }
    } catch (error: any) {
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-[4rem] space-y-[1rem] w-[30rem] rounded-md shadow-md bg-white">
        <p className="flex justify-center font-bold">LOGIN</p>
        <div className="w-full space-y-2">
          <p className="text-[.9rem]">Email</p>
          <input
            className="w-full h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
            type="text"
            autoComplete="off"
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="space-y-2">
          <p className="text-[.9rem]">Password</p>
          <div>
            <input
              className="w-full h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
              type="password"
              autoComplete="off"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
            <Image src="" alt="" />
          </div>
        </div>
        <div
          className={`bg-red-200 h-[2rem] flex items-center pl-4 rounded-md border-[1.4px] border-red-300 ${
            error ? "" : "hidden"
          }`}
        >
          <p className={`text-[.8rem] text-red-500 ${error ? "" : "hidden"}`}>
            {error}
          </p>
        </div>
        <div className="flex justify-around pt-[1rem]">
          <button
            onClick={loginHandler}
            className="px-[1rem] rounded-md bg-blue-400 text-white w-full h-[2rem] hover:bg-blue-300 flex justify-around items-center"
          >
            {isLoading ? (
              <Image
                width={500}
                height={500}
                src="/spinner-of-dots.png"
                alt=""
                className="animate-spin w-[1rem] invert"
              />
            ) : (
              <p>Login</p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
