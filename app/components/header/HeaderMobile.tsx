"use client";
import { LuX, LuSearch } from "react-icons/lu";
import ShoppingBag from "./ShoppingBag";
import { useRouter } from "next/navigation";
function HeaderMobile() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center px-4 wfull h-14 laptop:hidden">
      <button onClick={() => router.push("/")} className="cursor-pointer">
        <LuX size={20} />
      </button>
      <div className="flex items-center gap-4">
        <LuSearch size={21} />
        <ShoppingBag sizeIcon={21} sizeText={9} />
      </div>
    </div>
  );
}

export default HeaderMobile;
