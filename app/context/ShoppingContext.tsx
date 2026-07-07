"use client";

import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { ProductProps } from "../types/products";
import { ReactNode } from "react";

type ShoppingProviderProp = {
  children: ReactNode;
};
type AddToBasket = {
  product: ProductProps;
};
interface Reduction {
  setContProduct: React.Dispatch<React.SetStateAction<number>>;
  countProduct: number;
}
interface Incerease extends Reduction {
  count: number;
}
type RemoveItem = {
  productId: number;
};
type ShoppingContextType = {
  basket: ProductProps[];
  incerease: (prop: Incerease) => void;
  reduction: (prop: Reduction) => void;
  addToBasket: (prop: AddToBasket) => void;
  removeItem: (prop: RemoveItem) => void;
};
const ShoppingContext = createContext<ShoppingContextType | null>(null);

export function ShoppingProvider({ children }: ShoppingProviderProp) {
  const [basket, setBasket] = useState<ProductProps[]>(() => {
    if (typeof window === "undefined") return [];

    const data = localStorage.getItem("basket");

    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const incerease = ({ count, setContProduct, countProduct }: Incerease) => {
    if (countProduct < count) {
      setContProduct(countProduct + 1);
    }
  };
  const reduction = ({ setContProduct, countProduct }: Reduction) => {
    if (countProduct > 1) {
      setContProduct(countProduct - 1);
    }
  };
  function addToBasket({ product }: AddToBasket) {
    const isInBasket = basket.some((cart) => cart.id === product.id);
    if (!isInBasket) {
      setBasket((cart) => [...cart, product]);
    }
  }

  function removeItem({ productId }: RemoveItem) {
    setBasket((prev) => prev.filter((cart) => cart.id !== productId));
  }

  return (
    <ShoppingContext.Provider
      value={{
        basket,
        addToBasket,
        removeItem,
        incerease,
        reduction,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export function useShoppingCart() {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error("قبلا به سبد اضافه شده");
  }
  return context;
}
