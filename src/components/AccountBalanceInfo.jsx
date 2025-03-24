import React from "react";
import addIcon from "../assets/Group 2.svg";
import shareIcon from "../assets/Group 3.svg"; 
import openEye from "../assets/view 1.svg"; 

function AccountBalanceInfo() {
  return (
    <div className="flex justify-between mt-[50px] mb-5">
      {/* Account Info */}
      <div className="flex flex-col bg-[#0061FF] text-white shadow-[0px_0px_20px_5px_#5B5B5B1A] rounded-[20px] p-[40px_35px] w-[18%] h-[170px]">
        <p className="text-[22px]">Account No.</p>
        <p className="text-[32px] font-bold mt-[10px]">100899</p>
      </div>

      {/* Balance Info */}
      <div className="flex justify-between bg-white text-black rounded-[20px] p-[40px_35px] w-[77%]">
        <div className="flex">
          <div className="flex flex-col">
            <p className="text-[24px]">Balance</p>
            <p className="text-[36px] font-semibold mt-[10px]">Rp 10.000.000,00</p>
          </div>
          <div className="material-symbols-outlined text-[36px] text-[#a4a4a4] ml-[70px] mt-[55px]">
            <img src={openEye} alt="Open Eye"/>
          </div>
        </div>
        
        {/* Icons */}
        <div className="flex gap-[30px] mt-[40px] h-[60px]">
          <img
            src={addIcon}
            alt="Add"
            className="p-[13px] bg-[#0061FF] rounded-[10px] shadow-[0px_0px_10px_0px_#19918F] object-cover"
          />
          <img
            src={shareIcon}
            alt="Share"
            className="p-[13px] bg-[#0061FF] rounded-[10px] shadow-[0px_0px_10px_0px_#19918F] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AccountBalanceInfo;
