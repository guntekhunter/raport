import React, { useState } from "react";

//@ts-ignore
export default function DropDown({ drop, title }) {
  const [isDrop, setIsDrop] = useState(false);
  const [selected, setSelected] = useState(title);

  const dropDown = () => {
    setIsDrop(!isDrop);
    console.log("terkliknyami", { title });
    console.log(drop);
  };

  const select = (item: any) => {
    setSelected(item);
    setIsDrop(!isDrop);
  };

  const dropData = drop;
  console.log(dropData);
  return (
    <div className="relative">
      <button
        className="flex rounded-md transition-all duration-300"
        onClick={dropDown}
      >
        <p>{selected}</p>
      </button>
      <div
        className={`absolute bg-white right-0 rounded-md shadow-md top-[2.5rem] ${
          isDrop ? "block" : "hidden"
        }`}
      >
        <div className={`absolute bg-white right-0 rounded-md shadow-md z-10`}>
          {dropData?.map((item: any, key: any) => (
            <div
              key={key}
              className="hover:bg-gray-200 w-full px-[1rem] h-full p-[.2rem]"
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
