"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import DropDownAbsen from "../absen/dropDownAbsen";
import AddKd from "../models/AddKd";

export default function Nilai() {
  const [isActive, setIsActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [kd, setKd] = useState([]);
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [defaultkd, setDefaultkd] = useState("");
  const [nilaiSiswa, setNilaiSiswa] = useState([]);
  const [nilai, setNilai] = useState([]);
  const [scor, setScor] = useState("");
  const [userId, setUserId] = useState<Number>();

  const classCallback = (item: any, name: any) => {
    if (name === "type") {
      setType(item);
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
          `http://localhost:3000/api/nilai-siswa?user_id=${parsedId}&subject=${subject}&type=${type}`
        );
        setNilaiSiswa(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudents();
  }, [type, subject]);

  useEffect(() => {
    const fetchKd = async () => {
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
          `http://localhost:3000/api/kd?user_id=${parsedId}&subject=${subject}&type=${type}`
        );
        setKd(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (subject && type) {
      fetchKd();
    }
  }, [subject, type]);

  useEffect(() => {
    const fetchNilai = async () => {
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
          `http://localhost:3000/api/nilai?user_id=${parsedId}&subject=${subject}&mounth=${type}`
        );
        setNilai(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (subject && type) {
      fetchNilai();
    }
  }, [type, subject]);

  const makeNilai = async (id_kd: number, id_nilai: number, nilai: string) => {
    try {
      const newNilai = parseInt(nilai);
      const nilaiData = {
        id_nilai,
        nilai_type: type,
        mapel: subject,
        id_kd,
        nilai: newNilai,
        user_id: userId,
      };
      const data = await axios.post(
        "http://localhost:3000/api/nilai",
        nilaiData
      );
      setNilai(data.data.dataNilai);
      setNilaiSiswa(data.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const callbackModal = (status: boolean) => {
    setModalActive(status);
  };
  const callbackData = (data: any) => {
    setKd(data.data);
  };
  return (
    <div className="flex justify-around">
      <AddKd
        className={`${modalActive ? "" : "hidden"}`}
        callbackModal={callbackModal}
        type={type}
        subject={subject}
        callbackData={callbackData}
      />
      <div className="w-[80%]">
        <div className="rounded-md py-[1rem] w-full">
          <p className="text-[1rem] font-bold">nilai</p>
        </div>
        <div className="py-[1.5rem] flex space-x-[2rem]">
          <DropDownAbsen
            star="off"
            label="Mata Pelajaran"
            name="mata pelajaran"
            title="mata pelajaran"
            isActive={isActive}
            drop={["Matematika", "Ipa", "Bahasa Indonesia"]}
            classCallback={classCallback}
          />
          <DropDownAbsen
            star="off"
            label="Tipe Penilaian"
            name="type"
            title="type"
            isActive={isActive}
            drop={["Pengetahuan", "Keterampilan"]}
            classCallback={classCallback}
          />
        </div>
        <div className="rounded-md border border-gray-300 overflow-auto scrollbar-hide">
          <table className="min-w-full divide-y divide-gray-200 rounded-md ">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium">
                  No
                </th>
                <th className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium">
                  Nama Siswa
                </th>
                {kd?.map((item: any, key) => (
                  <th
                    key={key}
                    className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium"
                  >
                    <div className="w-[10rem] pb-[.5rem]">
                      <div className="min-h-[1rem] break-words text-[.7rem] px-1">
                        {item.ket_kd}
                      </div>
                      <div className="flex justify-around pt-[.5rem]">
                        {item.no_kd}
                      </div>
                    </div>
                  </th>
                ))}
                <th className="px-6 py-3 text-left font-medium text-[.8rem] text-white ">
                  {nilaiSiswa.length === 0 ? (
                    <div className="bg-gray-200 px-[.5rem] py-[.5rem] rounded-md text-gray-400">
                      tambah
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        className="bg-primary px-[.5rem] py-[.5rem] rounded-md text-white"
                        onClick={() => setModalActive(!modalActive)}
                      >
                        tambah
                      </button>
                    </div>
                  )}
                </th>
              </tr>
            </thead>
            {nilaiSiswa?.map((item: any, nilaiIndex) => {
              let newArray: any[] = [];
              for (let i = item.nilai.length; i > 0; i--) {
                newArray.push(i - 1);
              }
              console.log(newArray);
              const isNumberInArray = (number: any) =>
                newArray.includes(number);
              return (
                <tbody
                  key={nilaiIndex}
                  className="bg-white divide-y divide-gray-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {nilaiIndex + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.students.nama_lengkap}
                  </td>

                  {kd.length !== 0 ? (
                    kd.map((kdItem: any, kdIndex: any) => {
                      const showAhhay = isNumberInArray(kdIndex);
                      return (
                        <td key={kdIndex} className="px-6 py-4 ">
                          {!showAhhay ? (
                            <div className="whitespace-nowrap flex space-x-5 justify-center flex">
                              <div className="">
                                <input
                                  onChange={(e) => setScor(e.target.value)}
                                  className="w-[2rem] rounded-md h-full flex justify-center bg-gray-200 text-center"
                                />
                              </div>
                              <button
                                className="bg-primary px-[.5rem] py-[.5rem] rounded-md text-white font-medium text-[.8rem]"
                                onClick={(e) =>
                                  makeNilai(kdItem.id, item.id, scor)
                                }
                              >
                                Tambah
                              </button>
                            </div>
                          ) : (
                            <div
                              className={`rounded-full w-[1.7rem] h-[1.7rem] flex justify-around items-center  border-[1.5px] border flex`}
                            >
                              {item.nilai[kdIndex].nilai}
                            </div>
                          )}
                        </td>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
