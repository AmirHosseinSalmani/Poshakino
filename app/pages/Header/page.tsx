import LaginSingUp from "@/app/components/header/LaginSingUp";
import NavarPage from "@/app/components/header/menu/NavarPage";
import SearchBar from "@/app/components/header/SearchBar";
import ShoppingBag from "@/app/components/header/ShoppingBag";

function HeaderPage() {
  return (
    <header className=" laptop:flex justify-between hidden  w-full border-b-[0.5px] border-foterli p-4 pr-5 laptop:pb-0 pb-6">
      <div>
        <div className="flex laptop:items-center laptop:gap-6 gap-3 flex-col laptop:flex-row">
          <ShoppingBag sizeIcon={29} sizeText={12} />
          <SearchBar />
        </div>
        <NavarPage />
      </div>
      <LaginSingUp />
    </header>
  );
}

export default HeaderPage;
