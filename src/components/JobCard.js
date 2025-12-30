'use client'
import { useRouter } from "next/navigation"


const JobCard = ({job}) => {
  const router = useRouter()
  return (
    <div
      key={job.id} property={job}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Job Header */}
      <div className="bg-linear-to-br from-[#1A4767] to-[#1A4767] p-6 relative">
        <div className="absolute top-4 right-4 bg-white/15 px-3 py-1.5 rounded-full text-xs font-semibold text-white backdrop-blur-sm">
          {job.jobType}
        </div>

        <h2 className="text-white text-lg md:text-xl font-bold mb-1.5 wrap-break-words leading-snug">
          {job.title}
        </h2>

        <div className="text-white/90 text-sm md:text-base flex items-center gap-1.5">
          <span className="opacity-80">🏢</span>
          <span>{job.company}</span>
        </div>
      </div>

      {/* Job Details */}
      <div className="flex-1">
        <div className="p-6 border-b border-gray-100 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
              <span>📍</span>
              Location
            </div>
            <div className="text-slate-800 text-sm font-semibold">{job.location}</div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
              <span>💼</span>
              Type
            </div>
            <div className="text-slate-800 text-sm font-semibold">{job.jobType}</div>
          </div>
        </div>

        <div className="p-6 flex justify-between items-center">
          <div className="flex flex-col gap-1.5">
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
              <span>💰</span>
              Monthly Salary
            </div>
            <div className="text-emerald-500 text-lg md:text-xl font-bold">{job.salary}</div>
          </div>

          <div className="text-xs text-[#1A4767] bg-blue-100 px-3 py-1.5 rounded font-semibold">
            {job.status}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 flex gap-3 border-t border-gray-100">
        <button
          onClick={() => router.push(`/jobs/job-details/${job.slug}`)}
          className="flex-1 bg-linear-to-br from-[#1A4767] to-[#0f374d] text-white px-4 py-3.5 border-none rounded-lg text-sm font-semibold cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>👁️</span>
          View Details
        </button>

        <button className="flex-1 bg-white text-slate-500 px-4 py-3.5 border-2 border-gray-200 rounded-lg text-sm font-semibold cursor-pointer hover:bg-gray-50 hover:text-[#1A4767] hover:border-[#1A4767] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
          <span>👎</span>
          Not Interested
        </button>
      </div>
    </div>
  )
}

export default JobCard