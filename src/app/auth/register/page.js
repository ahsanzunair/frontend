"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearError, resetRegisterSuccess } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error, registerSuccess, redirectTo  } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
    role: "jobseeker",
    phone_number: "",
    gender: "",
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    dispatch(clearError());
    dispatch(resetRegisterSuccess());
  }, [dispatch]);

 useEffect(() => {
    if (registerSuccess && redirectTo) {
      const timer = setTimeout(() => {
        router.push(redirectTo);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [registerSuccess, redirectTo, router]);


  const validateField = (name, value) => {
    switch (name) {
      case "username":
        if (!value.trim()) return "Username is required";
        if (value.length < 3) return "Username must be at least 3 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
        return "";
      case "password":
        if (!value) return "Password is required";
        if (value.length < 8) return "Password must be at least 8 characters";
        return "";
      case "password2":
        if (value !== formData.password) return "Passwords do not match";
        return "";
      case "phone_number":
        if (value && !/^[0-9+\-\s()]{10,15}$/.test(value)) return "Invalid phone number";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    
    const error = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));

    if (error) {
      dispatch(clearError());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const errors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) errors[key] = error;
    });

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const apiData = {
      username: formData.username.trim(),
      email: formData.email.trim(),
      password: formData.password,
      password2: formData.password2,
      first_name: formData.first_name.trim() || "",
      last_name: formData.last_name.trim() || "",
      role: formData.role,
      phone_number: formData.phone_number.trim() || "",
      gender: formData.gender || "",
    };


    console.log("Sending to Django:", apiData);
    dispatch(registerUser(apiData));
  };



  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {registerSuccess && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-green-700">Registration successful! Redirecting...</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username *
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#1A4767] focus:border-[#1A4767] ${formErrors.username ? "border-red-500" : "border-gray-300"
                  }`}
                required
              />
              {formErrors.username && (
                <p className="mt-1 text-sm text-red-600">{formErrors.username}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#1A4767] focus:border-[#1A4767] ${formErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                required
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#1A4767] focus:border-[#1A4767] ${formErrors.password ? "border-red-500" : "border-gray-300"
                  }`}
                required
              />
              {formErrors.password && (
                <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password *
              </label>
              <input
                type="password"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#1A4767] focus:border-[#1A4767] ${formErrors.password2 ? "border-red-500" : "border-gray-300"
                  }`}
                required
              />
              {formErrors.password2 && (
                <p className="mt-1 text-sm text-red-600">{formErrors.password2}</p>
              )}
            </div>

            {/* Optional Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#1A4767] focus:border-[#1A4767]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#1A4767] focus:border-[#1A4767]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="e.g., +1234567890"
                className={`w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#1A4767] focus:border-[#1A4767] ${formErrors.phone_number ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {formErrors.phone_number && (
                <p className="mt-1 text-sm text-red-600">{formErrors.phone_number}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#1A4767] focus:border-[#1A4767]"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Type *
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#1A4767] focus:border-[#1A4767]"
                required
              >
                <option value="jobseeker">Job Seeker</option>
                <option value="employer">Employer</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading || registerSuccess}
              className={`w-full py-3 px-4 rounded text-white font-medium mt-6 ${loading || registerSuccess
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-[#1A4767] hover:bg-blue-700"
                }`}
            >
              {loading ? "Creating Account..." : registerSuccess? "Registered Successfully!": "Register"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-[#1A4767] hover:text-blue-800 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}