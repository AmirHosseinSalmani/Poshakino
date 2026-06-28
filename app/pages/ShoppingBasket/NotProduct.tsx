import Image from "next/image";
import Link from "next/link";
function NotProduct() {
  return (
      <div className="w-full h-full flex flex-col gap-6 justify-center items-center mt-50">
        <Image
          src={"/image/empty-cart.svg"}
          width={200}
          height={200}
          className="w-30 laptop:w-52"
          alt="Not Found"
        />
        <p className="text-md laptop:text-xl">
          هنوز محصولی به سبد خرید اضافه نکردید 😊
        </p>
        <Link href={"/"} className="text-foterText">
          برای انتخاب محصول کلیک کنید
        </Link>
      </div>
  );
}

export default NotProduct;
