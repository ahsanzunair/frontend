'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react'




const JobForm = () => {



    const router = useRouter();


    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        DOB: "",
        phone: "",
        address: "",
        message: "",
        resume: null,
    });


    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({ ...formData, [name]: files ? files[0] : value });


        
        setErrors({ ...errors, [name]: "" });
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = "This field is required";
            }
        });


        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }


       
        navigate('/detail');
    }; return (
        <div className="bg-white min-h-screen pb-10 pt-10 px-4 md:px-10 flex flex-col">
            <main className="flex-1 max-w-2xl md:max-w-3xl mx-auto space-y-16">


                <section className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                        Apply Job
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl">
                        Get in touch with us! Fill the form or reach us directly via WhatsApp, phone, or social media.
                    </p>
                </section>


                <section className="flex flex-col lg:flex-row gap-10">


                    <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-[#114A69] mb-6">Fill The Form</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                placeholder="FirstName"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                placeholder="LastName"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="date"
                                name="DOB"
                                value={formData.DOB}
                                onChange={handleChange}
                                placeholder="DOB"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                            <input
                                type="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Address"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />



                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="About Yourself"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={5}
                                required
                            ></textarea>

                            <input
                                type="file"
                                name="resume"

                                accept=".pdf,.doc,.docx"
                                onChange={handleChange}
                                required
                                placeholder='Upload Files'
                                className="w-2xs bg-gray-300 rounded-full px-4 py-1 text-center  cursor-pointer hover:bg-gray-400 shadow-lg hover:shadow-2xl  text-black"
                            />


                            <button
                            onClick={() => router.push(`/jobseeker/apply-now/apply-details`)}
                                type="submit"
                                className="bg-[#114A69] hover:bg-[#0a557e] cursor-pointer text-white  text-lg font-bold py-3 px-6 rounded-lg transition-colors w-full"
                            >
                                Contine
                            </button>

                        </form>
                    </div>



                </section>

            </main>
        </div>
    );
};


export default JobForm