"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Cookies from "js-cookie";

// @ts-ignore
export default function PrintRaport({ id }) {
  const [data, setData] = useState([]);
  const [nilai, setNilai] = useState<any>([]);
  const [studentData, setStudentData] = useState<any>([]);
  const [userData, setUserData] = useState<any>([]);
  const [date, setDate] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const print = useReactToPrint({
    content: () => ref.current,
  });
  // ----------------- temporary code ----------------
  // const handlePrint = () => {
  //   print();
  // };

  useEffect(() => {
    // const id = 23;
    const fetchStudent = async () => {
      if (id) {
        try {
          const user = Cookies.get("user id");
          let parsedId = 0;
          if (user !== undefined) {
            parsedId = parseInt(user); // Parsing the user ID to an integer
          } else {
            console.log("User ID not found in localStorage");
          }
          const data = await axios.get(
            `http://localhost:3000/api/print?id=${id}&user_id=${parsedId}`
          );
          setData(data.data.data.nilai);
          setStudentData(data.data.data.students);
          setUserData(data.data.data.user.main_data[0]);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchStudent();
  }, [id]);

  useEffect(() => {
    let pengetahuanSums: Record<string, { sum: number; count: number }> = {};
    let keterampilanSums: Record<string, { sum: number; count: number }> = {};

    // Calculate the sum of scores for each "mapel" and each type
    for (const item of data) {
      const { mapel, nilai, nilai_type } = item;

      if (nilai_type === "Pengetahuan") {
        if (pengetahuanSums[mapel]) {
          pengetahuanSums[mapel].sum += nilai;
          pengetahuanSums[mapel].count++;
        } else {
          pengetahuanSums[mapel] = { sum: nilai, count: 1 };
        }
      }

      if (nilai_type === "Keterampilan") {
        if (keterampilanSums[mapel]) {
          keterampilanSums[mapel].sum += nilai;
          keterampilanSums[mapel].count++;
        } else {
          keterampilanSums[mapel] = { sum: nilai, count: 1 };
        }
      }
    }

    // Ensure "Pengetahuan" and "Keterampilan" are always present in the result array
    const allSubjects: string[] = [];
    for (const mapel of Object.keys(pengetahuanSums)) {
      if (!allSubjects.includes(mapel)) {
        allSubjects.push(mapel);
      }
    }
    for (const mapel of Object.keys(keterampilanSums)) {
      if (!allSubjects.includes(mapel)) {
        allSubjects.push(mapel);
      }
    }

    const resultArray = allSubjects.map((mapel) => ({
      mapel,
      pengetahuan: pengetahuanSums[mapel]
        ? Math.round(pengetahuanSums[mapel].sum / pengetahuanSums[mapel].count)
        : 0,
      keterampilan: keterampilanSums[mapel]
        ? Math.round(
            keterampilanSums[mapel].sum / keterampilanSums[mapel].count
          )
        : 0,
    }));

    setNilai(resultArray);
  }, [data]);

  console.log(studentData);
  useEffect(() => {
    const monthNames = [
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
    ];

    // Get the current date
    const currentDate = new Date();

    // Extract the day, month, and year
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // Format the date
    const formattedDate = `${day} ${monthNames[month]} ${year}`;
    setDate(formattedDate);
  }, []);

  useEffect(() => {
    if (id) {
      print();
    }
  }, [id, data, print]);

  if (!studentData) return null;

  return (
    <div className="text-[1rem] text-sm font-medium" ref={ref}>
      <style type="text/css">
        {`
        @page {
          size: auto;
          margin: 20mm 0 10mm 0;
        }
        body {
          margin: 0;
          padding: 0;
        }
          table { page-break-inside:auto }
          tr { page-break-inside:avoid; page-break-after:auto }
          thead { display:table-header-group}
          tboady { display:table-footer-group }
        `}
      </style>
      {/* <button
        className="fixed top-[2rem] z-20 bg-blue-200 left-[2rem] p-[1rem]"
        onClick={handlePrint}
      >
        ahhay
      </button> */}
      <div className="font-serif">
        <div className="px-[2rem]">
          <p className="text-center text-[1.5rem]">
            RAPOR DAN PROFILE PESERTA DIDIK
          </p>
          <div className="flex justify-around text-[.8rem]">
            <div className="w-full flex justify-between py-[3rem]">
              <div className="w-[50%] space-y-[.5rem]">
                <div className="flex flex-row">
                  <p className="basis-6/12 md:basis-10/12">
                    Nama Peserta Didik
                  </p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-9/12 md:basis-9/12">
                    {studentData.nama_lengkap}
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-6/12 md:basis-10/12">NISN</p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-9/12 md:basis-9/12">{studentData.nisn}</p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-6/12 md:basis-10/12">Nama Sekolah</p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-9/12 md:basis-9/12">
                    {userData.nama_sekolah}
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-6/12 md:basis-10/12">Alamat Sekolah</p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-9/12 md:basis-9/12">
                    {userData.alamat_sekolah}
                  </p>
                </div>
              </div>
              <div className="w-[40%] space-y-[.5rem]">
                <div className="flex flex-row ">
                  <p className="basis-6/12 md:basis-9/12">Kelas</p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-9/12 md:basis-9/12">
                    {userData.kelas_angka}
                  </p>
                </div>
                <div className="flex flex-row ">
                  <p className="basis-6/12 md:basis-9/12">Semester</p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-9/12 md:basis-9/12">
                    {userData.semester}
                  </p>
                </div>

                <div className="flex flex-row ">
                  <p className="basis-6/12 md:basis-9/12">Tahun Pelajaran</p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-9/12 md:basis-9/12">
                    {userData.tahun_ajaran}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="space-y-[2rem]">
            <div className="space-y-[1rem]">
              <p className="font-bold">A. Kompetensi Sikap</p>
              <table className="w-full border border-black">
                <thead className="bg-blue-200">
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Deskripsi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-[.5rem] border-b border-r border-black">
                      1
                    </td>
                    <td className="px-[.5rem] border-b border-r border-black w-[10rem]">
                      Sikap Spiritual
                    </td>
                    <td className="px-[.5rem] border-b border-r border-black py-[1rem]">
                      Ananda SULPIKAR baik dalam ketaatan beribadah ,
                      berperilaku syukur, berdoa seblum dan sesudah melakukan
                      kegiatan, toleransi dalam beribadah
                    </td>
                  </tr>
                  <tr className="border-y border-black">
                    <td className="px-[.5rem] border border-black">2</td>
                    <td className="px-[.5rem] border border-black">
                      Sikap Sosial
                    </td>
                    <td className="px-[.5rem] border border-black py-[1rem]">
                      Ananda SULPIKAR baik dalam ketaatan beribadah ,
                      berperilaku syukur, berdoa seblum dan sesudah melakukan
                      kegiatan, toleransi dalam beribadah
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-[1rem]">
              <p className="font-bold">
                B. Kompetensi Pengetahuan dan Keterampilan
              </p>
              <table className="w-full border border-black">
                <thead className="bg-blue-200 text-[.5rem]">
                  <tr>
                    <th className="border border-black" rowSpan={2}>
                      No
                    </th>
                    <th className="border border-black" rowSpan={2}>
                      Mata Pelajaran
                    </th>
                    <th className="border border-black" colSpan={3}>
                      Pengetahuan
                    </th>
                    <th className="border border-black" colSpan={3}>
                      Keterampilan
                    </th>
                  </tr>
                  <tr>
                    <th className="px-[1rem] border border-black w-[1rem]">
                      Nilai
                    </th>
                    <th className="px-[1rem] border border-black w-[1rem]">
                      Predikat
                    </th>
                    <th className="px-[1rem] border border-black w-[27rem]">
                      Deskripsi
                    </th>
                    <th className="px-[1rem] border border-black w-[1rem]">
                      Nilai
                    </th>
                    <th className="px-[1rem] border border-black w-[1rem]">
                      Predikat
                    </th>
                    <th className="px-[1rem] border border-black w-[27rem]">
                      Deskripsi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {nilai.map((item: any, key: any) => (
                    <tr key={key}>
                      <td className="px-[.5rem] border-b border-r border-black">
                        {key + 1}
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black">
                        {item.mapel}
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black text-center">
                        {item.pengetahuan ? item.pengetahuan : "-"}
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black text-center">
                        {item.pengetahuan > 85
                          ? "A"
                          : item.pengetahuan > 70
                          ? "B"
                          : item.pengetahuan > 50
                          ? "C"
                          : "D"}
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black py-[1rem]">
                        Ananda SULPIKAR baik dalam ketaatan beribadah ,
                        berperilaku syukur, berdoa seblum dan sesudah melakukan
                        kegiatan, toleransi dalam beribadah
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black text-center">
                        {item.keterampilan ? item.keterampilan : "-"}
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black text-center">
                        {item.keterampilan > 85
                          ? "A"
                          : item.keterampilan > 70
                          ? "B"
                          : item.keterampilan > 50
                          ? "C"
                          : "D"}
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black py-[1rem]">
                        Ananda SULPIKAR baik dalam ketaatan beribadah ,
                        berperilaku syukur, berdoa seblum dan sesudah melakukan
                        kegiatan, toleransi dalam beribadah
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <p className="font-bold">Muatan Lokal</p>
                <table className="w-full border border-black">
                  <thead className="bg-blue-200 text-[.5rem]">
                    <tr>
                      <th className="border border-black" rowSpan={2}>
                        No
                      </th>
                      <th className="border border-black" rowSpan={2}>
                        Mata Pelajaran
                      </th>
                      <th className="border border-black" colSpan={3}>
                        Pengetahuan
                      </th>
                      <th className="border border-black" colSpan={3}>
                        Keterampilan
                      </th>
                    </tr>
                    <tr>
                      <th className="px-[1rem] border border-black w-[1rem]">
                        Nilai
                      </th>
                      <th className="px-[1rem] border border-black w-[1rem]">
                        Predikat
                      </th>
                      <th className="px-[1rem] border border-black w-[27rem]">
                        Deskripsi
                      </th>
                      <th className="px-[1rem] border border-black w-[1rem]">
                        Nilai
                      </th>
                      <th className="px-[1rem] border border-black w-[1rem]">
                        Predikat
                      </th>
                      <th className="px-[1rem] border border-black w-[27rem]">
                        Deskripsi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-[.5rem] border-b border-r border-black">
                        1
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black">
                        Matematika
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black text-center">
                        1
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black text-center">
                        B
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black py-[1rem]">
                        Ananda SULPIKAR baik dalam ketaatan beribadah ,
                        berperilaku syukur, berdoa seblum dan sesudah melakukan
                        kegiatan, toleransi dalam beribadah
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black text-center">
                        1
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black text-center">
                        B
                      </td>
                      <td className="px-[.5rem] border-b border-r border-black py-[1rem]">
                        Ananda SULPIKAR baik dalam ketaatan beribadah ,
                        berperilaku syukur, berdoa seblum dan sesudah melakukan
                        kegiatan, toleransi dalam beribadah
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* extra kurikuler */}
              <div className="space-y-[1rem]">
                <p className="font-bold">C. Ekstra Curikuler</p>
                <table className="w-full border border-black">
                  <thead>
                    <tr>
                      <th className="w-[1.4rem] border border-black font-light">
                        No
                      </th>
                      <th className="border border-black font-light">
                        Kegiatan
                      </th>
                      <th className="border border-black font-light">
                        Keterangan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr>
                      <td className="border border-black text-center">1.</td>
                      <td className="border border-black px-2 px-2">ahhay</td>
                      <td className="border border-black px-2 px-2">blok</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* saran-saran */}
              <div className="space-y-[1rem]">
                <p className="font-bold">D. Saran-saran</p>
                <table className="w-full border border-black">
                  <thead>
                    <tr>
                      <th className="w-[1.4rem] border border-black font-light text-left px-[.5rem]">
                        Alhamdulillah, ananda selama satu semester ini sudah
                        banyak penigkatan dalam prestasi belajarnya, mohon
                        ditingkatkan lagi prestasinya. Jangan lupa sholat lima
                        waktu dan selalu berdoa
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              {/* tinggi dan berat badan  */}
              <div className="space-y-[1rem]">
                <p className="font-bold">E. Tinggi dan Berat Badan</p>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th
                        className="border border-black text-[.8rem] font-light"
                        rowSpan={2}
                      >
                        No
                      </th>
                      <th
                        rowSpan={2}
                        className="border border-black text-[.8rem] font-light"
                      >
                        Aspek Yang Dinilai{" "}
                      </th>
                      <th
                        colSpan={2}
                        className="border border-black text-[.8rem] font-light"
                      >
                        Semester
                      </th>
                    </tr>
                    <tr>
                      <th className="border border-black text-[.8rem] font-light w-[10%] text-center">
                        1
                      </th>
                      <th className="border border-black text-[.8rem] font-light w-[10%] text-center">
                        2
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border border-black">
                    <tr>
                      <td className="w-[1rem] text-center border border-black">
                        1
                      </td>
                      <td className="px-[.5rem] border border-black">
                        Tinggi Badan
                      </td>
                      <td className="px-[.5rem] border border-black text-center">
                        134
                      </td>
                      <td className="text-center"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* tinggi dan berat badan  */}
              <div className="space-y-[1rem]">
                <p className="font-bold">F. Kondisi Kesehatan</p>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th
                        className="border border-black text-[.8rem] font-light w-[1rem]"
                        rowSpan={2}
                      >
                        No
                      </th>
                      <th
                        rowSpan={2}
                        className="border border-black text-[.8rem] font-light"
                      >
                        Aspek Fisik
                      </th>
                      <th
                        colSpan={2}
                        className="border border-black text-[.8rem] font-light"
                      >
                        Keterangan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center border border-black">1</td>
                      <td className="px-[.5rem] border border-black">
                        Pendengaran
                      </td>
                      <td className="px-[.5rem] border border-black">
                        Baik, normal
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center border border-black">1</td>
                      <td className="px-[.5rem] border border-black">
                        Penglihatan
                      </td>
                      <td className="px-[.5rem] border border-black">
                        Baik, normal
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center border border-black">1</td>
                      <td className="px-[.5rem] border border-black">Gigi</td>
                      <td className="px-[.5rem] border border-black">
                        Graham bawah kiri karies
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* tinggi dan berat badan  */}
              <div className="space-y-[1rem]">
                <p className="font-bold">E. Kondisi Kesehatan</p>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th
                        className="border border-black text-[.8rem] font-light w-[1rem]"
                        rowSpan={2}
                      >
                        No
                      </th>
                      <th
                        rowSpan={2}
                        className="border border-black text-[.8rem] font-light"
                      >
                        Jenis Prestasi
                      </th>
                      <th
                        colSpan={2}
                        className="border border-black text-[.8rem] font-light"
                      >
                        Keterangan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData?.keterangan_perkembangan_pesdik?.map(
                      (item: any, key: any) => (
                        <tr key={key}>
                          <td className="text-center border border-black">
                            {key}
                          </td>
                          <td className="px-[.5rem] border border-black"></td>
                          <td className="px-[.5rem] border border-black">
                            Peringkat 1
                          </td>
                        </tr>
                      )
                    )}
                    <tr>
                      <td className="text-center border border-black">1</td>
                      <td className="px-[.5rem] border border-black">Gigi</td>
                      <td className="px-[.5rem] border border-black">
                        Graham bawah kiri karies
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* ketidakhadiran */}
              <div className="space-y-[1rem]">
                <p className="font-bold">G. Ketidakhadiran</p>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="text-center border border-black">1</td>
                      <td className="px-[.5rem] border border-black">Sakit</td>
                      <td className="px-[.5rem] border border-black">1 Hari</td>
                    </tr>
                    <tr>
                      <td className="text-center border border-black">2</td>
                      <td className="px-[.5rem] border border-black">Ijin</td>
                      <td className="px-[.5rem] border border-black">1 Hari</td>
                    </tr>
                    <tr>
                      <td className="text-center border border-black">3</td>
                      <td className="px-[.5rem] border border-black">
                        Tanpa Keterangan
                      </td>
                      <td className="px-[.5rem] border border-black">1 Hari</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="justify-between flex ">
              <div className="text-center px-[2rem] space-y-[5rem]">
                <div>
                  <div>Orang Tua/Wali</div>
                </div>
                <div>{studentData.nama_wali}</div>
              </div>
              <div className="text-center px-[2rem] space-y-[5rem]">
                <div>
                  <div>
                    {userData.desa}, {date}
                  </div>
                  <div>Guru Kelas</div>
                </div>
                <div>
                  <div className="font-bold">
                    <u>{userData.guru_kelas}</u>{" "}
                  </div>
                  <div>NIP: {userData.nip}</div>
                </div>
              </div>
            </div>
            <div className="text-center px-[2rem] space-y-[5rem]">
              <div>
                <div>Mengetahui</div>
                <div>Kepala Sekolah</div>
              </div>
              <div>
                <div className="font-bold">
                  <u>{userData.kepala_sekolah}</u>{" "}
                </div>
                <div>NIP: {userData.nip_kepsek}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
