'use client'

import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Details = () => {
    const [formData, setFormData] = useState({
        experience: "",
        companyname: "",
        country: "",
        provinces: "",
        city: "",
        postalcode: "",

    });

    const countries = [
        "India",
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        "Pakistan",
        "Germany",
        "France",
        "UAE",
        "Saudi Arabia",
        "Singapore",
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Application Submit successfully!");
        setFormData({
            experience: "",
            companyname: "",
            country: "",
            provinces: "",
            city: "",
            postalcode: "",

        });
    };

    return (
        <div className="bg-white min-h-screen pb-10 pt-10 px-4 md:px-10 flex flex-col">
            <main className="flex-1 max-w-2xl md:max-w-3xl mx-auto space-y-16">
                <section className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                        Apply Job
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl">
                        Get in touch with us! Fill the form below.
                    </p>
                </section>

                <section className="flex flex-col gap-10">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-[#114A69] mb-6">
                            Fill The Form
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="number"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                min={0}
                                placeholder="Experience (Years)"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                            <input
                                type="text"
                                name="companyname"
                                value={formData.companyname}
                                onChange={handleChange}
                                placeholder="Company Name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select Country</option>
                                {countries.map((country, index) => (
                                    <option key={index} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>


                            <input
                                type="text"
                                name="provincesy"
                                value={formData.provincesy}
                                onChange={handleChange}
                                placeholder="provincesy"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="City"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                            <input
                                type="text"
                                name="postalcode"
                                value={formData.postalcode}
                                onChange={handleChange}
                                placeholder="Postal Code"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#114A69] hover:bg-[#09567f] cursor-pointer text-white text-lg font-bold py-3 px-6 rounded-lg transition-colors w-full"
                            >
                                Apply
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Details;