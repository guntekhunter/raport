"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Users } from "../../../../typings";
import { format } from "date-fns";

//@ts-ignore
export default function Tabel() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("/api/users");
        setUsers(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  function formatDate(timestamp: any) {
    const date = new Date(timestamp);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    return format(date, "dd/MM/yy");
  }

  const data: Users[] = users;

  console.log(data);
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              No
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Name
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
          {data?.map((item, key) => (
            <tr key={key}>
              <td className="px-6 py-4 whitespace-no-wrap">{key + 1}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{item.email}</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                {formatDate(item.createAt)}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">{item.createAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
