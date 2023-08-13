"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import DropDown from "./DropDown";
import axios from "axios";

interface DataItem {
  guru: string;
  nip: string;
  grade: string;
  semester: string;
}

export default function HomeClient() {
  const [guru, setGuru] = useState("");
  const [nip, setNip] = useState("");
  const [grade, setGrade] = useState("");
  const [semester, setSemester] = useState("");
  const [data, setData] = useState<DataItem[]>([]);
  const [buttonActive, setButtonActive] = useState(false);

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
        const res = await axios.get("/api/main-data?id_user=1");
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  const save = () => {
    const newData = {
      guru: guru,
      nip: nip,
      grade: grade,
      semester: semester,
    };

    setData([newData]);
    setGuru("");
    setNip("");
    setGrade("");
    setSemester("");
    setButtonActive(false);
  };

  console.log(data);

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
                setNip(e.target.value), setButtonActive(true);
              }}
              placeholder="1829040023"
              className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200"
            />
          </div>
          <div className="flex justify-between py-[1rem] border-b-[1.5px]">
            <div>Kelas</div>
            <DropDown
              name="kelas"
              title="II"
              drop={["I", "II", "III", "IV", "V", "VI"]}
              classCallback={classCallback}
            />
          </div>
          <div className="flex justify-between py-[1rem]">
            <div>Semester</div>
            <DropDown
              name="semester"
              title="Ganjil"
              drop={["Ganjil", "Genap"]}
              classCallback={classCallback}
            />
          </div>
          <div>
            <button
              className={` w-full py-[1rem] rounded-md mb-[2rem] text-white mt-[2rem] hover:bg-black-200 ${
                buttonActive
                  ? "bg-black"
                  : "bg-gray-100 border-[1.5px] border-gray-300 text-gray-300"
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
