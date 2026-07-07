"use client";
import { useState } from "react";
import { useShoppingCart } from "@/app/context/ShoppingContext";
import { LuTrash2 } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "@/app/types/products";

type ShoppingPageProp = {
  product: ProductProps;
};

function ShoppingPage({ product }: ShoppingPageProp) {
  const { incerease, reduction, removeItem } = useShoppingCart();
  const [countProduct, setContProduct] = useState(1);
  const sumPrice = product.price * countProduct;
  const sumPriceOffer = product.offer * countProduct;
  const priceOffer = product.price * countProduct - sumPriceOffer;
  return (
    <div>
      <div className="h-54 border-b border-foterli rounded-lg laptop:border p-5">
        {/* حزيیات محصول */}
        <div className="flex gap-10">
          <Link href={`/product/${product.id}`} key={product.id}>
            <Image
              src={product.image}
              className="rounded shadow-xl"
              width={90}
              height={100}
              alt={product.name}
            />
          </Link>
          <div className="">
            <p className="text-sm mb-2.5">{product.name}</p>
            <ul className="flex flex-col gap-1 text-[12px] text-foterText">
              <li>رنگ</li>
              <li>رنگ</li>
              <li>رنگ</li>
            </ul>
          </div>
        </div>

        {/* تعداد و  قیمت خرید */}

        <div className="flex justify-end gap-15">
          {/* تعداد */}

          <div className="flex items-center w-25 justify-between text-lg border border-foterli px-2 rounded-md text-red">
            <button
              className="text-xl cursor-pointer px-2"
              onClick={() =>
                incerease({
                  count: product.count,
                  countProduct,
                  setContProduct,
                })
              }
            >
              +
            </button>
            <p className="font-vazir">{countProduct.toLocaleString("fa-IR")}</p>
            <button
              className="text-xl px-2 cursor-pointer"
              onClick={() => reduction({ setContProduct, countProduct })}
            >
              {countProduct == 1 ? (
                <LuTrash2
                  size={14}
                  onClick={() => removeItem({ productId: product.id })}
                />
              ) : (
                "-"
              )}
            </button>
          </div>

          {/* قیمت */}

          <div className="w-24">
            {product.offer ? (
              <div>
                <div className="flex items-center gap-1">
                  {priceOffer.toLocaleString("fa-IR")}
                  <p className="text-sm">تومان</p>
                </div>
                <div className="flex gap-1 text-sm text-foter">
                  <p className="line-through">
                    {sumPrice.toLocaleString("fa-IR")}
                  </p>
                  <p>تومان</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                {sumPrice.toLocaleString("fa-IR")}
                <p className="text-sm">تومان</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingPage;
