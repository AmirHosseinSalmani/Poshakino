"use client";
import { useShoppingCart } from "@/app/context/ShoppingContext";
import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";

type ShoppingBagPrope = {
  sizeIcon: number;
  sizeText: number;
};

function ShoppingBag({ sizeIcon, sizeText }:ShoppingBagPrope) {
  const { basket } = useShoppingCart();
  return (
    <Link href={"/BasketPage"}>
      <div className=" pl-1 mt-2">
        <button className="relative cursor-pointer">
          <RiShoppingCart2Line size={sizeIcon} />
          <span
          style={{fontSize:`${sizeText}px`}}
            className={`absolute top-2.5 -left-1 bg-primary text-background px-1.5 rounded-sm pt-0.5`}
          >
            {basket.length.toLocaleString("fa-IR")}
          </span>
        </button>
      </div>
    </Link>
  );
}

export default ShoppingBag;
