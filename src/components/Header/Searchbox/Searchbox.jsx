import { useState } from "react";
import PropTypes from "prop-types";

const Searchbox = ({ setSearch }) => {
  const [search, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(search);
    setSearchValue("");
  };

  const handleSearchText = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="px-6 py-4 lg:py-28">
      <h1 className="text-[#0B0B0B] font-bold text-3xl lg:text-5xl text-center">I Grow By Helping People In Need</h1>
      <div className="flex justify-center items-center my-10">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            onChange={handleSearchText}
            value={search}
            className="bg-white p-3 border border-[#DEDEDE] rounded-lg rounded-r-none md:w-[380px] focus:outline-[#FF444A] focus:border-none "
            type="search"
            name="name"
            id=""
            placeholder="Search here..."
          />
          <input type="submit" value="Search" className="bg-[#FF444A] border-none px-7 rounded-lg text-white font-semibold btn hover:bg-[#FF444A] focus:bg-[#FF444A]" />
        </form>
      </div>
    </div>
  );
};

Searchbox.propTypes = {
  setSearch: PropTypes.func,
};
export default Searchbox;
