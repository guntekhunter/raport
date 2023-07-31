import React from "react";

//@ts-ignore
export default function addUser({ className }) {
  return (
    <div className={`absolute py-[2rem] right-[10%] ${className}`}>
      <div className="bg-green-200 py-5 px-5 rounded-md border-[1.5px] border-green-500 text-green-500">
        Success adding a new user
      </div>
    </div>
  );
}
