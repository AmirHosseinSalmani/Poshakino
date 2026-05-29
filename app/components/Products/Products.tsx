import { ProductsType } from "@/app/types/products";
import React from "react";

function Products({ props }) {
  // const [id, category, abuotProduct, image, price, rating] = props;
  // console.log(id);
  console.log("dfgdg");
  return (
    <ul className="relative w-52">
      {props.map((product : ProductsType) => {
        <li className="absolute bottom-0">
          <p> {product.id}: کد</p>
          <p className="text-black text-5xl">dfggggggggg</p>
        </li>;
      })}
    </ul>
  );
}

export default Products;
