import React from 'react'

const SavedJobs = () => {
 const savedJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechVision Ltd",
    location: "Lahore, Pakistan",
    salary: "Rs 80,000 - 150,000 / month",
    jobType: "Full-time"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "SoftCube Solutions",
    location: "Karachi, Pakistan",
    salary: "Rs 90,000 - 170,000 / month",
    jobType: "Full-time"
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "InnovateX Labs",
    location: "Islamabad, Pakistan",
    salary: "Rs 120,000 - 200,000 / month",
    jobType: "Remote"
  },
  {
    id: 4,
    title: "React Developer",
    company: "BrightCoders Pvt Ltd",
    location: "Lahore, Pakistan",
    salary: "Rs 100,000 - 180,000 / month",
    jobType: "Full-time"
  },
  {
    id: 5,
    title: "Python / Django Developer",
    company: "CodeWave Systems",
    location: "Rawalpindi, Pakistan",
    salary: "Rs 110,000 - 190,000 / month",
    jobType: "Hybrid"
  },
  {
    id: 6,
    title: "Mobile App Developer",
    company: "AppCraft Studio",
    location: "Multan, Pakistan",
    salary: "Rs 80,000 - 140,000 / month",
    jobType: "Full-time"
  },
  {
    id: 7,
    title: "UI/UX Designer",
    company: "PixelEdge Agency",
    location: "Faisalabad, Pakistan",
    salary: "Rs 70,000 - 120,000 / month",
    jobType: "Part-time"
  },
  {
    id: 8,
    title: "DevOps Engineer",
    company: "CloudSphere Technologies",
    location: "Karachi, Pakistan",
    salary: "Rs 150,000 - 250,000 / month",
    jobType: "Full-time"
  },
  {
    id: 9,
    title: "Software Engineer",
    company: "AlgoMatrix Ltd",
    location: "Lahore, Pakistan",
    salary: "Rs 100,000 - 180,000 / month",
    jobType: "Remote"
  },
  {
    id: 10,
    title: "QA Automation Engineer",
    company: "TestGenius Labs",
    location: "Islamabad, Pakistan",
    salary: "Rs 90,000 - 160,000 / month",
    jobType: "Contract"
  }
];



  return (
    <>
      <h1 className='text-4xl font-bold text-center py-5'>Saved Jobs</h1>
      <div className='w-full py-5 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {savedJobs.map((saved) => (
          <>
            <div className='border border- rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white'>
              <h2 className="text-xl font-semibold">{saved.title}</h2>

              <p className="text-gray-600 mt-1">{saved.company}</p>

              <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                <span>{saved.location}</span>
                {<span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
              {saved.jobType}
            </span>}
              </div>

              <p className="text-green-600 font-medium mt-3">{saved.salary}</p>

              <button className="w-full mt-4 bg-gradient-to-r from-[#8C0807] from-5% via-[#8C0807] via-10% to-[#114A69] to-80% text-white py-2 rounded-lg transition">
                Apply Now
              </button>
            </div>
          </>
        ))}
      </div >
    </>
  )
}

export default SavedJobs