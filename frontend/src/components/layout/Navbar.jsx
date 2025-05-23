import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path, { replace: true });
    // Force a reload to ensure proper navigation
    window.location.href = path;
  };

  return (
    <nav className="flex min-h-20 w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full relative z-10">
      <div className="self-stretch flex min-w-60 items-center gap-[22px] text-lg text-black whitespace-nowrap text-center underline leading-[27px] w-[410px] my-auto">
        <div className="font-bold self-stretch w-[70px] my-auto">English</div>
        <div className="font-normal self-stretch w-[70px] my-auto">Bahasa</div>
      </div>
      <button onClick={() => handleNavigation("/")} className="cursor-pointer">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/3a1bc9cefadf0658c19a552cd245ebafc9e83053?placeholderIfAbsent=true"
          alt="TiketKarya Logo"
          className="aspect-[1.37] object-contain w-[82px] self-stretch shrink-0 my-auto"
        />
      </button>
      <div
        className="self-stretch flex min-w-60 items-center gap-[30px] w-[406px] my-auto"
        role="navigation"
      >
        <button
          onClick={() => handleNavigation("/search")}
          className="text-black text-[15px] font-medium text-center self-stretch w-[70px] my-auto cursor-pointer hover:text-[#FF570C] transition-colors"
        >
          SEARCH
        </button>
        <button
          onClick={() => handleNavigation("/forum")}
          className="text-black text-[15px] font-medium text-center self-stretch w-[70px] my-auto cursor-pointer hover:text-[#FF570C] transition-colors"
        >
          FORUM
        </button>
        <div className="text-black text-[15px] font-medium text-center self-stretch w-[70px] my-auto">
          ARTICLES
        </div>
        <div className="self-stretch flex-1 shrink basis-[0%]">
          <div className="items-center shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)] flex min-h-[50px] w-full gap-[5px] bg-[#FFDEB5] px-2.5 py-[7px] rounded-[50px]">
            <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center w-5 my-auto px-0.5 py-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/3876d5e0c2a0a2f1beac371be3bd500b058f255a?placeholderIfAbsent=true"
                alt="Arrow Down"
                className="aspect-[1.5] object-contain w-[15px]"
              />
            </div>
            <div className="self-stretch flex items-center gap-2.5 overflow-hidden w-5 my-auto px-px">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/53b785877f9554e64479b6d3d7fa84dd798c3d33?placeholderIfAbsent=true"
                alt="Notification"
                className="aspect-[0.9] object-contain w-[18px] self-stretch my-auto"
              />
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/d68ec5cb80433ba0e4c750a2a5b7f6a311291280?placeholderIfAbsent=true"
              alt="Profile"
              className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto rounded-[50%]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
