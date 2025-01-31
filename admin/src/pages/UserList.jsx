import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const UsersList = ({ token }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/user/list", {
        headers: { token },
      });
      if (response.data.success) {
        setUsers(response.data.users);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <p className="mb-2 text-lg font-semibold">Users List</p>
      <div className="flex flex-col gap-4">
        {/* Table header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr] items-center py-2 px-4 border bg-gray-100 text-sm font-bold">
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
        </div>

        {/* Users List */}
        {users.map((user) => (
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] items-center gap-4 py-2 px-4 border text-sm bg-white rounded-md shadow-sm"
            key={user._id}
          >
            <div className="text-center md:text-left">
              <p className="font-semibold">{user.name}</p>
            </div>

            <p className="hidden md:block">{user.email}</p>
            <p className="text-center md:text-left">{user.phone}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersList;
