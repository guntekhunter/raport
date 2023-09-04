"use client";
import React, { useState } from "react";
import Input from "./Input";
import DropDownSiswa from "./DropDownSiswa";
import Link from "next/link";
import Image from "next/image";

export default function AddSiswa() {
  const [gender, setGender] = useState("Jenis Kelamin");
  const [isActive, setIsActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [isPindahan, setIsPindahan] = useState(false);
  const [nama, setNama] = useState("");
  const [inputSets, setInputSets] = useState([
    [
      { title: "Tahun", value: "" },
      { title: "Kelas", value: "" },
      { title: "Dari", value: "" },
    ],
  ]);

  const classCallback = (item: any, name: any) => {
    setButtonActive(true);
    if (name === "Jenis Kelamin") {
      setGender(item);
    }
  };

  const cancel = () => {
    callbackActive(false);
  };

  const pindahan = () => {
    setIsPindahan(!isPindahan);
  };

  const addInputSet = () => {
    // Create a new input set with default values
    const newInputSet = [
      { title: "Tahun", value: "" },
      { title: "Kelas", value: "" },
      { title: "Dari", value: "" },
    ];
    setInputSets([...inputSets, newInputSet]);
  };
  const deleteInputSet = (setIndex: any) => {
    const updatedInputSets = [...inputSets];
    updatedInputSets.splice(setIndex, 1); // Remove the set at setIndex
    setInputSets(updatedInputSets);
  };

  const handleInputChange = (
    setValue: any,
    setIndex: any,
    fieldIndex: any,
    event: any
  ) => {
    const newValue = event.target.value;

    // Copy the current inputSets and update the specific value
    const updatedInputSets = [...inputSets];
    updatedInputSets[setIndex][fieldIndex].value = newValue;

    // Update the state with the modified inputSets
    setInputSets(updatedInputSets);
  };

  console.log(inputSets);
  return (
    <div className={`w-full flex justify-around z-1 py-[1.7rem]`}>
      <div className="w-[80%] space-y-[.7rem]">
        <div className="space-y-[1rem]">
          <button className="bg-[#793FDF] rounded-md">
            <Link
              href="/siswa"
              className="w-full px-[1rem] py-[.5rem] flex justify-center"
            >
              <Image
                src="/arrow.png"
                height={500}
                width={500}
                alt=""
                className="w-[1rem] filter invert"
              />
            </Link>
          </button>
          <p className="font-bold">TAMBAH PESERTA DIDIK</p>
        </div>
        <div className="flex justify-between rounded-md px-[3.5rem] py-[1.5rem] border-[1.5px] border-gray-200 border-b-[1.5px] bg-white w-full">
          <div className="w-full h-full">
            <div className="py-[1rem] space-y-4">
              <div className="font-bold">
                Keterangan Tentang Diri Peserta Didik
              </div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Nama Lengkap" />
                <Input onChange={() => setNama} title="Nama Panggilan" />
                <DropDownSiswa
                  name="semester"
                  title={gender}
                  isActive={isActive}
                  drop={["Laki-Laki", "Perempuan"]}
                  classCallback={classCallback}
                />
              </div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Tempat Tanggal Lahir" />
                <Input onChange={() => setNama} title="Agama" />
                <Input onChange={() => setNama} title="Kewarganegaraan" />
              </div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Anak Keberapa" />
                <Input
                  onChange={() => setNama}
                  title="Jumlah Saudara kandung"
                />
                <Input onChange={() => setNama} title="Jumlah Saudara Tiri" />
              </div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Jumlah Saudara Angkat" />
                <Input
                  onChange={() => setNama}
                  title="Bahasa Sehari-hari di Keluarga"
                />
                <div className="">
                  <div className="h-[2rem] px-[.5rem] rounded-md w-[13.7rem]" />
                </div>
              </div>
              <div className="font-bold pt-[1rem]">
                Keterangan Perkebangan Peserta Didik
              </div>
              <div className="font-bold pt-[.5rem] text-[.7rem]">
                Menerima Beasiswa
              </div>
              {inputSets.map((inputFields, setIndex) => (
                <div key={setIndex} className="flex justify-between">
                  {inputFields.map((input, fieldIndex) => (
                    <>
                      <div>
                        <p className="text-[.7rem]">{input.title}</p>
                        <input
                          key={fieldIndex}
                          type="text"
                          value={input.value}
                          placeholder={input.title}
                          onChange={(e) =>
                            handleInputChange(
                              setInputSets,
                              setIndex,
                              fieldIndex,
                              e
                            )
                          }
                          className="border p-2 rounded h-[2rem] px-[.5rem] rounded-md border-[1.4px] border-gray-200 text-[.7rem]"
                        />
                      </div>
                    </>
                  ))}
                  <div className="flex pt-[1rem]">
                    <button
                      className="bg-red-200 p-[.5rem] rounded-md"
                      onClick={() => deleteInputSet(setIndex)}
                    >
                      <div className="filter brightness-100 contrast-100 saturate-100 grayscale-0 sepia-0 hue-rotate-0 invert-0 drop-shadow-md">
                        <Image
                          src="/delete.png"
                          alt=""
                          width={500}
                          height={500}
                          className="w-[1rem]"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
              <button
                className="w-full flex justify-center text-[.7rem] py-[.5rem] rounded-md bg-[#793FDF] text-white"
                onClick={addInputSet}
              >
                Tambahkan Pencapaian Peserta Didik
              </button>
              <div className="font-bold pt-[1rem]">
                Keterangan Tempat Tinggal
              </div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Alamat" />
                <Input onChange={() => setNama} title="Nomor Telepon / HP" />
                <Input
                  onChange={() => setNama}
                  title="Bertempat tinggal pada/bersama"
                />
              </div>
              <div className="flex justify-between">
                <Input
                  onChange={() => setNama}
                  title="Jarak Tempat Tinggal ke Sekolah"
                />
              </div>
              <div className="font-bold pt-[1rem]">
                Keterangan Tentang Kesehatan
              </div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Golongan Darah" />
                <Input
                  onChange={() => setNama}
                  title="Pnyakit Yang Pernah Diderita"
                />
                <Input onChange={() => setNama} title="Kelainan Jasmani" />
              </div>
              <div className="flex justify-between">
                <Input
                  onChange={() => setNama}
                  title="Tinggi dan Berat badan saat diterima"
                />
                <Input onChange={() => setNama} title="Tahun Pelajaran " />
                <Input onChange={() => setNama} title="Semester" />
              </div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Berat Badan" />
                <Input onChange={() => setNama} title="Tinggi Badan" />
                <div className="">
                  <div className="h-[2rem] px-[.5rem] rounded-md w-[13.7rem]" />
                </div>
              </div>
              <button
                className="bg-[#793FDF] rounded-md text-white px-[2rem] py-[.5rem] text-[.7rem]"
                onClick={pindahan}
              >
                {!isPindahan ? (
                  <p>Siswa ini pindahan?</p>
                ) : (
                  <p>bukan pindahan?</p>
                )}
              </button>
              <div className={`space-y-[.7rem] pb-[.4rem]`}>
                <div className="font-bold">Keterangan Tentang Pendidikan</div>
                <div className="font-bold pt-[.5rem] text-[.7rem]">
                  Pendidkan Sebelumnya
                </div>
                <div className="flex justify-between">
                  <Input onChange={() => setNama} title="Asal Murid" />
                  <Input
                    onChange={() => setNama}
                    title="Nama Taman Kanak-kanak"
                  />
                  <Input onChange={() => setNama} title="Alamat" />
                </div>
                <div className="flex justify-between">
                  <Input
                    onChange={() => setNama}
                    title="Tanggal dan Nomor STTB"
                  />
                </div>
                <div
                  className={`${
                    isPindahan
                      ? "transition-opacity ease-in duration-200 opacity-100"
                      : "transition-opacity ease-out duration-200 opacity-0 pointer-events-none absolute"
                  }`}
                >
                  <div className="font-bold pt-[.5rem] text-[.7rem]">
                    Pindahan Dari Sekolah Lain
                  </div>
                  <div className="flex justify-between">
                    <Input onChange={() => setNama} title="Nama Sekolah Asal" />
                    <Input
                      onChange={() => setNama}
                      title="Dari Tingkat / Kelas"
                    />
                    <Input onChange={() => setNama} title="NIS" />
                  </div>
                  <div className="flex justify-between">
                    <Input onChange={() => setNama} title="Alasan Pindah" />
                  </div>
                  <div className="font-bold pt-[.5rem] text-[.7rem]">
                    Diterima Disekolah Ini
                  </div>
                  <div className="flex justify-between">
                    <Input onChange={() => setNama} title="Diterima Tanggal" />
                    <Input
                      onChange={() => setNama}
                      title="Di Kelas / Tingkat"
                    />
                    <div className="">
                      <div className="h-[2rem] px-[.5rem] rounded-md w-[13.7rem]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-bold">Keterangan Tentang Ayah Kandung</div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Nama" />
                <Input onChange={() => setNama} title="Tahun Lahir" />
                <Input onChange={() => setNama} title="Agama" />
              </div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Pendidikan" />
                <Input onChange={() => setNama} title="Pekerjaan" />
                <div className="">
                  <div className="h-[2rem] px-[.5rem] rounded-md w-[13.7rem]" />
                </div>
              </div>
              <div className="font-bold pt-[1rem]">
                Keterangan Tentang Ibu Kandung
              </div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Nama" />
                <Input onChange={() => setNama} title="Tahun Lahir" />
                <Input onChange={() => setNama} title="Agama" />
              </div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Pendidikan" />
                <Input onChange={() => setNama} title="Pekerjaan" />
                <div className="">
                  <div className="h-[2rem] px-[.5rem] rounded-md w-[13.7rem]" />
                </div>
              </div>
              <div className="font-bold pt-[1rem]">Keterangan Tentang Wali</div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Nama" />
                <Input onChange={() => setNama} title="Tahun Lahir" />
                <Input onChange={() => setNama} title="Agama" />
              </div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Pendidikan" />
                <Input onChange={() => setNama} title="Pekerjaan" />
                <Input
                  onChange={() => setNama}
                  title="Alamat Rumah. Nomor Telp."
                />
              </div>
              <div className="flex justify-between">
                <Input onChange={() => setNama} title="Hubungan Keluarga" />
              </div>

              {/* <div className="font-bold pt-[1rem]">Meninggalkan Sekolah</div>
            <div className="flex justify-between">
              <Input onChange={() => setNama} title="Tanggal Meninggalkan Sekolah" />
              <Input onChange={() => setNama} title="Kelas Yang Ditinggalkan" />
              <Input onChange={() => setNama} title="Alasan" />
            </div>
            <div className="flex justify-between">
              <Input onChange={() => setNama} title="Sekolah Yang Dituju" />
              <Input onChange={() => setNama} title="Kecamatan" />
              <Input onChange={() => setNama} title="Kabupaten" />
            </div>
            <div className="flex justify-between">
              <Input onChange={() => setNama} title="Provinsi" />
            </div> */}
              {/* <div className="font-bold pt-[1rem]">Akhir Pendidikan</div>
            <div className="flex justify-between">
              <Input onChange={() => setNama} title="Tempat belajar / Lulus Tahun" />
              <Input onChange={() => setNama} title="Nomor Ijasah / STL" />
              <Input onChange={() => setNama} title="Akan Melanjutkan Ke" />
            </div> */}
            </div>
            <div className="flex justify-between w-[45%]">
              <button className="bg-[#793FDF] rounded-md text-white px-[2rem] py-[.5rem]">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function callbackActive(arg0: boolean) {
  throw new Error("Function not implemented.");
}
