"use client";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import DropDownSiswa from "./DropDownSiswa";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import axios from "axios";

export default function AddSiswa() {
  const [gender, setGender] = useState("Jenis Kelamin");
  const [isActive, setIsActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [isPindahan, setIsPindahan] = useState(false);
  const [isWali, setIsWali] = useState(false);
  const [userId, setUserId] = useState(0);
  
  
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
    anak_keberapa: "",
    jumlah_saudara_kandung: "",
    jumlah_saudara_tiri: "",
    jumlah_saudara_angkat: "",
    bahasa_sehari_hari: "",
    keterangan_perkembangan_pesdik: {},
    alamat: "",
    nomor_telepon: "",
    bertempat_tinggal_bersama: "",
    jarak_tempat_tinggal_ke_sekolah: "",
    golongan_darah: "",
    penyakit_yang_pernah_diderita: "",
    kelainan_jasmani: "",
    tinggi_dan_berat_badan_saat_diterima: "",
    tahun_pelajaran: "",
    semester: "",
    berat_badan: "",
    tinggi_badan: "",
    asal_murid: "",
    nama_tk: "",
    alamat_tk: "",
    tanggal_dan_nomor_sstb: "",
    nama_sekolah_asal: "",
    dari_tingkat_kelas: "",
    nis: "",
    alasan_pindah: "",
    diterima_tanggal: "",
    diterima_saat_kelas: "",
    nama_ayah: "",
    tahun_lahir_ayah: "",
    agama_ayah: "",
    pendidikan_ayah: "",
    pekerjaan_ayah: "",
    nama_ibu: "",
    tahu_lahir_ibu: "",
    agama_ibu: "",
    pendidikan_ibu: "",
    pekerjaan_ibu: "",
    nama_wali: "",
    tahun_lahir_wali: "",
    agama_wali: "",
    pendidikan_wali: "",
    pekerjaan_wali: "",
    alamat_wali: "",
    hubungan_keluarga_wali: "",
    tahun_sekarang: "",
    kelas_sekarang: "",
    dari_kelas: "",
    tanggal_meninggalkan_sekolah: "",
    kelas_yang_ditinggalkan: "",
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
    const newIsWali = !isWali;
    setIsWali(newIsWali);
    setIsWali(!isWali);

    if (newIsWali) {
      setData((prev) => {
        return {
          ...prev,
          nama_wali: prev.nama_ayah,
          tahun_lahir_wali: prev.tahun_lahir_ayah,
          agama_wali: prev.agama_ayah,
          pendidikan_wali: prev.pendidikan_ayah,
          alamat_wali: prev.alamat,
          pekerjaan_wali: prev.pekerjaan_ayah,
          hubungan_keluarga_wali: "ayah",
        };
      });
    } else {
      setData((prev) => {
        return {
          ...prev,
          nama_wali: "",
          tahun_lahir_wali: "",
          agama_wali: "",
          pendidikan_wali: "",
          alamat_wali: "",
          pekerjaan_wali: "",
          hubungan_keluarga_wali: "",
        };
      });
    }
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
    setData((prev) => {
      return { ...prev, ["keterangan_perkembangan_pesdik"]: updatedInputSets };
    });
  };

  const handleInput = (e: any) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveSiswa = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/siswa", data);
      if (res) {
        console.log("ahhay");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log("ahhay");
    console.log(data);
  };

  console.log(data);
  console.log(userId);
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
                <Input
                  value={data.nama_lengkap}
                  onChange={handleInput}
                  name="nama_lengkap"
                  title="Nama Lengkap"
                />
                <Input
                  value={data.nama_panggilan}
                  onChange={handleInput}
                  name="nama_panggilan"
                  title="Nama Panggilan"
                />
                <DropDownSiswa
                  label="Jenis Kelamin"
                  name="jenis_kelamin"
                  title={gender}
                  isActive={isActive}
                  drop={["Laki-Laki", "Perempuan"]}
                  classCallback={classCallback}
                />
              </div>
              <div className="flex justify-between">
                <Input
                  value={data.tempat_tanggal_lahir}
                  onChange={handleInput}
                  name="tempat_tanggal_lahir"
                  title="Tempat Tanggal Lahir"
                />
                <Input
                  value={data.agama}
                  onChange={handleInput}
                  name="agama"
                  title="Agama"
                />
                <Input
                  value={data.kewarganegaraan}
                  onChange={handleInput}
                  name="kewarganegaraan"
                  title="Kewarganegaraan"
                />
              </div>
              <div className="flex justify-between">
                <Input
                  value={data.anak_keberapa}
                  onChange={handleInput}
                  name="anak_keberapa"
                  title="Anak Keberapa"
                />
                <Input
                  value={data.jumlah_saudara_kandung}
                  onChange={handleInput}
                  name="jumlah_saudara_kandung"
                  title="Jumlah Saudara kandung"
                />
                <Input
                  value={data.jumlah_saudara_tiri}
                  onChange={handleInput}
                  name="jumlah_saudara_tiri"
                  title="Jumlah Saudara Tiri"
                />
              </div>
              <div className="flex justify-between">
                <Input
                  value={data.jumlah_saudara_angkat}
                  onChange={handleInput}
                  name="jumlah_saudara_angkat"
                  title="Jumlah Saudara Angkat"
                />
                <Input
                  value={data.bahasa_sehari_hari}
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
                <Input
                  value={data.alamat}
                  onChange={handleInput}
                  name="alamat"
                  title="Alamat"
                />
                <Input
                  value={data.nomor_telepon}
                  onChange={handleInput}
                  name="nomor_telepon"
                  title="Nomor Telepon / HP"
                />
                <DropDownSiswa
                  label="Bertempat tinggal pada/bersama"
                  name="bertempat_tinggal_bersama"
                  title="bertempat_tinggal_bersama"
                  isActive={isActive}
                  drop={["Ayah", "Wali"]}
                  classCallback={classCallback}
                />
              </div>
              <div className="flex justify-between">
                <Input
                  value={data.jarak_tempat_tinggal_ke_sekolah}
                  onChange={handleInput}
                  name="jarak_tempat_tinggal_ke_sekolah"
                  title="Jarak Tempat Tinggal ke Sekolah"
                />
              </div>
              <div className="font-bold pt-[1rem]">
                Keterangan Tentang Kesehatan
              </div>
              <div className="flex justify-between">
                <DropDownSiswa
                  label="Golongan Darah"
                  name="golongan_darah"
                  title="Golongan Darah"
                  isActive={isActive}
                  drop={["A", "B", "AB", "O"]}
                  classCallback={classCallback}
                />

                <Input
                  value={data.penyakit_yang_pernah_diderita}
                  onChange={handleInput}
                  name="penyakit_yang_pernah_diderita"
                  title="Pnyakit Yang Pernah Diderita"
                />
                <Input
                  value={data.kelainan_jasmani}
                  onChange={handleInput}
                  name="kelainan_jasmani"
                  title="Kelainan Jasmani"
                />
              </div>
              <div className="flex justify-between">
                <Input
                  value={data.tinggi_dan_berat_badan_saat_diterima}
                  onChange={handleInput}
                  name="tinggi_dan_berat_badan_saat_diterima"
                  title="Tinggi dan Berat badan saat diterima"
                />
                <Input
                  value={data.tahun_pelajaran}
                  onChange={handleInput}
                  name="tahun_pelajaran"
                  title="Tahun Pelajaran "
                />
                <Input
                  value={data.semester}
                  onChange={handleInput}
                  name="semester"
                  title="Semester"
                />
              </div>
              <div className="flex justify-between">
                <Input
                  value={data.berat_badan}
                  onChange={handleInput}
                  name="berat_badan"
                  title="Berat Badan"
                />
                <Input
                  value={data.tinggi_badan}
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
                    value={data.asal_murid}
                    onChange={handleInput}
                    name="asal_murid"
                    title="Asal Murid"
                  />
                  <Input
                    value={data.nama_tk}
                    onChange={handleInput}
                    name="nama_tk"
                    title="Nama Taman Kanak-kanak"
                  />
                  <Input
                    value={data.alamat_tk}
                    onChange={handleInput}
                    name="alamat_tk"
                    title="Alamat TK"
                  />
                </div>
                <div className="flex justify-between">
                  <Input
                    value={data.tanggal_dan_nomor_sstb}
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
                      value={data.nama_sekolah_asal}
                      onChange={handleInput}
                      name="nama_sekolah_asal"
                      title="Nama Sekolah Asal"
                    />
                    <Input
                      value={data.dari_tingkat_kelas}
                      onChange={handleInput}
                      name="dari_tingkat_kelas"
                      title="Dari Tingkat / Kelas"
                    />
                    <Input
                      value={data.nis}
                      onChange={handleInput}
                      name="nis"
                      title="NIS"
                    />
                  </div>
                  <div className="flex justify-between">
                    <Input
                      value={data.alasan_pindah}
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
                      value={data.diterima_tanggal}
                      onChange={handleInput}
                      name="diterima_tanggal"
                      title="Diterima Tanggal"
                    />
                    <Input
                      value={data.diterima_saat_kelas}
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
                <Input
                  value={data.nama_ayah}
                  onChange={handleInput}
                  name="nama_ayah"
                  title="Nama"
                />
                <Input
                  value={data.tahun_lahir_ayah}
                  onChange={handleInput}
                  name="tahun_lahir_ayah"
                  title="Tahun Lahir"
                />
                <Input
                  value={data.agama_ayah}
                  onChange={handleInput}
                  name="agama_ayah"
                  title="Agama"
                />
              </div>
              <div className="flex justify-between">
                <Input
                  value={data.pendidikan_ayah}
                  onChange={handleInput}
                  name="pendidikan_ayah"
                  title="Pendidikan"
                />
                <Input
                  value={data.pekerjaan_ayah}
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
                <Input
                  value={data.nama_ibu}
                  onChange={handleInput}
                  name="nama_ibu"
                  title="Nama"
                />
                <Input
                  value={data.tahu_lahir_ibu}
                  onChange={handleInput}
                  name="tahu_lahir_ibu"
                  title="Tahun Lahir"
                />
                <Input
                  value={data.agama_ibu}
                  onChange={handleInput}
                  name="agama_ibu"
                  title="Agama"
                />
              </div>
              <div className="flex justify-between">
                <Input
                  value={data.pendidikan_ibu}
                  onChange={handleInput}
                  name="pendidikan_ibu"
                  title="Pendidikan"
                />
                <Input
                  value={data.pekerjaan_ibu}
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
                  <Input
                    value={data.nama_wali}
                    onChange={handleInput}
                    name="nama_wali"
                    title="Nama"
                  />
                  <Input
                    value={data.tahun_lahir_wali}
                    onChange={handleInput}
                    name="tahun_lahir_wali"
                    title="Tahun Lahir"
                  />
                  <Input
                    value={data.agama_wali}
                    onChange={handleInput}
                    name="agama_wali"
                    title="Agama"
                  />
                </div>
                <div className="flex justify-between">
                  <Input
                    value={data.pendidikan_wali}
                    onChange={handleInput}
                    name="pendidikan_wali"
                    title="Pendidikan"
                  />
                  <Input
                    value={data.pekerjaan_wali}
                    onChange={handleInput}
                    name="pekerjaan_wali"
                    title="Pekerjaan"
                  />
                  <Input
                    value={data.alamat_wali}
                    onChange={handleInput}
                    name="alamat_wali"
                    title="Alamat Rumah. Nomor Telp."
                  />
                </div>
                <div className="flex justify-between">
                  <Input
                    value={data.hubungan_keluarga_wali}
                    onChange={handleInput}
                    name="hubungan_keluarga_wali"
                    title="Hubungan Keluarga"
                  />
                </div>
              </div>

              {/* <div className="font-bold pt-[1rem]">Meninggalkan Sekolah</div>
            <div className="flex justify-between">
              <Input value={data.agama} onChange={handleInput} name="" title="Tanggal Meninggalkan Sekolah" />
              <Input value={data.agama} onChange={handleInput} name="" title="Kelas Yang Ditinggalkan" />
              <Input value={data.agama} onChange={handleInput} name="" title="Alasan" />
            </div>
            <div className="flex justify-between">
              <Input value={data.agama} onChange={handleInput} name="" title="Sekolah Yang Dituju" />
              <Input value={data.agama} onChange={handleInput} name="" title="Kecamatan" />
              <Input value={data.agama} onChange={handleInput} name="" title="Kabupaten" />
            </div>
            <div className="flex justify-between">
              <Input value={data.agama} onChange={handleInput} name="" title="Provinsi" />
            </div> */}
              {/* <div className="font-bold pt-[1rem]">Akhir Pendidikan</div>
            <div className="flex justify-between">
              <Input value={data.agama} onChange={handleInput} name="" title="Tempat belajar / Lulus Tahun" />
              <Input value={data.agama} onChange={handleInput} name="" title="Nomor Ijasah / STL" />
              <Input value={data.agama} onChange={handleInput} name="" title="Akan Melanjutkan Ke" />
            </div> */}
            </div>
            <div className="flex justify-between w-[45%]">
              <button
                className="bg-[#793FDF] rounded-md text-white px-[2rem] py-[.5rem]"
                onClick={saveSiswa}
              >
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
