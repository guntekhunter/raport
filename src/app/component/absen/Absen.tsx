"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import DropDownSiswa from "../siswa/DropDownSiswa";
import DropDownAbsen from "./dropDownAbsen";

export default function Absen() {
  const [isActive, setIsActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [date, setDate] = useState([]);
  const [mounth, setMount] = useState("");
  const [subject, setSubject] = useState("");
  const [userId, setUserId] = useState<Number>();

  const classCallback = (item: any, name: any) => {
    if (name === "bulan") {
      setMount(item);
    } else if (name === "mata pelajaran") {
      setSubject(item);
    }
    setButtonActive(true);
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const user = Cookies.get("user id");
        let parsedId = 0;
        if (user !== undefined) {
          parsedId = parseInt(user); // Parsing the user ID to an integer
          setUserId(parsedId);
        } else {
          console.log("User ID not found in localStorage");
        }
        const data = await axios.get(
          `http://localhost:3000/api/siswa?id_user=${parsedId}`
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const user = Cookies.get("user id");
        let parsedId = 0;
        if (user !== undefined) {
          parsedId = parseInt(user); // Parsing the user ID to an integer
          setUserId(parsedId);
        } else {
          console.log("User ID not found in localStorage");
        }
        const data = await axios.get(
          `http://localhost:3000/api/date?user_id=${parsedId}&subject=${subject}&mounth=${mounth}`
        );
        console.log(data);
        setDate(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (subject && mounth) {
      fetchDate();
    }
  }, [subject, mounth]);

  const formatDate = (dateString: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };

    const date = new Date(dateString);
    const [weekday, day, month] = date
      .toLocaleDateString("id-ID", options)
      .split(" ");

    return `${weekday}/${day}/${month}`;
  };

  return (
    <div className="flex justify-around relative">
      <div className="w-[80%]">
        <div className="rounded-md py-[1rem] w-full">
          <p className="text-[1rem] font-bold">ABSEN</p>
        </div>
        <div className="py-[1.5rem] flex space-x-[2rem]">
          <DropDownAbsen
            star="off"
            label="Bulan"
            name="bulan"
            title="bulan"
            isActive={isActive}
            drop={[
              "Januari",
              "Februari",
              "Maret",
              "April",
              "Mei",
              "Juni",
              "Juli",
              "Agustus",
              "September",
              "Oktober",
              "November",
              "Desember",
            ]}
            classCallback={classCallback}
          />
          <DropDownAbsen
            star="off"
            label="Mata Pelajaran"
            name="mata pelajaran"
            title="mata pelajaran"
            isActive={isActive}
            drop={["Matematika", "Ipa", "Bahasa Indonesia"]}
            classCallback={classCallback}
          />
        </div>
        <div className="rounded-md border border-gray-300 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 rounded-md overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium">
                  No
                </th>
                <th className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium">
                  Nama Siswa
                </th>
                {date?.map((item: any, key) => {
                  const formattedDate = formatDate(item.date);

                  return (
                    <th
                      key={key}
                      className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium"
                    >
                      {formattedDate}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* {studentsData?.map((item: any, key) => ( */}
              {/* <tr>
                <td className="px-6 py-4 whitespace-nowrap">1231</td>
                <td className="px-6 py-4 whitespace-nowrap">asdasd</td>
                <td className="px-6 py-4 whitespace-nowrap">123123</td>
                <td className="px-6 py-4 whitespace-nowrap">123123</td>
                <td className="px-6 py-4 whitespace-nowrap">123123123</td>
                <td className="px-6 py-4 whitespace-no-wrap flex justify-between py-[1rem]">
                  <button
                    className="p-[.5rem] bg-red-200 border-red-300 border-[1.3px] rounded-md"
                    // onClick={(e) => handleDelete(item.id)}
                  >
                    <Image
                      src="/delete.png"
                      alt=""
                      width={500}
                      height={500}
                      className="w-4"
                    />
                  </button>
                  <div className="p-[.5rem] bg-green-200 border-green-300 border-[1.3px] rounded-md">
                    <Image
                      src="/editing.png"
                      alt=""
                      width={500}
                      height={500}
                      className="w-4"
                    />
                  </div>
                </td>
              </tr> */}
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
