"use client";
import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { ProductProps } from "@/app/types/products";

function FetchPage() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  useEffect(() => {
    async function FetchProducts() {
      try {
        const res = await fetch("Api/product/Product.json");
        console.log(res);
        if (!res.ok) {
          throw new Error("محصولی وجود ندارد");
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        console.log(err);
      }
    }
    FetchProducts();
  }, []);

  return (
    <ul className="grid grid-cols-2 items-center tablet:border border-foterli  p-6 rounded-lg gap-11 desktop:grid-cols-5 laptop:grid-cols-4 tablet:grid-cols-3">
      {products.map((product) => (
        <li key={product.id}>
          <ProductsCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default FetchPage;
