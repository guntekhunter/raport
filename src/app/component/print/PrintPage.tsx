"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

// @ts-ignore
export default function PrintPage({ id }) {
  const [student, setStudent] = useState([]);
  const ref = useRef<HTMLDivElement>(null);
  const print = useReactToPrint({
    content: () => ref.current,
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await axios.get(
          `http://localhost:3000/api/print?id=${id}`
        );
        setStudent(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudent();
  }, [id]);

  useEffect(() => {
    if (id) {
      print();
    }
  }, [id]);

  console.log(student);
  return (
    <div className="relative" ref={ref}>
      <div className="justify-around flex">ommalekanya mi kjsda ahhay</div>
    </div>
  );
}
