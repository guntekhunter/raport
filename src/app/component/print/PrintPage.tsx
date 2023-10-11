"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

// @ts-ignore
export default function PrintPage({ id }) {
  const [student, setStudent] = useState<any>([]);
  const ref = useRef<HTMLDivElement>(null);
  const print = useReactToPrint({
    content: () => ref.current,
  });

  useEffect(() => {
    const fetchStudent = async () => {
      if (id) {
        try {
          const data = await axios.get(
            `http://localhost:3000/api/print?id=${id}`
          );
          setStudent(data.data.student);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchStudent();
  }, [id]);

  useEffect(() => {
    if (id) {
      print();
    }
  }, [id, print]);

  console.log(student);

  if (!student) return null;

  return (
    <div className="flex justify-between py-2" ref={ref}>
      <div>{student?.nama_lengkap}</div>
    </div>
  );
}
