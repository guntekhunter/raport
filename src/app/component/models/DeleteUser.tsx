import React from "react";

// @ts-ignore
export default function deleteUser({ className }) {
  return (
    <div className={`absolute w-full h-full h-[80vh] ${className}`}>
      <div className="sticky top-[5rem] relative">
        <div className="bg-red-200 py-5 px-5 rounded-md border-[1.5px] border-red-500 text-red-500 w-[10rem] flex justify-center absolute right-[10%]">
          user deleted
        </div>
      </div>
    </div>
  );
}
