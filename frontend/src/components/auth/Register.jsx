import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, any submission is successful
    navigate("/register-success");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateOrganizerAccount = () => {
    navigate("/register-organizer");
  };

  return (
    <main className="flex flex-col items-stretch bg-[#FCEDDA] min-h-screen">
      <div className="flex flex-1">
        <div className="flex w-full max-w-[1440px] mx-auto">
          {/* Left side - Image - 50% */}
          <div className="w-1/2 flex items-center justify-center p-8 max-md:hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/bfbd4cb16b365e1694925c5aa26bac5b583b306f?placeholderIfAbsent=true"
              alt="Register Illustration"
              className="w-full h-auto max-w-[650px] rounded-[15px]"
            />
          </div>

          {/* Right side - Register Form - 50% */}
          <div className="w-1/2 flex items-center justify-center p-8 max-md:w-full">
            <div className="w-[490px] max-w-full">
              <div className="w-full">
                <h1 className="text-black text-center text-5xl font-bold leading-none max-md:text-[40px]">
                  Sign Up
                </h1>

                <form
                  onSubmit={handleSubmit}
                  className="w-full font-normal mt-[26px]"
                >
                  <div className="w-full text-[15px] text-black space-y-[26px]">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      className="self-stretch min-h-[29px] w-full gap-2.5 py-[3px] border-b-[3px] border-black bg-transparent focus:outline-none"
                    />

                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                      className="self-stretch min-h-[29px] w-full gap-2.5 py-[3px] border-b-[3px] border-black bg-transparent focus:outline-none"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="self-stretch min-h-[29px] w-full gap-2.5 py-[3px] border-b-[3px] border-black bg-transparent focus:outline-none"
                    />

                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      required
                      className="self-stretch min-h-[29px] w-full gap-2.5 py-[3px] border-b-[3px] border-black bg-transparent focus:outline-none"
                    />
                  </div>

                  <div className="mt-7">
                    <p className="text-center text-xs text-black leading-7">
                      By continuing you agree to our{" "}
                      <a href="#" className="underline">
                        Terms and Condition
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline">
                        Privacy Policy
                      </a>
                    </p>

                    <button
                      type="submit"
                      className="w-full text-black min-h-[55px] text-xl bg-[#FFDEB5] mt-5 px-2.5 py-[13px] rounded-[50px] hover:bg-[#FFD19F] transition-colors"
                    >
                      SIGN UP
                    </button>
                  </div>
                </form>

                <div className="mt-5">
                  <p className="text-center text-base text-black leading-7">
                    Want to host a workshop?
                  </p>
                  <button
                    type="button"
                    onClick={handleCreateOrganizerAccount}
                    className="w-full text-xl text-black font-bold bg-[#FFDEB5] mt-2 px-[43px] py-5 rounded-[50px] hover:bg-[#FFD19F] transition-colors"
                  >
                    Create Organizer Account
                  </button>
                </div>

                <div className="flex items-center justify-center gap-[30px] mt-[27px] text-base text-black">
                  <span>Already Have an account</span>
                  <a href="/login" className="underline">
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
