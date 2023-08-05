"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

//@ts-ignore
export default function AllertDelete({className, cancelCallback, callbackDeleted, id,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/users", {
        id,
      });
      callbackDeleted(true, res.data.users);
      cancelCallback(false);
      setTimeout(() => {
        callbackDeleted(false, res.data.users);
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const cancelDelete = () => {
    cancelCallback(false);
  };
  return (
    <div className={`absolute w-full h-[80vh] ${className}`}>
      <div className="sticky top-[5rem] relative">
        <div className="py-5 px-5 rounded-md bg-white shadow-md w-[18rem] flex justify-center absolute left-1/2 transform -translate-x-1/2 ">
          <div className="space-y-5">
            <div>Anda yakin ingin menghapus user {id}</div>
            <div className="flex justify-between">
              <button
                className="bg-blue-200 px-4 py-2 rounded-md text-blue-400 border-[1.4px] border-blue-400"
                onClick={cancelDelete}
              >
                cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-200 px-4 py-2 rounded-md text-red-400 border-[1.4px] border-red-400"
              >
                {isLoading ? <p>deleting</p> : <p>delete</p>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
