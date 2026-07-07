"use client";
import { useShoppingCart } from "../context/ShoppingContext";
import ShoppingPage from "../pages/ShoppingBasket/page";
import NotProduct from "../pages/ShoppingBasket/NotProduct";
import HeaderPage from "../pages/Header/page";
import MobileNav from "../pages/Header/MobileNav";

function BasketPage() {
  const { basket } = useShoppingCart();
  return (
    <>
      <HeaderPage />
      <div>
        {basket.length === 0 ? (
          <NotProduct />
        ) : (
          <ul className="grid grid-col gap-3 laptop:grid-cols-3 bor">
            {basket.map((list) => (
              <ShoppingPage product={list} key={list.id} />
            ))}
          </ul>
        )}
      </div>
      <MobileNav />
    </>
  );
}

export default BasketPage;
