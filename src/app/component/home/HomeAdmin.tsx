"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import Tabel from "./Tabel";
import axios from "axios";
import AddUser from "../models/AddUser";
import Image from "next/image";
import { Users } from "../../../../typings";
import DeleteUser from "../models/DeleteUser";

//@ts-ignore
export default function HomeAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [addSuccess, setAddSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const route = useRouter();

  const createUser = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/signup", {
        email,
        name,
        password,
        isAdmin: false,
      });
      setAddSuccess(true);
      console.log(res);
      setTimeout(() => {
        setAddSuccess(false);
      }, 3000);
      setUsers(res.data.users);
      console.log(res.data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleLogout = () => {
    route.push("/login");
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("/api/users");
        setUsers(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const callbackDelete = async (deleted: boolean, users: any) => {
    setIsDeleted(deleted);
    setUsers(users);
  };
  return (
    <div className="flex justify-around">
      <AddUser className={`${addSuccess ? "" : "hidden"}`} />
      <DeleteUser className={`${isDeleted ? "" : "hidden"}`} />
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
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <p className="text-[.9rem]">Name</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem] w-[20rem]"
                  type="text"
                  autoComplete="off"
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <p className="text-[.9rem]">Password</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem] w-[20rem]"
                  type="text"
                  autoComplete="off"
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <button
            onClick={createUser}
            className="px-[2rem] py-[.5rem] bg-blue-400 rounded-md text-white h-[2.5rem] w-[6rem] flex justify-around items-center  "
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
              <p>Add</p>
            )}
          </button>
          <button
            onClick={handleLogout}
            className="px-[2rem] py-[.5rem] bg-blue-400 rounded-md text-white"
          >
            Logout
          </button>
        </div>

        <Tabel users={users} callback={callbackDelete} />
      </div>
    </div>
  );
}
