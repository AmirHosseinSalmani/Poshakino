"use client";

import { MdPhone } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import CategoryPage from "@/app/components/header/Menu/CategoryPage";
import { useState } from "react";
function NavarPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="relative mt-2">
      <ul className="flex gap-3.5 font-cairo text-[14px] font-medium ">
        <li className="relative group flex items-center gap-1.5 transition-colors duration-100  cursor-pointer">
          <IoHomeSharp size={14} />
          <p>صفحه اصلی</p>
          <div className="absolute bottom-0 left-1/2 w-0 h-px bg-primary group-hover:w-full group-hover:left-0 transition-all duration-500 ease-in-out "></div>
        </li>
        <li
          className="relative flex items-center gap-1.5 py-4 group transition-colors duration-100 cursor-pointer"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <FaStore size={14} />
          <p>دسته بندی ها</p>
          <span>
            <BiChevronDown size={15} className="mt-0.5 ml-0.5 " />
          </span>
          <div className="absolute z-50 right-0 left-0 top-13 w-screen">
            <CategoryPage isOpen={isOpen} />
          </div>
          <div className="absolute bottom-0 left-1/2 w-0 h-px bg-primary group-hover:w-full group-hover:left-0 transition-all duration-500 ease-in-out"></div>
        </li>
        <li className="relative flex items-center gap-1.5 group transition-colors duration-100 cursor-pointer">
          <IoInformationCircle size={17} />
          <p>درباره ما</p>
          <div className="absolute bottom-0 left-1/2 w-0 h-px bg-primary group-hover:w-full group-hover:left-0 transition-all duration-500 ease-in-out "></div>
        </li>
        <li className="relative flex items-center gap-1.5 group transition-colors duration-100 cursor-pointer">
          <MdPhone size={14.5} />
          <p>تماس با ما</p>
          <div className="absolute bottom-0 left-1/2 w-0 h-px bg-primary group-hover:w-full group-hover:left-0 transition-all duration-500 ease-in-out "></div>
        </li>
      </ul>
    </nav>
  );
}

export default NavarPage;
