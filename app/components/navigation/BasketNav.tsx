"use client";

import { useShoppingCart } from "@/app/context/ShoppingContext";
import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";
function BasketNav() {
  const { basket } = useShoppingCart();
  return (
    <Link
      href={"/BasketPage"}
      className="relative flex flex-col items-center text-foterText cursor-pointer"
    >
      <RiShoppingCart2Line className="text-[26px] mb-1" />
      <span className="absolute top-2.5 left-0 bg-primary text-background px-[6.5px] text-[12px] rounded-sm">
        {basket.length.toLocaleString("fa-IR")}
      </span>
      <p className="text-[11px]">سبد خرید</p>
    </Link>
  );
}

export default BasketNav;
