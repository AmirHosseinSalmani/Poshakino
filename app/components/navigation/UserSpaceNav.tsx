import React from "react";
import Link from "next/link";
import { RiProfileLine } from "react-icons/ri";
function UserSpaceNav() {
  return (
    <div>
      <Link
        href={"/"}
        className="text-foterText flex flex-col items-center gap-1"
      >
        <RiProfileLine className="text-xl" />
        <p className="text-[11px]">حساب کاربری</p>
      </Link>
    </div>
  );
}

export default UserSpaceNav;
