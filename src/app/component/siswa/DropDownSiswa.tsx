"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

//@ts-ignore

export default function DropDownSiswa({drop,title,classCallback,name,isActive,label,
}) {
  const [isDrop, setIsDrop] = useState(false);
  const [selected, setSelected] = useState(title);
  const [active, setActive] = useState(false);

  const dropDown = () => {
    setIsDrop(!isDrop);
  };

  useEffect(() => {
    setSelected(title);
    if (isActive) {
      setActive(true);
    }
  }, [title, isActive]);

  console.log(title, active);

  const select = (item: any) => {
    setSelected(item);
    setActive(!active);
    setIsDrop(!isDrop);
    classCallback(item, name);
  };

  const dropData = drop;

  return (
    <div className="relative w-[30%]">
      <p className="text-[.7rem]">{label}</p>
      <button
        className="flex rounded-md bg-gray-100 border-[1.5px] border-gray-200 w-full justify-between px-[.5rem] h-[2rem] items-center "
        onClick={dropDown}
      >
        <p
          className={`text-[.7rem] ${active ? "text-black " : "text-gray-400"}`}
        >
          {selected}
        </p>
        <div className="flex items-bottom pt-[.1rem]">
          <Image
            src="/down.png"
            alt=""
            width={500}
            height={500}
            className="w-[1.2rem]"
          />
        </div>
      </button>
      <div
        className={`absolute bg-white right-0 rounded-md shadow-md top-[3rem] transition-all duration-300 text-[.7rem] ${
          isDrop ? "block" : "hidden"
        }`}
      >
        <div
          className={`absolute bg-white right-0 rounded-md shadow-md z-10 border border-[1.5px] border-gray-200`}
        >
          {dropData?.map((item: any, key: any) => (
            <div
              key={key}
              className="hover:bg-gray-200 w-full px-[1rem] h-full p-[.2rem] flex justify-center"
              onClick={(e) => select(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
