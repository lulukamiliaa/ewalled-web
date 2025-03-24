import React from "react";
import profilePhoto from "../assets/Mask group.svg";
import authStore from "../store/AuthStore";

function Greeting() {
  const currentUser = authStore((state) => state.currentUser); // Get logged-in user

  // Get first name
  const firstName = currentUser ? currentUser.fullName.split(" ")[0] : "Guest";

  return (
    <div className="flex justify-between items-center pt-[40px]">
      <div>
        <p className="text-[60px] font-bold">Good Morning, {firstName}</p>
        <p className="text-[24px] font-normal">
          Check all your incoming and outgoing transactions here
        </p>
      </div>

      <div className="flex items-center">
        <div className="text-right pr-[20px]">
          <p className="text-[16px] font-bold">
            {currentUser?.fullName || "Guest"}
          </p>
          <p className="text-[16px] font-normal">Personal Account</p>
        </div>
        <img
          src={profilePhoto}
          alt="Profile"
          className="w-[75px] h-[75px] rounded-full border-[7px] border-[#0061FF] object-cover"
        />
      </div>
    </div>
  );
}

export default Greeting;
