import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
function SpecialOffer() {
  return (
    <div className="border laptop:border-0 border-foterli p-4 rounded-xl">
      <h5 className="font-lalezar text-lg text-red pb-4">پیشنهاد ویژه !</h5>
      <div className="flex laptop:flex-col gap-4.5 text-foterText">
        <FaTelegramPlane />
        <FiHeart />
        <FaTelegramPlane />
      </div>
    </div>
  );
}

export default SpecialOffer;
