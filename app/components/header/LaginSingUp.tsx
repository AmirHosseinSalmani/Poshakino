import { HiOutlineUser } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
function LaginSingUp() {
  return (
    <div className="flex items-center gap-x-2 text-[12px] laptop:text-[14px] laptop:h-11.5 h-8">
      <div className=" flex gap-x-2 border border-px rounded-xl border-foterli font-vazir font-extrabold h-full">
        <div className="flex gap-x-1.5 items-center cursor-pointer bg-primary px-3.5 laptop:px-5 rounded-xl">
          <HiOutlineUser size={15} color="background" />
          <p className="text-background">ورود</p>
        </div>
        <div className="gap-x-1.5 items-center cursor-pointer px-3 ml-1 hidden laptop:flex">
          <FiLogIn className="pb-0.5" />
          <p>ثبت نام</p>
        </div>
      </div>
      <Link href={"/"}>
        <Image
          src="/image/domingo_177973976365.png"
          alt="Site Logo"
          className="w-23 laptop:w-34 laptop:h-21"
          width={300}
          height={200}
        />
      </Link>
    </div>
  );
}

export default LaginSingUp;
