'use client'
import React from "react";
import Image from "next/image";
import team from "@/assets/images/team-01.jpg"
import p1 from "@/assets/images/profile_img_2.png"
import p2 from "@/assets/images/profile_img_3.png"
import p3 from "@/assets/images/profile_img3.png"

export default function AboutUs() {
    return (
        <div className="bg-white text-black">

            <section className="py-20  ">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div>
                        <Image
                            src={team}
                            alt="JobsWaly Team"
                            className="rounded-2xl shadow-lg object-cover w-full h-1/2"
                        />
                    </div>

                    
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
                        <p className="mt-6 text-gray-900 text-lg font-medium leading-relaxed">
                            JobsWalay is a Pakistan-based job portal built to connect job seekers
                            with genuine employment opportunities. Our platform is designed to
                            simplify the job search process by providing verified job listings
                            published and managed through our administrative system.
                        </p>
                        <p className="mt-4 text-gray-900 text-lg font-medium  leading-relaxed">
                            We focus on creating a trustworthy environment where candidates
                            can confidently explore career opportunities and take the next
                            step toward their professional growth.
                        </p>
                    </div>
                </div>
            </section>

            
            <section className="py-10">
                <div className="max-w-4xl  px-6 p-10 mx-auto  text-center bg-gray-100 shadow-lg hover:shadow-xl rounded-2xl hover:scale-105 transform transition-all duration-300 cursor-pointer ">
                    <h2 className="text-4xl font-bold text-gray-900">Our Purpose</h2>
                    <p className="mt-6 text-gray-900 text-lg font-medium leading-relaxed">
                        Our purpose is to make job searching simple, reliable, and accessible
                        for everyone. By ensuring quality-controlled job postings, JobsWaly
                        helps job seekers find relevant opportunities while maintaining a
                        trusted hiring ecosystem across Pakistan.
                    </p>
                </div>
            </section>

            
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-900 text-center">
                        Success Stories
                    </h2>
                    <p className="mt-4 text-center text-lg text-gray-800">
                        Real people who found their jobs through JobsWalay
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Ali Raza",
                                role: "Software Developer",
                                image: p1,
                                text:
                                    "JobsWalay helped me find a verified job opportunity quickly. The process was simple and trustworthy."
                            },
                            {
                                name: "Ayesha Khan",
                                role: "HR Executive",
                                image:p3,
                                text:
                                    "I was struggling to find genuine listings. JobsWalay made job hunting stress-free for me."
                            },
                            {
                                name: "Usman Ahmed",
                                role: "Graphic Designer",
                                image:p2,
                                text:
                                    "Thanks to JobsWalay, I connected with the right opportunity that matched my skills."
                            }
                        ].map((person, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-8 rounded-2xl border hover:border-blue-300 cursor-pointer shadow-sm hover:shadow-lg text-center hover:scale-105 transform transition-all duration-300"
                            >
                                
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-blue-300 shadow"
                                />

                                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                                    {person.name}
                                </h3>
                                <p className="text-sm text-gray-500">{person.role}</p>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    “{person.text}”
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold text-black">
                        Building Careers, Creating Opportunities
                    </h2>
                    <p className="mt-6 text-gray-900 text-lg leading-relaxed">
                        At JobsWaly, we are committed to continuously improving our platform
                        to support job seekers and contribute to employment growth in
                        Pakistan. Our focus on authenticity, simplicity, and user trust
                        drives everything we do.
                    </p>
                    <button className="mt-10 px-10 py-3 bg-blue-600 text-white rounded-2xl font-medium hover:bg-blue-700 cursor-pointer transition">
                        Explore Jobs
                    </button>
                </div>
            </section>
        </div>
    );
}
