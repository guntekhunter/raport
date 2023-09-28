import React from "react";

// @ts-ignore
export default function Input({ title, name, onChange, value, star }) {
  return (
    <div className="w-[30%]">
      <div className="text-[.7rem] flex">
        {title}{" "}
        {star === "on" ? (
          <p className="text-[#CB3A31] ml-1">*</p>
        ) : (
          <p className="hidden"></p>
        )}
      </div>
      <input
        value={value}
        name={name}
        onChange={onChange}
        className="h-[2rem] px-[.5rem] rounded-md border-[1.4px] border-gray-200 text-[.7rem] w-full"
        type="text"
        autoComplete="off"
      />
    </div>
  );
}
