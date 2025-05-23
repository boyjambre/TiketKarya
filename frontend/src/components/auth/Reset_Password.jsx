import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reset_Password = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, any submission is successful
    navigate("/reset-password-success");
  };

  const handleBackToSignIn = () => {
    navigate("/login");
  };

  return (
    <main className="flex flex-col items-stretch bg-[#FCEDDA] min-h-screen">
      <div className="flex flex-1">
        <div className="flex w-full max-w-[1440px] mx-auto">
          {/* Left side - Image - 50% */}
          <div className="w-1/2 flex items-center justify-center p-8 max-md:hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/e3eba738bee301607c6d12179c1ad9cc03bfe6a4?placeholderIfAbsent=true"
              alt="Reset Password Illustration"
              className="w-full h-auto max-w-[650px] rounded-[15px]"
            />
          </div>

          {/* Right side - Reset Password Form - 50% */}
          <div className="w-1/2 flex items-center justify-center p-8 max-md:w-full">
            <div className="w-[490px] max-w-full">
              <h1 className="text-black text-center text-5xl font-bold leading-none max-md:text-[40px]">
                Reset Password
              </h1>

              <form
                onSubmit={handleSubmit}
                className="w-full font-normal mt-[46px] max-md:mt-10"
              >
                <div className="w-full whitespace-nowrap">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                      className="self-stretch min-h-[29px] w-full gap-2.5 text-[15px] text-black py-[3px] border-b-[3px] border-black bg-transparent focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-black self-stretch min-h-[55px] w-full gap-2.5 text-xl bg-[#FFDEB5] mt-[45px] px-2.5 py-[13px] rounded-[50px] hover:bg-[#FFD19F] transition-colors"
                  >
                    SUBMIT
                  </button>
                </div>

                <div className="text-center mt-[18px]">
                  <button
                    type="button"
                    onClick={handleBackToSignIn}
                    className="text-base text-black leading-7 hover:underline"
                  >
                    Back to <span className="underline">Sign In</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Reset_Password;
