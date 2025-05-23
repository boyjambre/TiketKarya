import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login_Admin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple admin validation for testing
    if (formData.username === "admin" && formData.password === "admin") {
      navigate("/admin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#FCEDDA]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="text-4xl text-[#FF5126] font-bold">TIKET KARYA</div>
            <div className="text-4xl text-[#FF5126] font-normal opacity-50">
              TK
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center mb-8">Admin Login</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF5126] focus:ring-1 focus:ring-[#FF5126] transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF5126] focus:ring-1 focus:ring-[#FF5126] transition-colors"
                required
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <button
              type="submit"
              className="w-full bg-[#FF5126] text-white text-xl font-semibold py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-[#FF5126] hover:text-opacity-80 transition-colors"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login_Admin;
