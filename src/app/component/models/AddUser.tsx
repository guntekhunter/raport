import React from "react";

//@ts-ignore
export default function addUser({ className }) {
  return (
    <div className={`absolute w-full h-[80vh] ${className}`}>
      <div className="sticky top-[5rem] relative">
        <div className="bg-green-200 py-5 px-5 rounded-md border-[1.5px] border-green-500 text-green-500 w-[18rem] flex justify-center absolute right-[10%]">
          Success adding a new user
        </div>
      </div>
    </div>
  );
}
