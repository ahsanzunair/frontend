'use client'
import { useEffect, useState } from "react";
import laptopImg from "@/assets/images/hero/laptop.jpg"
import professionalImg from "@/assets/images/hero/professional.jpg"
import hireImg from "@/assets/images/hero/hire.webp"
import Image from "next/image";
import { useRouter } from "next/navigation";



const HeroSlider = () => {
    const router = useRouter()
    const slides = [
        {
            id: 1,
            image: laptopImg,
            heading: "Discover Career Opportunities",
            text: "Connect with leading companies and find roles that match your skills and ambitions.",
        },
        {
            id: 2,
            image: hireImg,
            heading: "Hire Qualified Professionals",
            text: "Post job openings and reach talented candidates from diverse industries.",
        },
        {
            id: 3,
            image: professionalImg,
            heading: "Advance Your Professional Journey",
            text: "Build your career with trusted employers and meaningful opportunities.",
        },
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(slider);
    }, []);

    return (
        <div className="relative w-full h-[90vh] overflow-hidden">
            {slides.map((slide, i) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
                        }`}
                >

                    <Image
                        src={slide.image}
                        alt="slide"
                        className="w-full h-full object-cover"
                    />


                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                {slide.heading}
                            </h1>
                            <p className="text-lg md:text-xl mb-6">
                                {slide.text}
                            </p>
                            <button onClick={()=>router.push('/jobs')} className="bg-[#1A4767]  cursor-pointer px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300">
                                Explore Jobs
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HeroSlider;
