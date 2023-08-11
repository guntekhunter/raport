import React, { useState } from "react";

//@ts-ignore
export default function DropDown({ drop }) {
  const [isDrop, setIsDrop] = useState(false);
  const [selected, setSelected] = useState("");

  const dropDown = () => {
    setIsDrop(!isDrop);
  };
  console.log(drop);
  console.log(isDrop);

  const dropData = drop;
  console.log(dropData);
  return (
    <div className="relative">
      <button
        className="flex rounded-md transition-all duration-300"
        onClick={dropDown}
      >
        <p>Ganjil</p>
      </button>
      <div
        className={`absolute bg-white right-0 rounded-md shadow-md top-[2.5rem] ${
          isDrop ? "block" : "hidden"
        }`}
      >
        {drop?.map((item: any, key: any) => {
          <li
            key={key}
            className="hover:bg-gray-200 w-full px-[1rem] h-full p-[.2rem]"
          >
            {item}
          </li>;
        })}
      </div>
    </div>
  );
}
