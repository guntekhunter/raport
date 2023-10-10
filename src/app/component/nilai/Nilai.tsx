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
  const [isEdit, setIsEdit] = useState(false);
  const [editableIndex, setEditableIndex] = useState<Number>();
  const [isUpdated, setIsUpdated] = useState(false);

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
  const updateNilai = async (id: Number, nilai: string) => {
    try {
      const newNilai = parseInt(nilai);
      const nilaiData = {
        nilai: newNilai,
        id,
        nilai_type: type,
        mapel: subject,
        user_id: userId,
      };
      const data = await axios.put(
        "http://localhost:3000/api/nilai",
        nilaiData
      );
      setIsUpdated(true);
      setNilai(data.data.dataNilai);
      setNilaiSiswa(data.data.data);
      setIsEdit(false);
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

  const handleDoubleClick = (e: any, id: Number) => {
    setEditableIndex(id);
    const delay = 300;
    let clickCount = e.detail;

    clickCount++;
    setTimeout(() => {
      if (clickCount === 2) {
        setIsEdit(true);
      }
    }, delay);
  };
  console.log("this is autside", nilaiSiswa);
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
            <thead className="bg-gray-50 divide-gray-200">
              <tr className="divide-x">
                <th className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium">
                  No
                </th>
                <th className="px-6 py-3 text-left text-gray-500 text-[1rem] text-sm font-medium">
                  Nama Siswa
                </th>
                {kd?.map((item: any, key) => (
                  <th
                    key={key}
                    className="text-left text-gray-500 text-[1rem] text-sm font-medium"
                  >
                    <div className="pb-[.5rem] divide-y">
                      <div className="min-h-[1rem] break-words text-[.7rem] px-2 py-2">
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
                {nilaiSiswa.length !== 0 ? (
                  <td className="px-2 py-2 text-left text-gray-500 text-sm font-medium rotate-[-90deg] transform">
                    Rerata
                  </td>
                ) : (
                  <></>
                )}
                {nilaiSiswa.length !== 0 ? (
                  <td className="px-2 py-3 text-left text-gray-500 text-sm font-medium rotate-[-90deg] transform">
                    Predikat
                  </td>
                ) : (
                  <></>
                )}
              </tr>
            </thead>
            {nilaiSiswa?.map((item: any, nilaiIndex) => {
              let sum = null;
              let newArray: any[] = [];
              let finalScore = null;
              for (let i = 0; i < item.nilai.length; i++) {
                newArray.push(i);
                if (item.nilai[i].nilai !== null) {
                  finalScore += item.nilai[i].nilai; // Add the value to the total score
                }
              }

              if (finalScore !== null && item.nilai.length > 0) {
                sum = Math.floor(finalScore / item.nilai.length);
              }

              const isNumberInArray = (number: any) =>
                newArray.includes(number);
              return (
                <tbody
                  key={nilaiIndex}
                  className="bg-white divide-y divide-gray-200 divide-x"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {nilaiIndex + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.students.nama_lengkap}
                  </td>

                  {kd.length !== 0 ? (
                    kd.map((kdItem: any, kdIndex: any) => {
                      let uniqueKey; // Declare uniqueKey variable outside the if-else block
                      let nilai;
                      if (
                        item.nilai[kdIndex] &&
                        item.nilai[kdIndex].id !== undefined &&
                        item.nilai[kdIndex].nilai !== undefined
                      ) {
                        uniqueKey = item.nilai[kdIndex].id;
                        nilai = item.nilai[kdIndex].nilai;
                        console.log(uniqueKey, nilai);
                        // Rest of your code
                      } else {
                        console.error(
                          "item.nilai[kdIndex] is undefined or id/nilai is undefined."
                        );
                      }
                      const showAhhay = isNumberInArray(kdIndex);
                      return (
                        <td key={uniqueKey} className="px-6 py-4 ">
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
                            <>
                              {isEdit &&
                              editableIndex === item.nilai[kdIndex].id ? (
                                <div className="h-[1.7rem] flex justify-center">
                                  <input
                                    onChange={(e) => setScor(e.target.value)}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter") {
                                        // Call your function here when Enter is pressed and pass the input value
                                        const target =
                                          e.target as HTMLInputElement; // Cast e.target to HTMLInputElement
                                        updateNilai(
                                          item.nilai[kdIndex].id,
                                          target.value
                                        );
                                      }
                                    }}
                                    autoFocus
                                    className={`h-[1.7rem] w-[2rem] flex justify-center text-center bg-gray-200 rounded-md`}
                                  />
                                </div>
                              ) : (
                                <button
                                  className="h-[1.7rem] flex justify-center w-full"
                                  onClick={(e) =>
                                    handleDoubleClick(e, item.nilai[kdIndex].id)
                                  }
                                >
                                  <p>{item.nilai[kdIndex].nilai}</p>
                                </button>
                              )}
                            </>
                          )}
                        </td>
                      );
                    })
                  ) : (
                    <></>
                  )}
                  <td></td>
                  <td className="">
                    <div className="h-[1.7rem] flex justify-center w-full">
                      {sum}
                    </div>
                  </td>
                  <td className="text-[.7rem] px-5 text-center">
                    <div className="h-[1.7rem] flex justify-center w-full">
                      {sum !== null
                        ? sum > 77
                          ? "Baik"
                          : sum >= 60
                          ? "Cukup Baik"
                          : "Kurang"
                        : "Sum is null"}
                    </div>
                  </td>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
