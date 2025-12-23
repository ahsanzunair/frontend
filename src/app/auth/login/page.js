'use client'
import { useState } from "react";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isForgot, setIsForgot] = useState(false);
    const [role, setRole] = useState("Job Seeker");
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        companyName: "",
        companyWebsite: "",
        companyAddress: "",
        phone: "",
        city: "",
        skills: "",
        resume: null,
        otp: "",
        newPassword: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isForgot) {
            // Forgot Password Flow
            if (!formData.email) {
                alert("Email is required");
                return;
            }
            if (!formData.otp) {
                alert("OTP is required");
                return;
            }
            if (!formData.newPassword || formData.newPassword.length < 6) {
                alert("New password must be at least 6 characters");
                return;
            }
            alert(`Password reset successful for ${formData.email}`);
            setIsForgot(false);
            setIsLogin(true);
            setFormData({
                ...formData,
                password: "",
                confirmPassword: "",
                otp: "",
                newPassword: "",
            });
            return;
        }

        if (isLogin) {
            // Login Flow
            if (!formData.email || !formData.password) {
                alert("Email and Password required");
                return;
            }
            alert(`Login simulated for ${formData.email}`);
        } else {
            // Register Flow
            if (!formData.email) {
                alert("Email is required");
                return;
            }
            if (formData.password.length < 6) {
                alert("Password must be at least 6 characters");
                return;
            }
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords do not match");
                return;
            }
            if (role === "Employer") {
                alert("Employer account submitted! Pending approval.");
            } else {
                alert("Job Seeker account submitted!");
            }
        }

        setFormData({
            fullName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            companyName: "",
            companyWebsite: "",
            companyAddress: "",
            phone: "",
            city: "",
            skills: "",
            resume: null,
            otp: "",
            newPassword: "",
        });
    };

    return (
        <div className="min-h-screen flex pt-20 items-center justify-center bg-gray-50 p-4">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    {isForgot
                        ? "Reset Password"
                        : isLogin
                            ? "Login"
                            : "Create an Account"}
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && !isForgot && (
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            required
                        />
                    )}

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                    />

                    {isForgot ? (
                        <>
                            <input
                                type="text"
                                name="otp"
                                value={formData.otp}
                                onChange={handleChange}
                                placeholder="Enter OTP"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                required
                            />
                            <input
                                type="password"
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                placeholder="Enter New Password"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                required
                            />
                        </>
                    ) : (
                        <>
                            {!isLogin && (
                                <>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm Password"
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </>
                            )}

                            {isLogin && (
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            )}

                            {!isLogin && (
                                <>
                                    <div className="mb-1">
                                        <select
                                            name="role"
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                                        >
                                            <option value="Employer">Employer</option>
                                            <option value="Job Seeker">Job Seeker</option>
                                        </select>
                                    </div>

                                    {role === "Employer" && (
                                        <>
                                            <input
                                                type="text"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                placeholder="Company Name"
                                                className="w-full p-3 border border-gray-300 rounded-lg"
                                            />
                                            <input
                                                type="text"
                                                name="companyWebsite"
                                                value={formData.companyWebsite}
                                                onChange={handleChange}
                                                placeholder="Company Website"
                                                className="w-full p-3 border border-gray-300 rounded-lg"
                                            />
                                            <input
                                                type="text"
                                                name="companyAddress"
                                                value={formData.companyAddress}
                                                onChange={handleChange}
                                                placeholder="Company Address"
                                                className="w-full p-3 border border-gray-300 rounded-lg"
                                            />
                                        </>
                                    )}
                                    {role === "Job Seeker" && (
                                        <>
                                            <input
                                                type="text"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone"
                                                className="w-full p-3 border border-gray-300 rounded-lg"
                                            />
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                placeholder="City"
                                                className="w-full p-3 border border-gray-300 rounded-lg"
                                            />
                                            <input
                                                type="text"
                                                name="skills"
                                                value={formData.skills}
                                                onChange={handleChange}
                                                placeholder="Skills"
                                                className="w-full p-3 border border-gray-300 rounded-lg"
                                            />
                                            <input
                                                type="file"
                                                name="resume"
                                                onChange={handleChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg"
                                            />
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-[#1A4767] text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                        {isForgot
                            ? "Reset Password"
                            : isLogin
                                ? "Login"
                                : "Register"}
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    {isForgot
                        ? "Remember your password?"
                        : isLogin
                            ? "Don't have an account?"
                            : "Already have an account?"}{" "}
                    <span
                        onClick={() =>
                            isForgot ? setIsForgot(false) : setIsLogin(!isLogin)
                        }
                        className="text-[#1A4767] font-semibold cursor-pointer"
                    >
                        {isForgot ? "Login" : isLogin ? "Register" : "Login"}
                    </span>
                </p>

                {isLogin && !isForgot && (
                    <p
                        onClick={() => setIsForgot(true)}
                        className="text-center text-blue-500 font-semibold cursor-pointer mt-2"
                    >
                        Forgot Password?
                    </p>
                )}
            </div>
        </div>
    );
};

export default AuthPage;