import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path, { replace: true });
    window.location.href = path;
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md px-6 py-1 flex items-center justify-between">
        {/* Bahasa */}
        <div className="ml-10 flex items-center gap-6 text-lg text-black whitespace-nowrap underline leading-[25px]">
          <div className="font-bold">English</div>
          <div className="font-normal">Bahasa</div>
        </div>

        {/* Logo */}
        <button onClick={() => handleNavigation("/")} className="cursor-pointer">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/3a1bc9cefadf0658c19a552cd245ebafc9e83053?placeholderIfAbsent=true"
            alt="TiketKarya Logo"
            className="w-[82px] h-auto"
          />
        </button>

        {/* Nav Buttons + Profile */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleNavigation("/search")}
            className="text-black text-[15px] font-medium"
          >
            SEARCH
          </button>
          
          <button
            onClick={() => handleNavigation("/forum")}
            className="text-black text-[15px] font-medium"
          >
            FORUM
          </button>

          <button
            onClick={() => handleNavigation("/articel")}
            className="text-black text-[15px] font-medium"
          >
            ARTICEL
          </button>
          

          {/* Profile Section */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 bg-[#FFDEB5] px-4 py-2 rounded-full shadow-md"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/3876d5e0c2a0a2f1beac371be3bd500b058f255a?placeholderIfAbsent=true"
                alt="Arrow"
                className="w-[15px]"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/53b785877f9554e64479b6d3d7fa84dd798c3d33?placeholderIfAbsent=true"
                alt="Notification"
                className="w-[18px]"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/d68ec5cb80433ba0e4c750a2a5b7f6a311291280?placeholderIfAbsent=true"
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover"
              />
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#FCEBD5] rounded-md shadow-lg py-2 z-50">
                <button
                  onClick={() => handleNavigation("/ticket")}
                  className="block px-4 py-2 text-sm text-black hover:bg-[#ffe5c4] w-full text-left"
                >
                  TICKET
                </button>
                <button
                  onClick={() => handleNavigation("/workshop")}
                  className="block px-4 py-2 text-sm text-black hover:bg-[#ffe5c4] w-full text-left"
                >
                  MY WORKSHOP
                </button>
                <button
                  onClick={() => handleNavigation("/points")}
                  className="block px-4 py-2 text-sm text-black hover:bg-[#ffe5c4] w-full text-left"
                >
                  KARYA POINTS
                </button>
                <button
                  onClick={() => handleNavigation("/notifications")}
                  className="block px-4 py-2 text-sm text-black hover:bg-[#ffe5c4] w-full text-left"
                >
                  NOTIFICATION
                </button>
                <button
                  onClick={() => handleNavigation("/settings")}
                  className="block px-4 py-2 text-sm text-black hover:bg-[#ffe5c4] w-full text-left"
                >
                  SETTINGS
                </button>

              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Spacer supaya konten tidak tertutup navbar */}
      <div className="h-[40px]" />
    </>
  );
};

export default Navbar;
