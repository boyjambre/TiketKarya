import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Refund = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reason: "",
    workshopCode: "MRCE-32945",
    workshopTitle: "Wheel Throwing for Beginners",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For testing, navigate to success page
    navigate("/refund-success");
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <main className="flex flex-col overflow-hidden relative min-h-screen items-stretch pt-1.5 pb-10 px-[50px] max-md:pb-10 max-md:px-5 bg-[#FCEDDA]">
      <div className="relative self-center flex w-[720px] max-w-full mt-10 bg-[#FCEDDA] rounded-lg shadow-lg">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 hover:opacity-75 transition-opacity"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/d853ef54fe28a5f22679ec4f190a5f1032ce6374"
            alt="Close"
            className="aspect-[1] object-contain w-[30px]"
          />
        </button>

        <div className="w-full p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="text-4xl text-black font-normal">TK</div>
            <div className="text-4xl text-black font-bold">TIKET KARYA</div>
          </div>

          {/* Workshop Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Workshop yang Akan Direfund
            </h2>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/d64732c7127889f2398212d07461d512cee5dbdf"
                alt="Workshop thumbnail"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black">
                  {formData.workshopTitle}
                </h3>
                <div className="text-gray-600 mt-1">
                  Kode:{" "}
                  <span className="font-bold">{formData.workshopCode}</span>
                </div>
              </div>
              <div className="shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/1188fab03c11d73dffbabb5b8d8acd0253b3bd90"
                  alt="Selected"
                  className="w-12 h-12"
                />
              </div>
            </div>
          </div>

          {/* Refund Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-black">
              Isi Form Refund di Bawah Ini
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Nama Depan"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Nama Belakang"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-black focus:ring-1 focus:ring-black transition-colors"
                required
              />
            </div>

            <div>
              <textarea
                name="reason"
                placeholder="Alasan Refund"
                value={formData.reason}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none"
                required
              />
            </div>

            <div className="text-center text-sm text-gray-600">
              Dengan melanjutkan, Anda menyetujui{" "}
              <a
                href="#"
                className="underline hover:text-black transition-colors"
              >
                Syarat dan Ketentuan
              </a>{" "}
              dan{" "}
              <a
                href="#"
                className="underline hover:text-black transition-colors"
              >
                Kebijakan Privasi
              </a>{" "}
              kami
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white text-xl font-semibold py-4 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Setuju & Kirim Permintaan
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Refund;
