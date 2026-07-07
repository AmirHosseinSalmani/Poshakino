"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CategoryNode } from "@/app/types/category";

type CategoryPageProp = {
  isOpen: boolean;
};

function CategoryPage({ isOpen }: CategoryPageProp) {
  const [product, setProduct] = useState<CategoryNode[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("/Api/Category/Category.json");
        if (!res.ok) throw new Error("اطلاعات دریافت نشد");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error :", error);
      }
    }
    getProducts();
  }, []);
  return (
    <nav
      className={` grid grid-cols-4 absolute top-full tablet:left-2/11 laptop:left-1/9 desktop:left-2/22 ${isOpen ? "opacity-100 visible" : "opacity-0 hidden invisible"} laptop:w-[94%] tablet:w-[88%] h-84 border-t-0 border-foter rounded-b-2xl bg-background border z-50 shadow-md p-5 transition-all ease-in-out duration-300 `}
    >
      {product?.map((category) => (
        <div key={category.id}>
          <div className="flex items-center gap-2.5">
            <div className="h-4 px-0.5 bg-primary"></div>
            <p className="text-[19px] font-vazir font-bold">{category.title}</p>
          </div>
          <ul className="flex flex-col m-1">
            {category.children?.map((items) => (
              <Link
                href={`./${category.slug}/${items.slug}`}
                key={items.id}
                className="text-[13px] py-2 text-foterText hover:text-text hover:boreder"
              >
                {items.title}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default CategoryPage;
