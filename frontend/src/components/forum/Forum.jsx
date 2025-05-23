import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import SearchFilter from "./components/SearchFilter";
import TopicList from "./components/TopicList";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const Forum = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Search functionality to be implemented
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen bg-[#FCEDDA]">
      {/* Navbar */}
      <div className="px-[50px] py-[6px]">
        <Navbar />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-8 flex flex-col gap-8">
        {/* Search and Filter */}
        <SearchFilter onSearch={handleSearch} />

        {/* Topic List */}
        <TopicList />

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 text-gray-500 disabled:opacity-50">
              Previous
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-3 py-2 rounded ${
                  page === 1
                    ? "bg-[#FF570C] text-white"
                    : "text-gray-700 hover:bg-[#FFDEB5]"
                }`}
              >
                {page}
              </button>
            ))}
            <span className="px-3 py-2">...</span>
            <button className="px-3 py-2 text-gray-700 hover:bg-[#FFDEB5]">
              68
            </button>
            <button className="px-3 py-2 text-gray-700 hover:bg-[#FFDEB5]">
              Next
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Forum;
