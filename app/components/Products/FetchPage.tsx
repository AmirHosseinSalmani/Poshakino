"use client";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import type { ProductsType } from "@/app/types/products";
function FetchPage() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  useEffect(() => {
    async function FetchProducts() {
      try {
        const res = await fetch("Api/product/Product.json");
        if (!res.ok) {
          throw new Error("محصولی وجود ندارد");
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    FetchProducts();
  }, []);
  return (
    <div>
      <Products props={products} />
    </div>
  );
}

export default FetchPage;
