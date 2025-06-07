import React, { useState } from "react";

const ReviewForm = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Tampilan setelah form disubmit
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

  // Tampilan form review
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

      <div className="border border-black bg-[#E9DCCB] rounded-sm max-w-2xl mx-auto flex p-2 mb-10">
        {/* Gambar thumbnail */}
        <div className="w-30 h-30 mr-4 shrink-0">
          <div className="w-full h-full">
            <img
              src="/img/pict2.png"
              alt="Workshop Thumbnail"
              className="w-full h-full object-cover block rounded-none m-0 p-0"
            />
          </div>
        </div>

        {/* Judul & Rating */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-1">
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

      <form className="space-y-6 max-w-2xl mx-auto" onSubmit={handleSubmit}>
        {/* Title */}
        <input
          type="text"
          className="w-full border border-gray-400 p-3 rounded-md text-sm bg-white"
          placeholder="Review Title"
        />

        {/* Description */}
        <textarea
          className="w-full border border-gray-400 p-3 rounded-md text-sm bg-white"
          rows="5"
          placeholder="Review Description"
        ></textarea>

        {/* Upload media */}
        <div className="border-2 border-dashed border-gray-400 p-6 rounded-md text-center text-sm bg-white cursor-pointer hover:bg-gray-50 transition">
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
