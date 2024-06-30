import React from "react";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";

const UserDetails = ({ user }) => {
  if (!user) {
    return <div>Please select a user to see details.</div>;
  }

  return (
    <div className="user-details p-4 flex flex-col gap-2 bg-black text-white">
      <div className="flex gap-4">
        <img
          src={user.avatar}
          alt={user.id}
          className="w-24 h-24 rounded-full mb-4"
        />
        <div className="flex flex-col">
          <h2 className="mb-2 text-2xl font-bold">
            {user.profile.firstName} {user.profile.lastName}
          </h2>
          <p className="text-gray-300">{user.profile.username}</p>
          <p className="text-gray-300">{user.profile.email}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="flex gap-2 items-center"><PiShoppingBagOpenLight fontSize={25} className="text-gray-400" /> <span>{user.jobTitle}</span></p>
        <p className="flex gap-2 items-center"><MdOutlinePersonOutline fontSize={25} className="text-gray-400" /> <span>{user.Bio}</span></p>
        <p className="flex gap-2 items-center"><IoMdCalendar fontSize={25} className="text-gray-400" /> <span>{user.createdAt}</span></p>
      </div>
    </div>
  );
};

export default UserDetails;
