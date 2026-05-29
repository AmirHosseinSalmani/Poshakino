import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
function LaginSingUp() {
  return (
    <div className="flex items-center gap-x-2 text-[13px] laptop:text-[16px] laptop:h-12 h-9">
      <div className=" flex gap-x-2 border border-px rounded-2xl border-foterli font-lalezar font-extrabold h-full">
        <div className="flex gap-x-1.5 items-center cursor-pointer bg-primary px-5 rounded-2xl">
          <HiOutlineUser size={15} color="background" />
          <p className="text-background">ورود</p>
        </div>
        <div className="flex gap-x-1.5 items-center cursor-pointer px-3 ml-1">
          <FiLogIn className="pb-0.5" />
          <p>ثبت نام</p>
        </div>
      </div>
      <img
        src="image/domingo_177973976365.png"
        alt="Site Logo"
        className="w-23 laptop:w-34 laptop:h-21"
      />
    </div>
  );
}

export default LaginSingUp;
