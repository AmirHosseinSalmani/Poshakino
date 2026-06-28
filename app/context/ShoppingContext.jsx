"use client";

import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const ShoppingContext = createContext();

export function ShoppingProvider({ children }) {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("basket");
    console.log(data);
    if (data) {
      setBasket(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const incerease = (count, setContProduct, countProduct) => {
    if (countProduct < count) {
      setContProduct(countProduct + 1);
    }
  };
  const reduction = (setContProduct, countProduct) => {
    if (countProduct > 1) {
      setContProduct(countProduct - 1);
    }
  };
  function addToBasket(product) {
    const isInBasket = basket.some((cart) => cart.id === product.id);
    if (!isInBasket) {
      setBasket((cart) => [...cart, product]);
    }
  }

  function removeItem(productId) {
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
