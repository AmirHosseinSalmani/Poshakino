import HeaderPage from "./pages/Header/page";
import ProductsPage from "./pages/Products/page";
// import { useState } from "react";

export default function Home() {
  // const [isDark, setIsDark] = useState<boolean>(
  //   localStorage.getItem("dark") ? true : false,
  // );

  return (
    <div>
      <HeaderPage />
      <ProductsPage />
    </div>
  );
}
