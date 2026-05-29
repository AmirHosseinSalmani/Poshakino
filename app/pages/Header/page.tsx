import LaginSingUp from "@/app/components/header/LaginSingUp";
import NavarPage from "@/app/components/header/Menu/NavarPage";
import SearchBar from "@/app/components/header/SearchBar";
import ShoppingBag from "@/app/components/header/ShoppingBag";

function HeaderPage() {
  return (
    <header className=" flex justify-between rounded-bl-4xl w-full border-b-[0.5px] border-foterli p-4 pr-5 pb-0">
      <div>
        <div className="flex items-center gap-6 ">
          <ShoppingBag />
          <SearchBar />
        </div>
        <NavarPage />
      </div>
      <LaginSingUp />
    </header>
  );
}

export default HeaderPage;
