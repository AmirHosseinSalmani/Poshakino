import { createContext } from "react";

export const ShoppingContext = createContext();

export function ShpingProvider({ children }) {
  const [basket, setBasket] = useState([]);

  function addToBasket(product) {
    setCart((cart) => [...cart, product]);
  }

  function removeToBasket(productId) {
    setBasket((prev) => prev.filter((cart) => cart.id !== productId));
  }

  return (
    <ShoppingContext.Provider value={{ basket, addToBasket, removeToBasket }}>
      {children}
    </ShoppingContext.Provider>
  );
}
