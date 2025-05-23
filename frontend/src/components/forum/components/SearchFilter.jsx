import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

const SearchFilter = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
      {/* Create Topic Button */}
      <button className="px-6 py-3 bg-black text-[#FCEDDA] rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 order-2 md:order-1">
        <span className="text-xl font-semibold">Create New Topic</span>
        <span className="text-2xl">+</span>
      </button>

      {/* Search and Filter */}
      <div className="flex items-center gap-4 w-full md:w-auto order-1 md:order-2">
        <form onSubmit={handleSubmit} className="flex-1 md:w-[500px]">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics..."
              className="w-full h-14 pl-12 pr-4 bg-[#FEE4C4] rounded-lg outline-none focus:ring-2 focus:ring-[#FF570C]"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          </div>
        </form>

        <button className="h-14 px-6 rounded-3xl border-2 border-black bg-[#FCEDDA] text-black font-medium hover:bg-[#FFDEB5] transition-colors">
          FILTERS
        </button>
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFilter;
