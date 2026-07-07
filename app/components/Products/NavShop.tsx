"use client";
import { useShoppingCart } from "@/app/context/ShoppingContext";
import { ProductProps } from "@/app/types/products";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type NavShop = {
  product: ProductProps;
};
function NavShop({ product }: NavShop) {
  const { addToBasket, basket } = useShoppingCart();
  const isInBasket = basket.some((cart) => cart.id === product.id);
  const priceOffer = product.price - product.offer!;
  return (
    <div className="flex fixed laptop:static bottom-0  right-0 w-full border-t-2 border-foterli justify-between items-center p-4 pb-5 bg-background">
      <AnimatePresence mode="wait">
        {isInBasket ? (
          <motion.div
            key={"dataProduct"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.15 }}
          >
            <Link href={"/BasketPage"}>
              <button className="cursor-pointer px-5 py-3 rounded-lg bg-primary text-background text-[13px] font-vazir">
                نمایش در سبد خرید
              </button>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key={"dataProduct"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.15 }}
          >
            <button
              className="cursor-pointer px-5 py-3 rounded-lg bg-primary text-background text-[13px] font-vazir"
              onClick={() => addToBasket({product})}
            >
              افزودن به سبد خرید
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex justify-center items-center gap-1.5 w-30 font-vazir text-sm">
        <div className="text-lg">
          {product.offer ? (
            <>
              <div className="flex items-center gap-1">
                <p>{product.price.toLocaleString("fa-IR")}</p>
                <p className="text-sm">تومان</p>
              </div>
              <p className="text-sm text-foterText">
                {priceOffer.toLocaleString("fa-IR")}
              </p>
            </>
          ) : (
            <div className="flex items-center gap-1">
              <p>{product.price.toLocaleString("fa-IR")}</p>
              <p className="text-sm">تومان</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavShop;
