import Link from "next/link";
import React from "react";
import { GrFavorite } from "react-icons/gr";

function FavoriteNav() {
  return (
    <div>
      <Link
        href={"/"}
        className="text-foterText flex flex-col items-center gap-1"
      >
        <GrFavorite className="text-xl" />
        <p className="text-[11px]">علاقه مندی ها</p>
      </Link>
    </div>
  );
}

export default FavoriteNav;
