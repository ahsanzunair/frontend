import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const JobCard = ({ title, company, location, salary, type }) => {
    return (
      <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white">
        <h2 className="text-xl font-semibold">{title}</h2>

        <p className="text-gray-600 mt-1">{company}</p>

        <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
          <span>{location}</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
            {type}
          </span>
        </div>

        <p className="text-green-600 font-medium mt-3">{salary}</p>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>
    );
  };

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold">Welcome to Job Portal</h1>
      </div>
      <div className="max-w-5xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <JobCard
          title="Frontend Developer"
          company="Google"
          location="Lahore, Pakistan"
          salary="Rs 150,000 - 200,000"
          type="Full Time"
        />

        <JobCard
          title="Backend Engineer"
          company="Systems Ltd"
          location="Karachi, Pakistan"
          salary="Rs 120,000 - 180,000"
          type="Remote"
        />

        <JobCard
          title="Django Developer"
          company="Mindstorm Studios"
          location="Islamabad, Pakistan"
          salary="Rs 100,000 - 150,000"
          type="On-Site"
        />
      </div>
    </>
  );
}
