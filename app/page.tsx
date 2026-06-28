import MobileNav from "./pages/Header/MobileNav";
import HeaderPage from "./pages/Header/page";
import ProductsPage from "./pages/Products/page";
// import { useState } from "react";

export default function Home() {
  // const [isDark, setIsDark] = useState<boolean>(
  //   localStorage.getItem("dark") ? true : false,
  // );

  return (
    <div className="flex flex-col items-center">
      <HeaderPage />
      <ProductsPage />
      <MobileNav />
    </div>
  );
}
