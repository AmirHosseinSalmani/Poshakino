import { FiSearch } from "react-icons/fi";
function SearchBar() {
  return (
    <div className="relative border-[0.1px] border-gray-300 w-[40%] h-9 pr-13 rounded-lg laptop:w-[90%] tablet:w-86 tablet:h-9  laptop:h-10.25 tablet:pr-15">
      <span className="absolute right-0 p-1.75 px-2.5 rounded-r-lg  bg-primary cursor-pointer hover: text-background laptopt:px-3 laptop:py-2 ">
        <FiSearch className=" text-xl laptop:text-2xl" />
      </span>
      <input
        className="outline-none placeholder:text-foter text-[13px]  p-1.5 tablet:text-[14.5px]"
        type="search"
        placeholder="جستجو ...."
      />
    </div>
  );
}

export default SearchBar;
