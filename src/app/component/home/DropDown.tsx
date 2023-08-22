"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

//@ts-ignore
export default function DropDown({drop,title,classCallback,name,isActive,
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
    <div className="relative">
      <button
        className="flex rounded-md bg-gray-100 border-[1.5px] border-gray-200 w-[6rem] justify-between px-[.5rem]"
        onClick={dropDown}
      >
        <p className={`${active ? "text-black" : "text-gray-400"}`}>
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
        className={`absolute bg-white right-0 rounded-md shadow-md top-[2.5rem] transition-all duration-300  ${
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
