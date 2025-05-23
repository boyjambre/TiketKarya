import React from "react";

const TiketKaryaLogo = () => {
  return (
    <div className="w-[324px] max-w-full text-[#FF5126] mt-10">
      <div className="text-[#FF5126] self-stretch w-full gap-2.5 text-8xl font-bold p-2.5 max-md:text-[40px]">
        <span className="text-[48px] text-[rgba(255,81,38,1)]">TIKET</span>{" "}
        <span className="text-[48px] text-[rgba(255,81,38,1)]">KARYA</span>
      </div>
      <div className="flex min-h-[91px] w-full items-center gap-2.5 text-9xl font-normal whitespace-nowrap text-center justify-center max-md:text-[40px]">
        <div className="text-[#FF5126] opacity-50 self-stretch flex-1 shrink basis-[0%] my-auto max-md:text-[40px]">
          TK
        </div>
      </div>
    </div>
  );
};

export default TiketKaryaLogo;
