import React from "react";
import { FiShoppingBag } from "react-icons/fi";

function ShoppingBag() {
  return (
    <div className=" pl-1 ">
        <button className="relative cursor-pointer">
          <FiShoppingBag className="text-[27px]" />
          <span className="absolute top-3.5 -left-1 bg-primary text-background px-1 text-[13px] rounded-[9px]">0</span>
        </button>
    </div>
  );
}

export default ShoppingBag;
