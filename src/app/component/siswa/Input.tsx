import React from "react";

// @ts-ignore
export default function Input({ title, name, onChange }) {
  return (
    <div className="w-[30%]">
      <p className="text-[.7rem]">{title}</p>
      <input
        name={name}
        onChange={onChange}
        className="h-[2rem] px-[.5rem] rounded-md border-[1.4px] border-gray-200 text-[.7rem] w-full"
        type="text"
        autoComplete="off"
      />
    </div>
  );
}
