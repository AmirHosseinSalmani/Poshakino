import React from "react";
import { LuLayoutGrid } from "react-icons/lu";
import Link from "next/link";
function CategoryNav() {
  return (
    <div className="">
      <Link href={"/"} className="text-foterText flex flex-col items-center gap-1">
      <LuLayoutGrid className="text-xl" />
      <p className="text-[11px]">دسته بندی</p>
      </Link>
    </div>
  );
}

export default CategoryNav;
