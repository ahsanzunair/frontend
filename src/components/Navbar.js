"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          JobPortal
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="/" className="hover:text-blue-600 transition">Home</a>
          <a href="/about" className="hover:text-blue-600 transition">About</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </a>

          <a
            href="/register"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Register
          </a>
        </div>

      </div>
    </nav>
  );
}
