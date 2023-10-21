"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
import axios from "axios";
import Cookies from "js-cookie";
import EditMainData from "../models/EditMainData";

export default function HomeClient() {
  const [nip, setNip] = useState<number>(0);
  const [buttonActive, setButtonActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [defaultData, setDefaultData] = useState<any>([]);
  const [data, setData] = useState<any>({
    guru_kelas: "",
    nip: 0,
    kelas_angka: "",
    semester: "",
    id_user: 0,
    kelas_huruf: "",
    nama_sekolah: "",
    npsn: "",
    status_sekolah: "",
    alamat_sekolah: "",
    desa: "",
    kecamatan: "",
    kabupaten: "",
    propinsi: "",
    kepala_sekolah: "",
    nip_kepsek: 0,
    tahun_ajaran: "",
  });

  const route = useRouter();

  const classCallback = (item: any, name: any) => {
    setData((prev: any) => {
      return { ...prev, [name]: item };
    });
    setButtonActive(true);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const id = Cookies.get("user id");

        let parsedId = 0;
        if (id !== undefined) {
          parsedId = parseInt(id); // Parsing the user ID to an integer
        } else {
          console.log("User ID not found in localStorage");
        }
        setData((prev: any) => {
          return { ...prev, ["id_user"]: parsedId };
        });

        const res = await axios.get(`/api/main-data?id_user=${parsedId}`);
        if (res.data?.data !== null) {
          setIsActive(true);
          if (!defaultData) {
            setDefaultData(res.data?.data);
          }
          setData(res.data?.data);
        } else {
          setIsActive(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [defaultData, isActive]);

  const save = async () => {
    if (buttonActive) {
      setUpdated(true);
      setTimeout(() => {
        setUpdated(false);
      }, 3000);

      console.log(defaultData);

      try {
        const res = await axios.post(`/api/main-data`, data);
        setData(res.data?.newData);
        setDefaultData(res.data?.newData);
      } catch (err) {
        console.log(err);
      }
      setButtonActive(false);
    }
  };

  const setInput = (value: any, name: any) => {
    let nip;
    let nipKepsek;
    let valueData = value;
    if (name === "nip" || name === "nip_kepsek") {
      nip = parseInt(value);
      valueData = nip;
    }
    setData((prev: any) => {
      return { ...prev, [name]: valueData };
    });
    setButtonActive(true);
  };

  return (
    <div className="flex justify-around py-[2rem]">
      <EditMainData className={`${updated ? "" : "hidden"}`} />
      <div className="w-[80%] flex justify-between">
        <div className="w-full border-[1.5px] border-gray-200 rounded-md px-[3.5rem] py-[1.5rem]">
          <div className="flex space-x-[2rem]">
            <div className="w-[50%]">
              <div className="flex justify-between py-[1rem] border-b-[1.5px]">
                <div>Nama Sekolah</div>
                <input
                  value={data?.nama_sekolah || ""}
                  name="nama_sekolah"
                  onChange={(e) => {
                    setInput(e.target.value, e.target.name);
                  }}
                  placeholder="Salsul Rijal S.Pt"
                  className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
                />
              </div>
              <div className="flex justify-between py-[1rem] border-b-[1.5px]">
                <div>NPSN</div>
                <input
                  value={data?.npsn || ""}
                  name="npsn"
                  onChange={(e) => {
                    setInput(e.target.value, e.target.name);
                  }}
                  placeholder="Salsul Rijal S.Pt"
                  className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
                />
              </div>
              <div className="flex justify-between py-[1rem] border-b-[1.5px]">
                <div>Status Sekolah</div>
                <input
                  value={data?.status_sekolah || ""}
                  name="status_sekolah"
                  onChange={(e) => {
                    setInput(e.target.value, e.target.name);
                  }}
                  placeholder="Salsul Rijal S.Pt"
                  className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
                />
              </div>
              <div className="flex justify-between py-[1rem] border-b-[1.5px]">
                <div>Tahun Ajaran</div>
                <input
                  value={data?.tahun_ajaran || ""}
                  name="tahun_ajaran"
                  onChange={(e) => {
                    setInput(e.target.value, e.target.name);
                  }}
                  placeholder="2020/2021"
                  className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
                />
              </div>
              <div className="flex justify-between py-[1rem] border-b-[1.5px]">
                <div>Kepala Sekolah</div>
                <input
                  value={data?.kepala_sekolah || ""}
                  name="kepala_sekolah"
                  onChange={(e) => {
                    setInput(e.target.value, e.target.name);
                  }}
                  placeholder="Salsul Rijal S.Pt"
                  className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
                />
              </div>
              <div className="flex justify-between py-[1rem] border-b-[1.5px]">
                <div>NIP Kepala Sekolah</div>
                <input
                  value={data?.nip_kepsek || ""}
                  name="nip_kepsek"
                  onChange={(e) => {
                    setInput(e.target.value, e.target.name);
                  }}
                  placeholder="19120239102"
                  className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
                />
              </div>
              <div className="flex justify-between py-[1rem] border-b-[1.5px]">
                <div>Guru Kelas</div>
                <input
                  value={data?.guru_kelas || ""}
                  name="guru_kelas"
                  onChange={(e) => {
                    setInput(e.target.value, e.target.name);
                  }}
                  placeholder="Salsul Rijal S.Pt"
                  className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
                />
              </div>
              <div className="flex justify-between py-[1rem]">
                <div>NIP Guru Kelas</div>
                <input
                  name="nip"
                  value={data?.nip || ""}
                  onChange={(e) => {
                    setInput(e.target.value, e.target.name);
                  }}
                  placeholder="1829040023"
                  className={`flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem] `}
                />
              </div>
            </div>
            <div className="w-[50%]">
              <div className="flex justify-between py-[1rem] border-b-[1.5px]">
                <div>Kelas</div>
                <DropDown
                  name="kelas_angka"
                  title={data?.kelas_angka}
                  isActive={isActive}
                  drop={["I", "II", "III", "IV", "V", "VI"]}
                  classCallback={classCallback}
                />
              </div>
              <div className="flex justify-between py-[1rem] border-b-[1.5px]">
                <div>Semester</div>
                <DropDown
                  name="semester"
                  title={data?.semester}
                  isActive={isActive}
                  drop={["Ganjil", "Genap"]}
                  classCallback={classCallback}
                />
              </div>
              <div className="flex justify-between py-[1rem] border-b-[1.5px]">
                <div>Alamat Sekolah</div>
                <input
                  value={data?.alamat_sekolah || ""}
                  name="alamat_sekolah"
                  onChange={(e) => {
                    setInput(e.target.value, e.target.name);
                  }}
                  placeholder="Salsul Rijal S.Pt"
                  className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
                />
              </div>
              <div className="flex justify-between py-[1rem] border-b-[1.5px]">
                <div>Desa</div>
                <input
                  value={data?.desa || ""}
                  name="desa"
                  onChange={(e) => {
                    setInput(e.target.value, e.target.name);
                  }}
                  placeholder="Salsul Rijal S.Pt"
                  className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
                />
              </div>
              <div className="flex justify-between py-[1rem] border-b-[1.5px]">
                <div>Kecamatan</div>
                <input
                  value={data?.kecamatan || ""}
                  name="kecamatan"
                  onChange={(e) => {
                    setInput(e.target.value, e.target.name);
                  }}
                  placeholder="Salsul Rijal S.Pt"
                  className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
                />
              </div>
              <div className="flex justify-between py-[1rem] border-b-[1.5px]">
                <div>Kabupaten</div>
                <input
                  value={data?.kabupaten || ""}
                  name="kabupaten"
                  onChange={(e) => {
                    setInput(e.target.value, e.target.name);
                  }}
                  placeholder="Salsul Rijal S.Pt"
                  className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
                />
              </div>
              <div className="flex justify-between py-[1rem]">
                <div>Propinsi</div>
                <input
                  value={data?.propinsi || ""}
                  name="propinsi"
                  onChange={(e) => {
                    setInput(e.target.value, e.target.name);
                  }}
                  placeholder="Salsul Rijal S.Pt"
                  className="flex justify-center text-left w-[10rem] rounded-md bg-gray-100 border-[1.5px] border-gray-200 px-[.5rem]"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              className={` w-full py-[1rem] rounded-md mb-[2rem] mt-[2rem] hover:bg-black-200 ${
                buttonActive
                  ? "bg-[#793FDF] text-white"
                  : "bg-gray-100 border-[1.5px] border-gray-300 text-gray-400"
              }`}
              onClick={save}
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
