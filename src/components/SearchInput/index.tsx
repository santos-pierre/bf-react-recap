import { SearchIcon } from "@heroicons/react/solid";

const SearchInput = () => {
  return (
    <div className="inline-flex justify-center py-3 bg-dark-gray lg:px-40">
      <div className="relative min-w-full mt-1 rounded-md shadow-sm">
        <input
          type="text"
          name="search"
          id="search-input"
          className="block w-full py-3 pl-5 pr-20 border-transparent rounded-full bg-light-gray text-silent-gray"
          placeholder="Search Video"
        />
        <div className="absolute inset-y-0 right-0 m-2 flex items-center rounded-full bg-[#464350] p-4">
          <SearchIcon className="w-6 h-6 text-silent-gray" />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
