import React from 'react'

const page = () => {
  const getJobStatusBgColor = (status) => {
    switch (status.toLowerCase()) {
      case "selected":
        return "bg-green-300 text-green-900"
      case "rejected":
        return "bg-red-100 text-red-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "interviewing":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  }

  const appliedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechVision Ltd",
      location: "Lahore, Pakistan",
      salary: "Rs 80,000 - 150,000 / month",
      jobStatus: "Interviewing",
      interviewDate: "2025-12-15",
      interviewTime: "11:00 AM"
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "SoftCube Solutions",
      location: "Karachi, Pakistan",
      salary: "Rs 90,000 - 170,000 / month",
      jobStatus: "Interviewing",
      interviewDate: "2025-12-18",
      interviewTime: "03:00 PM"
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "InnovateX Labs",
      location: "Islamabad, Pakistan",
      salary: "Rs 120,000 - 200,000 / month",
      jobStatus: "Selected",
      interviewDate: "2025-11-30",
      interviewTime: "01:00 PM"
    },
    {
      id: 4,
      title: "React Developer",
      company: "BrightCoders Pvt Ltd",
      location: "Lahore, Pakistan",
      salary: "Rs 100,000 - 180,000 / month",
      jobStatus: "Interviewing",
      interviewDate: "2025-12-20",
      interviewTime: "12:30 PM"
    },
    {
      id: 5,
      title: "Python / Django Developer",
      company: "CodeWave Systems",
      location: "Rawalpindi, Pakistan",
      salary: "Rs 110,000 - 190,000 / month",
      jobStatus: "Pending",
      interviewDate: null,
      interviewTime: null
    },
    {
      id: 6,
      title: "Mobile App Developer",
      company: "AppCraft Studio",
      location: "Multan, Pakistan",
      salary: "Rs 80,000 - 140,000 / month",
      jobStatus: "Rejected",
      interviewDate: null,
      interviewTime: null
    },
    {
      id: 7,
      title: "UI/UX Designer",
      company: "PixelEdge Agency",
      location: "Faisalabad, Pakistan",
      salary: "Rs 70,000 - 120,000 / month",
      jobStatus: "Rejected",
      interviewDate: null,
      interviewTime: null
    },
    {
      id: 8,
      title: "DevOps Engineer",
      company: "CloudSphere Technologies",
      location: "Karachi, Pakistan",
      salary: "Rs 150,000 - 250,000 / month",
      jobStatus: "Interviewing",
      interviewDate: "2025-12-22",
      interviewTime: "10:00 AM"
    },
    {
      id: 9,
      title: "Software Engineer",
      company: "AlgoMatrix Ltd",
      location: "Lahore, Pakistan",
      salary: "Rs 100,000 - 180,000 / month",
      jobStatus: "Selected",
      interviewDate: "2025-11-28",
      interviewTime: "09:30 AM"
    },
    {
      id: 10,
      title: "QA Automation Engineer",
      company: "TestGenius Labs",
      location: "Islamabad, Pakistan",
      salary: "Rs 90,000 - 160,000 / month",
      jobStatus: "Selected",
      interviewDate: "2025-12-01",
      interviewTime: "02:00 PM"
    }
  ];

  return (
    <>
      <h1 className='text-4xl font-bold text-center py-5'>Saved Jobs</h1>
      <div className='w-full py-5 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {appliedJobs.map((apply) => (
          <>
            <div className='border border- rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white'>
              <h2 className="text-xl font-semibold">{apply.title}</h2>

              <p className="text-gray-600 mt-1">{apply.company}</p>

              <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                <span>{apply.location}</span>
                {/* {<span className={`px-2 py-1 rounded-full text-xs font-medium ${getJobStatusBgColor(apply.jobStatus)}`}>
                  {apply.jobStatus}
                </span>} */}
              </div>

              <div className='flex items-center justify-start gap-5'>
                <p className="text-black font-semibold mt-3">Interview Date and Time: <span className='text-blue-700'>{apply.interviewDate}</span></p>
                <p className="text-blue-700 font-medium mt-3">{apply.interviewTime}</p>
              </div>
            </div >
          </>
        ))}
      </div >
    </>
  )
}

export default page