import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "bul" && password === "bul") {
      navigate("/login-success");
    }
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  const handleForgotPassword = () => {
    navigate("/reset-password");
  };

  return (
    <main className="flex flex-col items-stretch bg-[#FCEDDA] min-h-screen">
      <div className="flex flex-1">
        <div className="flex w-full max-w-[1440px] mx-auto">
          {/* Left side - Image - 50% */}
          <div className="w-1/2 flex items-center justify-center p-8 max-md:hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/bfbd4cb16b365e1694925c5aa26bac5b583b306f?placeholderIfAbsent=true"
              alt="Login Illustration"
              className="w-full h-auto max-w-[650px] rounded-[15px]"
            />
          </div>

          {/* Right side - Login Form - 50% */}
          <div className="w-1/2 flex items-center justify-center p-8 max-md:w-full">
            <div className="w-[490px] max-w-full">
              <form onSubmit={handleSubmit}>
                <div className="w-full">
                  <h1 className="text-black text-center text-5xl font-bold leading-none max-md:text-[40px]">
                    Sign In
                  </h1>
                  <div className="w-full font-normal mt-[41px] max-md:mt-10">
                    <div className="w-full text-[15px] text-black space-y-7">
                      <div className="space-y-2">
                        <label htmlFor="username" className="sr-only">
                          Username
                        </label>
                        <input
                          id="username"
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Username"
                          required
                          className="self-stretch min-h-[29px] w-full gap-2.5 py-[3px] border-b-[3px] border-black bg-transparent focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          required
                          className="self-stretch min-h-[29px] w-full gap-2.5 py-[3px] border-b-[3px] border-black bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="text-black self-stretch min-h-[55px] w-full gap-2.5 text-xl bg-[#FFDEB5] mt-[27px] px-2.5 py-[13px] rounded-[50px] hover:bg-[#FFD19F] transition-colors"
                    >
                      SIGN IN
                    </button>
                  </div>
                </div>
              </form>

              {/* Auth Links */}
              <div className="self-center flex w-[250px] max-w-full flex-col items-stretch text-base text-black font-normal leading-7 justify-center mt-[26px] mx-auto">
                <button
                  className="text-center self-center underline"
                  onClick={handleForgotPassword}
                >
                  Forgot your password?
                </button>

                <div className="flex w-full items-center gap-[30px] mt-[35px]">
                  <span className="self-stretch my-auto">
                    Don't have an account?
                  </span>
                  <button
                    className="self-stretch my-auto underline"
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
