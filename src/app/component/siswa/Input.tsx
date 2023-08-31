import React from "react";

// @ts-ignore
export default function Input({ title }) {
  return (
    <div className="">
      <p className="text-[.7rem]">{title}</p>
      <input
        className="h-[2rem] px-[.5rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
        type="text"
        autoComplete="off"
        required
      />
    </div>
  );
}
