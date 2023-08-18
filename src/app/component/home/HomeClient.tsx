"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
import axios from "axios";
import Cookies from "js-cookie";

interface DataItem {
  guru: string;
  nip: number;
  grade: string;
  semester: string;
}

export default function HomeClient() {
  const [guru, setGuru] = useState("");
  const [nip, setNip] = useState<number>(0);
  const [grade, setGrade] = useState("I");
  const [semester, setSemester] = useState("Genap");
  const [data, setData] = useState<DataItem[]>([]);
  const [buttonActive, setButtonActive] = useState(false);
  const [userId, setUserId] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [id, setId] = useState(0);

  const route = useRouter();

  const classCallback = (item: any, name: any) => {
    setButtonActive(true);
    if (name === "kelas") {
      setGrade(item);
    }
    if (name === "semester") {
      setSemester(item);
    }
  };
  console.log(grade, semester);

  useEffect(() => {
    const fetch = async () => {
      try {
        const id = Cookies.get("user id");

        let parsedId = 0;
        if (id !== undefined) {
          parsedId = parseInt(id); // Parsing the user ID to an integer
          setUserId(parsedId);
        } else {
          console.log("User ID not found in localStorage");
        }
        const res = await axios.get(`/api/main-data?id_user=${parsedId}`);
        console.log(res.data.data);
        if (res.data.data === null) {
          setIsActive(!isActive);
        } else {
          setIsActive(true);
        }
        setData(res.data.data);
        setGuru(res.data.data.guru_kelas);
        setGrade(res.data.data.kelas_angka);
        setSemester(res.data.data.semester);
        setNip(res.data.data.nip);
        setUserId(res.data.data.id_user);
        setId(res.data.data.id);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  const save = async () => {
    if (buttonActive) {
      const newData = {
        guru: guru,
        nip: nip,
        grade: grade,
        semester: semester,
      };

      if (data === null) {
        try {
          console.log(newData);
          const res = await axios.post("/api/main-data", {
            guru_kelas: guru,
            nip: nip,
            kelas_angka: grade,
            semester: semester,
            id_user: userId,
            kelas_huruf: "A",
          });
          setData(res.data.newData);
          setGuru(res.data.newData.guru_kelas);
          setGrade(res.data.newData.kelas_angka);
          setSemester(res.data.newData.semester);
          setNip(res.data.newData.nip);
          setUserId(res.data.newData.id_user);
          setId(res.data.newData.id);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const res = await axios.put(`/api/main-data?id=${id}`, {
            guru_kelas: guru,
            nip: nip,
            kelas_angka: grade,
            semester: semester,
            id_user: userId,
            kelas_huruf: "A",
          });
          console.log("ini dia", res.data.dataUpdated.guru_kelas);
          // setData(res.data.dataUpdated);
          // console.log(res.data.dataUpdated.kelas_angka);
          setGuru(res.data.dataUpdated.guru_kelas);
          setGrade(res.data.dataUpdated.kelas_angka);
          setSemester(res.data.dataUpdated.semester);
          setNip(res.data.dataUpdated.nip);
          setUserId(res.data.dataUpdated.id_user);
          setId(res.data.dataUpdated.id);
        } catch (error) {
          console.log(error);
        }
      }
      setData([newData]);
      setButtonActive(false);
    }
  };
  return (
    <div className="flex justify-around py-[2rem] bg-gray-50">
      <div className="w-[80%] flex justify-between">
        <div className="w-[50%] rounded-md px-[3.5rem] py-[1.5rem] border-[1.5px] border-gray-200 bg-white">
          <div className="flex justify-between py-[1rem] border-b-[1.5px]">
            <div>Guru Kelas</div>
            <input
              onChange={(e) => {
                setGuru(e.target.value), setButtonActive(true);
              }}
              value={guru}
              placeholder="Salsul Rijal S.Pt"
              className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
            />
          </div>
          <div className="flex justify-between py-[1rem] border-b-[1.5px]">
            <div>NIP</div>
            <input
              value={nip}
              onChange={(e) => {
                setNip(Number(e.target.value)), setButtonActive(true);
              }}
              placeholder="1829040023"
              className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200"
            />
          </div>
          <div className="flex justify-between py-[1rem] border-b-[1.5px]">
            <div>Kelas</div>
            <DropDown
              name="kelas"
              title={grade}
              isActive={isActive}
              drop={["I", "II", "III", "IV", "V", "VI"]}
              classCallback={classCallback}
            />
          </div>
          <div className="flex justify-between py-[1rem]">
            <div>Semester</div>
            <DropDown
              name="semester"
              title={semester}
              isActive={isActive}
              drop={["Ganjil", "Genap"]}
              classCallback={classCallback}
            />
          </div>
          <div>
            <button
              className={` w-full py-[1rem] rounded-md mb-[2rem] mt-[2rem] hover:bg-black-200 ${
                buttonActive
                  ? "bg-black text-white"
                  : "bg-gray-100 border-[1.5px] border-gray-300 text-gray-400"
              }`}
              onClick={save}
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
        <div className="w-[47%] rounded-md px-[3.5rem] py-[1.5rem] border-[1.5px] border-gray-200 bg-white "></div>
      </div>
    </div>
  );
}
