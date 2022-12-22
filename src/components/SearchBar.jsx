import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex justify-between items-center border-b h-10">
      <input
        type="text"
        placeholder="Search"
        className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
      />
      <button>
        <FaSearch className="text-gray-300" />
      </button>
    </div>
  );
}

export default SearchBar;
