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
  const [defaultDate, setDefaultDate] = useState("");
  const [absens, setAbsens] = useState([]);
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
          `http://localhost:3000/api/absens?user_id=${parsedId}&subject=${subject}&mounth=${mounth}`
        );
        setAbsens(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudents();
  }, [mounth, subject]);

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

  useEffect(() => {
    const monthNameToNumber = (month: string | number) => {
      const monthNames: { [key: string]: string } = {
        Januari: "01",
        Februai: "02",
        Maret: "03",
        April: "04",
        Mey: "05",
        Juni: "06",
        Juli: "07",
        Augustus: "08",
        September: "09",
        Oktober: "10",
        November: "11",
        Desember: "12",
      };

      return monthNames[month as string] || null;
    };
    const monthNumber = monthNameToNumber(mounth as string);
    console.log(monthNumber);
    console.log(mounth);
    const today = new Date();
    const currentYear = today.getFullYear();
    const defaultOctoberDate = `${currentYear}-${monthNumber}-01`;
    setDefaultDate(defaultOctoberDate);
  }, [mounth]);

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
                <th className="px-6 py-3 text-left font-medium text-[.8rem] text-white ">
                  {absens.length === 0 ? (
                    <div className="bg-gray-200 px-[.5rem] py-[.5rem] rounded-md text-gray-400">
                      tambah
                    </div>
                  ) : (
                    <input
                      type="date"
                      className="bg-[#793FDF] px-[.5rem] py-[.5rem] rounded-md"
                      value={defaultDate}
                      onChange={(e) => setDefaultDate(e.target.value)}
                    />
                  )}
                </th>
              </tr>
            </thead>
            {absens?.map((item: any, key) => (
              <tbody key={key} className="bg-white divide-y divide-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">{key + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.students.nama_lengkap}
                </td>
                {date.length !== 0 ? (
                  <td className="px-6 py-4 whitespace-nowrap flex space-x-5">
                    <div className="rounded-full bg-green-200 w-[1.7rem] h-[1.7rem] flex justify-around items-center border-green-400 border-[1.5px] text-green-400 border">
                      H
                    </div>
                    <div className="rounded-full bg-blue-200 w-[1.7rem] h-[1.7rem] flex justify-around items-center border-blue-400 border-[1.5px] text-blue-400 border">
                      I
                    </div>
                    <div className="rounded-full bg-yellow-200 w-[1.7rem] h-[1.7rem] flex justify-around items-center border-yellow-400 border-[1.5px] text-yellow-400 border">
                      S
                    </div>
                    <div className="rounded-full bg-red-200 w-[1.7rem] h-[1.7rem] flex justify-around items-center border-red-400 border-[1.5px] text-red-400 border">
                      A
                    </div>
                  </td>
                ) : (
                  <></>
                )}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
