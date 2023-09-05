"use client";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import DropDownSiswa from "./DropDownSiswa";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";

export default function AddSiswa() {
  const [gender, setGender] = useState("Jenis Kelamin");
  const [isActive, setIsActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [isPindahan, setIsPindahan] = useState(false);
  const [isWali, setIsWali] = useState(false);
  const [userId, setUserId] = useState(0);
  const [] = useState("");
  const [inputSets, setInputSets] = useState([
    [
      { title: "Tahun", value: "" },
      { title: "Kelas", value: "" },
      { title: "Dari", value: "" },
    ],
  ]);

  const [data, setData] = useState({
    id_user: userId,
    nama_lengkap: "",
    nama_panggilan: "",
    jenis_kelamin: "",
    tempat_tanggal_lahir: "",
    agama: "",
    kewarganegaraan: "",
    anak_keberapa: 0,
    jumlah_saudara_kandung: 0,
    jumlah_saudara_tiri: 0,
    jumlah_saudara_angkat: 0,
    bahasa_sehari_hari: "",
    alamat: "",
    nomor_telepon: 0,
    bertempat_tinggal_bersama: "",
    jarak_tempat_tinggal_ke_sekolah: 0,
    golongan_darah: "",
    penyakit_yang_pernah_diderita: "",
    kelainan_jasmani: "",
    tinggi_dan_berat_badan_saat_diterima: 0,
    tahun_pelajaran: 0,
    semester: 0,
    berat_badan: 0,
    tinggi_badan: 0,
    asal_murid: "",
    nama_tk: "",
    alamat_tk: "",
    tanggal_dan_nomor_sstb: "",
    nama_sekolah_asal: "",
    dari_tingkat_kelas: "",
    nis: 0,
    alasan_pindah: "",
    diterima_tanggal: "",
    diterima_saat_kelas: 0,
    nama_ayah: "",
    tahu_lahir_ayah: 0,
    agama_ayah: "",
    pendidikan_ayah: "",
    pekerjaan_ayah: "",
    nama_ibu: "",
    tahu_lahir_ibu: 0,
    agama_ibu: "",
    pendidikan_ibu: "",
    pekerjaan_ibu: "",
    nama_wali: "",
    tahun_lahir_wali: 0,
    agama_wali: "",
    pendidikan_wali: "",
    pekerjaan_wali: "",
    alamat_wali: "",
    hubungan_keluarga_wali: "",
    tahun_sekarang: "",
    kelas_sekarang: 0,
    dari_kelas: 0,
    tanggal_meninggalkan_sekolah: "",
    kelas_yang_ditinggalkan: 0,
    alasan_meninggalkan_sekolah: "",
    sekolah_yang_dituju: "",
    kecamatan_sekolah_tujuan: "",
    kabupaten_sekolah_tujuan: "",
    provinsi_sekolah_tujuan: "",
    tempat_belajar: "",
    nomor_ijasah: "",
    akan_melanjutkan_ke: "",
  });

  useEffect(() => {
    const id = Cookies.get("user id");

    let parsedId = 0;
    if (id !== undefined) {
      parsedId = parseInt(id); // Parsing the user ID to an integer
      console.log(parsedId);
      setData((prev) => {
        return { ...prev, ["id_user"]: parsedId };
      });
    } else {
      console.log("User ID not found in localStorage");
    }
  }, []);

  const classCallback = (item: any, name: any) => {
    setButtonActive(true);
    setData((prev) => {
      return { ...prev, [name]: item };
    });
  };

  const cancel = () => {
    callbackActive(false);
  };

  const pindahan = () => {
    setIsPindahan(!isPindahan);
  };
  const wali = () => {
    setIsWali(!isWali);
  };

  const addInputSet = () => {
    const newInputSet = [
      { title: "Tahun", value: "" },
      { title: "Kelas", value: "" },
      { title: "Dari", value: "" },
    ];
    setInputSets([...inputSets, newInputSet]);
  };
  const deleteInputSet = (setIndex: any) => {
    const updatedInputSets = [...inputSets];
    updatedInputSets.splice(setIndex, 1);
    setInputSets(updatedInputSets);
  };

  const handleInputChange = (
    setValue: any,
    setIndex: any,
    fieldIndex: any,
    event: any
  ) => {
    const newValue = event.target.value;

    const updatedInputSets = [...inputSets];
    updatedInputSets[setIndex][fieldIndex].value = newValue;

    setInputSets(updatedInputSets);
  };

  const handleInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(name, value);
    // if (value.length !== "") {
    //   setActive(true);
    // }
  };

  console.log(data);
  console.log(userId);
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
                <Input
                  onChange={handleInput}
                  name="nama_lengkap"
                  title="Nama Lengkap"
                />
                <Input
                  onChange={handleInput}
                  name="nama_panggilan"
                  title="Nama Panggilan"
                />
                <DropDownSiswa
                  name="jenis_kelamin"
                  title={gender}
                  isActive={isActive}
                  drop={["Laki-Laki", "Perempuan"]}
                  classCallback={classCallback}
                />
              </div>
              <div className="flex justify-between">
                <Input
                  onChange={handleInput}
                  name="tempat_tanggal_lahir"
                  title="Tempat Tanggal Lahir"
                />
                <Input onChange={handleInput} name="alamat" title="Agama" />
                <Input
                  onChange={handleInput}
                  name="kewarganegaraan"
                  title="Kewarganegaraan"
                />
              </div>
              <div className="flex justify-between">
                <Input
                  onChange={handleInput}
                  name="anak_keberapa"
                  title="Anak Keberapa"
                />
                <Input
                  onChange={handleInput}
                  name="jumlah_saudara_kandung"
                  title="Jumlah Saudara kandung"
                />
                <Input
                  onChange={handleInput}
                  name="jumlah_saudara_tiri"
                  title="Jumlah Saudara Tiri"
                />
              </div>
              <div className="flex justify-between">
                <Input
                  onChange={handleInput}
                  name="jumlah_saudara_angkat"
                  title="Jumlah Saudara Angkat"
                />
                <Input
                  onChange={handleInput}
                  name="bahasa_sehari_hari"
                  title="Bahasa Sehari-hari di Keluarga"
                />
                <div className="w-[30%]">
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
                <Input onChange={handleInput} name="alamat" title="Alamat" />
                <Input
                  onChange={handleInput}
                  name="nomor_telepon"
                  title="Nomor Telepon / HP"
                />
                <Input
                  onChange={handleInput}
                  name="bertempat_tinggal_bersama"
                  title="Bertempat tinggal pada/bersama"
                />
              </div>
              <div className="flex justify-between">
                <Input
                  onChange={handleInput}
                  name="jarak_tempat_tinggal_ke_sekolah"
                  title="Jarak Tempat Tinggal ke Sekolah"
                />
              </div>
              <div className="font-bold pt-[1rem]">
                Keterangan Tentang Kesehatan
              </div>
              <div className="flex justify-between">
                <Input
                  onChange={handleInput}
                  name="golongan_darah"
                  title="Golongan Darah"
                />
                <Input
                  onChange={handleInput}
                  name="penyakit_yang_pernah_diderita"
                  title="Pnyakit Yang Pernah Diderita"
                />
                <Input
                  onChange={handleInput}
                  name="kelainan_jasmani"
                  title="Kelainan Jasmani"
                />
              </div>
              <div className="flex justify-between">
                <Input
                  onChange={handleInput}
                  name="tinggi_dan_berat_badan_saat_diterima"
                  title="Tinggi dan Berat badan saat diterima"
                />
                <Input
                  onChange={handleInput}
                  name="tahun_pelajaran"
                  title="Tahun Pelajaran "
                />
                <Input
                  onChange={handleInput}
                  name="semester"
                  title="Semester"
                />
              </div>
              <div className="flex justify-between">
                <Input
                  onChange={handleInput}
                  name="berat_badan"
                  title="Berat Badan"
                />
                <Input
                  onChange={handleInput}
                  name="tinggi_badan"
                  title="Tinggi Badan"
                />
                <div className="w-[30%]">
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
                  <Input
                    onChange={handleInput}
                    name="asal_murid"
                    title="Asal Murid"
                  />
                  <Input
                    onChange={handleInput}
                    name="nama_tk"
                    title="Nama Taman Kanak-kanak"
                  />
                  <Input
                    onChange={handleInput}
                    name="alamat_tk"
                    title="Alamat TK"
                  />
                </div>
                <div className="flex justify-between">
                  <Input
                    onChange={handleInput}
                    name="tanggal_dan_nomor_sstb"
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
                    <Input
                      onChange={handleInput}
                      name="nama_sekolah_asal"
                      title="Nama Sekolah Asal"
                    />
                    <Input
                      onChange={handleInput}
                      name="dari_tingkat_kelas"
                      title="Dari Tingkat / Kelas"
                    />
                    <Input onChange={handleInput} name="nis" title="NIS" />
                  </div>
                  <div className="flex justify-between">
                    <Input
                      onChange={handleInput}
                      name="alasan_pindah"
                      title="Alasan Pindah"
                    />
                  </div>
                  <div className="font-bold pt-[.5rem] text-[.7rem]">
                    Diterima Disekolah Ini
                  </div>
                  <div className="flex justify-between">
                    <Input
                      onChange={handleInput}
                      name="diterima_tanggal"
                      title="Diterima Tanggal"
                    />
                    <Input
                      onChange={handleInput}
                      name="diterima_saat_kelas"
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
                <Input onChange={handleInput} name="nama_ayah" title="Nama" />
                <Input
                  onChange={handleInput}
                  name="tahu_lahir_ayah"
                  title="Tahun Lahir"
                />
                <Input onChange={handleInput} name="agama_ayah" title="Agama" />
              </div>
              <div className="flex justify-between">
                <Input
                  onChange={handleInput}
                  name=" pendidikan_ayah"
                  title="Pendidikan"
                />
                <Input
                  onChange={handleInput}
                  name="pekerjaan_ayah"
                  title="Pekerjaan"
                />
                <div className="w-[30%]">
                  <div className="h-[2rem] px-[.5rem] rounded-md w-[13.7rem]" />
                </div>
              </div>
              <div className="font-bold pt-[1rem]">
                Keterangan Tentang Ibu Kandung
              </div>
              <div className="flex justify-between">
                <Input onChange={handleInput} name="nama_ibu" title="Nama" />
                <Input
                  onChange={handleInput}
                  name="tahu_lahir_ibu"
                  title="Tahun Lahir"
                />
                <Input onChange={handleInput} name="agama_ibu" title="Agama" />
              </div>
              <div className="flex justify-between">
                <Input
                  onChange={handleInput}
                  name="pendidikan_ibu"
                  title="Pendidikan"
                />
                <Input
                  onChange={handleInput}
                  name="pekerjaan_ibu"
                  title="Pekerjaan"
                />
                <div className="w-[30%]">
                  <div className="h-[2rem] px-[.5rem] rounded-md w-[13.7rem]" />
                </div>
              </div>
              <button
                className="bg-[#793FDF] rounded-md text-white px-[2rem] py-[.5rem] text-[.7rem]"
                onClick={wali}
              >
                {!isWali ? <p>Wali adalah Ayah</p> : <p>Wali bukan ayah</p>}
              </button>
              <div className={`space-y-[.7rem]`}>
                <div className="font-bold">Keterangan Tentang Wali</div>
                <div className="flex justify-between">
                  <Input onChange={handleInput} name="nama_wali" title="Nama" />
                  <Input
                    onChange={handleInput}
                    name="tahun_lahir_wali"
                    title="Tahun Lahir"
                  />
                  <Input
                    onChange={handleInput}
                    name="agama_wali"
                    title="Agama"
                  />
                </div>
                <div className="flex justify-between">
                  <Input
                    onChange={handleInput}
                    name="pendidikan_wali"
                    title="Pendidikan"
                  />
                  <Input
                    onChange={handleInput}
                    name="pekerjaan_wali"
                    title="Pekerjaan"
                  />
                  <Input
                    onChange={handleInput}
                    name="alamat_wali"
                    title="Alamat Rumah. Nomor Telp."
                  />
                </div>
                <div className="flex justify-between">
                  <Input
                    onChange={handleInput}
                    name="hubungan_keluarga_wali"
                    title="Hubungan Keluarga"
                  />
                </div>
              </div>

              {/* <div className="font-bold pt-[1rem]">Meninggalkan Sekolah</div>
            <div className="flex justify-between">
              <Input onChange={handleInput} name="" title="Tanggal Meninggalkan Sekolah" />
              <Input onChange={handleInput} name="" title="Kelas Yang Ditinggalkan" />
              <Input onChange={handleInput} name="" title="Alasan" />
            </div>
            <div className="flex justify-between">
              <Input onChange={handleInput} name="" title="Sekolah Yang Dituju" />
              <Input onChange={handleInput} name="" title="Kecamatan" />
              <Input onChange={handleInput} name="" title="Kabupaten" />
            </div>
            <div className="flex justify-between">
              <Input onChange={handleInput} name="" title="Provinsi" />
            </div> */}
              {/* <div className="font-bold pt-[1rem]">Akhir Pendidikan</div>
            <div className="flex justify-between">
              <Input onChange={handleInput} name="" title="Tempat belajar / Lulus Tahun" />
              <Input onChange={handleInput} name="" title="Nomor Ijasah / STL" />
              <Input onChange={handleInput} name="" title="Akan Melanjutkan Ke" />
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
