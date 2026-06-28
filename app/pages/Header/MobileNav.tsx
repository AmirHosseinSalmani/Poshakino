import BasketNav from "@/app/components/navigation/BasketNav";
import CategoryNav from "@/app/components/navigation/CategoryNav";
import FavoriteNav from "@/app/components/navigation/FavoriteNav";
import HomeNav from "@/app/components/navigation/HomeNav";
import UserSpaceNav from "@/app/components/navigation/UserSpaceNav";
function MobileNav() {
  return (
    <div className="relative laptop:hidden w-full">
      <div className="w-full fixed bottom-0 left-0 z-20 bg-background">
        <div className="flex justify-between items-center px-7 h-15">
          <HomeNav />
          <CategoryNav />
          <BasketNav />
          <FavoriteNav />
          <UserSpaceNav />
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
