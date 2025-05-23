import React from "react";

const SearchHeader = () => {
  return (
    <header className="self-stretch flex min-h-20 w-full items-center gap-[40px_100px] justify-between flex-wrap">
      {/* Language Selection */}
      <nav className="self-stretch flex min-w-60 items-center gap-[22px] text-lg text-black whitespace-nowrap text-center underline leading-[27px] w-[410px] my-auto">
        <button className="font-bold self-stretch w-[70px] my-auto hover:opacity-75 transition-opacity">
          English
        </button>
        <button className="font-normal self-stretch w-[70px] my-auto hover:opacity-75 transition-opacity">
          Bahasa
        </button>
      </nav>

      {/* Logo */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/e87fdf2e6a52c3585792351a64876ed57ffd9676"
        alt="TIKET KARYA Logo"
        className="aspect-[1.42] object-contain w-[85px] self-stretch shrink-0 my-auto"
      />

      {/* Navigation Links */}
      <div className="self-stretch flex min-w-60 items-center gap-[30px] my-auto">
        <button className="text-black text-base font-black text-center self-stretch w-[70px] my-auto hover:opacity-75 transition-opacity">
          SEARCH
        </button>
        <button className="text-black text-[15px] font-medium text-center self-stretch w-[70px] my-auto hover:opacity-75 transition-opacity">
          FORUM
        </button>
        <button className="text-black text-[15px] font-medium text-center self-stretch w-[70px] my-auto hover:opacity-75 transition-opacity">
          ARTICLES
        </button>

        {/* Profile Button */}
        <div className="self-stretch w-[110px] my-auto">
          <button className="items-center shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)] flex min-h-[50px] w-full gap-[5px] bg-[#FFDEB5] px-2.5 py-[7px] rounded-[50px] hover:bg-[#FFD19F] transition-colors">
            <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center w-5 my-auto px-0.5 py-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/3876d5e0c2a0a2f1beac371be3bd500b058f255a"
                alt="Arrow down"
                className="aspect-[1.5] object-contain w-[15px]"
              />
            </div>
            <div className="self-stretch flex items-center gap-2.5 overflow-hidden w-5 my-auto px-px">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/53b785877f9554e64479b6d3d7fa84dd798c3d33"
                alt="Notification"
                className="aspect-[0.9] object-contain w-[18px]"
              />
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/d68ec5cb80433ba0e4c750a2a5b7f6a311291280"
              alt="Profile"
              className="aspect-[1] object-contain w-9 shrink-0 rounded-[50%]"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
