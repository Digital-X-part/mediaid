"use client";
import Image from "next/image";
import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";

const CustomersTable = ({ users }) => {
  const [show, setShow] = useState([false, null]);
  const toggleDots = (index) => {
    setShow([!show[0], index || null]);
  };
  return (
    <div className="overflow-x-auto pb-16">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-sm bg-slate-100 font-semibold">
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Joined</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="text-gray-600 relative">
              <th>{index + 1}</th>
              <td>
                <div className="flex gap-1 md:gap-2 items-center">
                  <Image
                    src={user.image}
                    alt="userImage"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <p className="text-sm font-medium text-gray-600">
                    {user.name}
                  </p>
                </div>
              </td>
              <td className="text-blue-500">{user.email}</td>
              <td className="text-blue-500">{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.joined}</td>
              <td>
                <button onClick={() => toggleDots(index + 1)}>
                  <FaEllipsisH className="w-4 h-4 text-gray-500"></FaEllipsisH>
                </button>
              </td>
              <div
                className={`bg-white flex flex-col items-start border shadow p-2 z-10 w-[150px] rounded-md h-fit absolute right-7 top-10 ${
                  show[0] && show[1] === index + 1 ? "" : "hidden"
                }`}>
                <button
                  onClick={() => toggleDots()}
                  className="text-gray-500 text-sm font-medium hover:bg-slate-100 w-full text-left px-2 py-1 rounded">
                  Edit
                </button>
                <button
                  onClick={() => toggleDots()}
                  className="text-red-500 text-sm font-medium hover:bg-slate-100 w-full text-left px-2 py-1 rounded">
                  Delete
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
