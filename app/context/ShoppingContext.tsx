"use client";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { BasketItemProps, ProductProps } from "../types/products";
import { ReactNode } from "react";

type ShoppingProviderProp = {
  children: ReactNode;
};
type AddToBasket = {
  product: ProductProps;
};
type ProductID = {
  productID: number;
};
type ShoppingContextType = {
  basket: BasketItemProps[];
  incerease: (prop: ProductID) => void;
  reduction: (prop: ProductID) => void;
  addToBasket: (prop: AddToBasket) => void;
  removeItem: (prop: ProductID) => void;
};
const ShoppingContext = createContext<ShoppingContextType | null>(null);

export function ShoppingProvider({ children }: ShoppingProviderProp) {
  const [basket, setBasket] = useState<BasketItemProps[]>([]);
  useEffect(() => {
    const data = localStorage.getItem("basket");

    if (data) {
      setBasket(JSON.parse(data));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const incerease = ({ productID }: ProductID) => {
    setBasket((prev) =>
      prev.map((pro) =>
        pro.id === productID ? { ...pro, quantity: pro.quantity + 1 } : pro,
      ),
    );
  };
  const reduction = ({ productID }: ProductID) => {
    setBasket((prev) =>
      prev.map((pro) =>
        pro.id === productID ? { ...pro, quantity: pro.quantity - 1 } : pro,
      ),
    );
  };
  function addToBasket({ product }: AddToBasket) {
    const isInBasket = basket.some((cart) => cart.id === product.id);
    if (!isInBasket) {
      setBasket((cart) => [...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeItem({ productID }: ProductID) {
    setBasket((prev) => prev.filter((cart) => cart.id !== productID));
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
