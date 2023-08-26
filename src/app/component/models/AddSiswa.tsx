"use client";
import React from "react";

// @ts-ignore
export default function AddSiswa({ callbackActive, className }) {
  const cancel = () => {
    callbackActive(false);
  };
  return (
    <div
      className={`absolute w-full h-[89vh] justify-around flex z-1 py-[2rem] ${className}`}
    >
      <div className="flex justify-between rounded-md px-[3.5rem] py-[1.5rem] border-[1.5px] border-gray-200 border-b-[1.5px] bg-white w-[80%] h-[40rem]">
        <div className="w-full h-full">
          <p className="font-bold">Masukkan Data Siswa</p>
          <div className="py-[1rem] space-y-4">
            <div className="flex justify-between">
              <div className="">
                <p className="text-[.9rem]">Nama Lengkap</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">NIP</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">Tempat Tanggal Lahir</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">
                <p className="text-[.9rem]">Jenis Kelamin</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">Agama</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">Status Dalam Keluarga</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between"></div>
            <div className="flex justify-between">
              <div className="">
                <p className="text-[.9rem]">Anak Ke</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">Alamat Peserta Didik</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">Nomor Telepon Rumah</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">
                <p className="text-[.9rem]">Sekolah Asal</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">Nama Orang Tua</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">Jenis Kelamin</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">
                <p className="text-[.9rem]">Nama Ayah</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">Nama Ibu</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">Alamat Orang Tua</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">
                <p className="text-[.9rem]">Pekerjaan Ayah</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">Pekerjaan Ibu</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">Nama Wali Peserta Didik</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">
                <p className="text-[.9rem]">Alamat Peserta Didik</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">Nomor Telepon Wali</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <p className="text-[.9rem]">Pekerjaan Wali Peserta Didik</p>
                <input
                  className="h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e: any) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between w-[45%]">
            <button className="bg-[#793FDF] rounded-md text-white px-[2rem] py-[.5rem]">
              Simpan
            </button>
            <button
              className="bg-[#793FDF] rounded-md text-white px-[2rem] py-[.5rem]"
              onClick={cancel}
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
