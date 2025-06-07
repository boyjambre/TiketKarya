import React, { useState } from "react";

const ReviewForm = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full min-h-screen bg-[#FAEBDD] flex flex-col justify-center items-center font-Roboto">
        <img
          src="/img/logo_tk_blackwhite.svg"
          alt="Logo"
          className="h-20 mb-6"
        />
        <h2 className="text-lg font-semibold mb-2">Review Submitted</h2>
        <p className="text-sm mb-6">Thanks for sharing your feedback with us!</p>
        <button
          className="bg-black text-white py-2 px-8 rounded-md"
          onClick={onClose}
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#FAEBDD] px-6 md:px-2 py-6 font-Roboto">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img
          src="/img/logo_tk_blackwhite.svg"
          alt="Review Logo"
          className="h-20 md:h-26"
        />
      </div>

      {/* Card Paling Atas */}
      <div className="border border-black bg-[#E9DCCB] rounded-sm max-w-2xl mx-auto flex flex-col md:flex-row p-4 mb-8">
        {/* Gambar Full */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
          <img
            src="/img/pict2.png"
            alt="Workshop Thumbnail"
            className="w-full h-full object-cover block rounded-none m-0 p-0 aspect-square"
          />
        </div>

        {/* Judul & Rating */}
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-xl font-bold mb-2">
            Wheel Throwing for Beginners
          </h2>
          <div className="text-5xl text-black">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className={`transition duration-200 ${
                  value <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        className="space-y-6 max-w-2xl mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Title */}
        <div className="border border-black bg-[#E9DCCB] rounded-sm p-4">
          <input
            type="text"
            className="w-full border-none bg-transparent p-0 text-base focus:ring-0 placeholder-gray-500"
            placeholder="Review Title"
          />
        </div>

        {/* Description */}
        <div className="border border-black bg-[#E9DCCB] rounded-sm p-4">
          <textarea
            className="w-full border-none bg-transparent p-0 text-base focus:ring-0 placeholder-gray-500 resize-none"
            rows="5"
            placeholder="Review Description"
          ></textarea>
        </div>

        {/* Upload media */}
        <div className="border border-black bg-[#E9DCCB] rounded-sm p-6 text-center text-sm cursor-pointer hover:bg-[#e0cfb6] transition">
          <p className="font-semibold">Add Photos or Videos</p>
          <p className="text-gray-500">Click here or drag to upload</p>
        </div>

        {/* Terms */}
        <p className="text-xs text-center text-gray-600">
          By continuing you agree to our{" "}
          <span className="underline cursor-pointer">Terms and Conditions</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 border border-gray-500 text-gray-700 rounded-md"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-md"
          >
            Agree & Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
