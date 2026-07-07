import { GetProduct } from "@/app/components/products/GetProduct";
import React from "react";
import { ProductProps } from "@/app/types/products";
import HeaderPage from "@/app/pages/Header/page";
import Image from "next/image";
import NavShop from "@/app/components/products/NavShop";
import SpecialOffer from "@/app/components/products/SpecialOffer";
import DetailsProducts from "@/app/components/products/DetailsProducts";
import HeaderMobile from "@/app/components/header/HeaderMobile";

type PageProps = {
  params: {
    id: number;
  };
};
type colorProps = {
  color: string;
};
async function ProductDetails({ params }: PageProps) {
  const { id } = await params;
  const products = await GetProduct();

  const Product = products.find(
    (product: ProductProps) => product.id === Number(id),
  );
  return (
    <div className="relative laptop:static">
      <HeaderPage />
      <HeaderMobile />
      <div className="flex justify-center gap-2 flex-col p-5 laptop:flex-row w-full laptop:mt-25">
        <SpecialOffer />
        <div className="flex flex-col justify-center gap-10 w-full laptop:flex-row items-center laptop:w-8/10 border border-foterli rounded-xl">
          <div className="p-4">
            <Image
              src={Product.image}
              alt={`تصویر ${Product.name}`}
              className="rounded-xl w-28 laptop:w-60"
              width={400}
              height={400}
            />
          </div>
          <div className="laptop:border-l laptop:border-r w-full border-foterli laptop:w-2/5">
            <p className="border-b border-foterli text-xl">{Product.name}</p>
            <div className="flex gap-3">
              <p>رنگ بندی:</p>
              {Product.colors.map((color: colorProps) => (
                <div
                  style={{ backgroundColor: `${color}` }}
                  className="w-5 h-5 rounded-2xl border border-background"
                  key={`${color}`}
                ></div>
              ))}
            </div>
          </div>
          <div className=" wfulllaptop:w-1/5 p-4">
            <DetailsProducts details={Product} />
            <NavShop product={Product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
