"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

//@ts-ignore
export default function Tabel({ users }) {
  const [theUsers, setTheUsers] = useState();
  useEffect(() => {
    setTheUsers(users);
    // const fetch = async () => {
    //   try {
    //     const res = await axios.get("/api/users");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetch();
  }, [theUsers, users]);
  console.log(users);
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Age
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Create At
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Update At
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap">Jane Smith</td>
            <td className="px-6 py-4 whitespace-no-wrap">28</td>
            <td className="px-6 py-4 whitespace-no-wrap">
              jane.smith@example.com
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
