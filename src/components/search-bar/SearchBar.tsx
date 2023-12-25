import { type FC } from "react";

const SearchBar: FC = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a city"
        className="py-2 px-3 outline-none sM:w-full sm:w-full lg:w-2/4 text-sm text-zinc-800 rounded-lg placeholder:italic placeholder:font-medium"
      />
    </div>
  );
};

export default SearchBar;
