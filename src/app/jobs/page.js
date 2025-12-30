"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { jobs } from "@/app/data/jobs.js"
import JobCard from "@/components/JobCard"

const JobsPage = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [salarySort, setSalarySort] = useState("none")

  const filteredJobs = jobs
    .filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.includes(searchTerm.toLowerCase())

      const matchesLocation = locationFilter === "all" || job.location === locationFilter
      const matchesType = typeFilter === "all" || job.jobType === typeFilter

      return matchesSearch && matchesLocation && matchesType
    })
    .sort((a, b) => {
      if (salarySort === "high-to-low") {
        const salaryA = parseInt(a.salary.split("-")[1].replace("K", ""))
        const salaryB = parseInt(b.salary.split("-")[1].replace("K", ""))
        return salaryB - salaryA
      } else if (salarySort === "low-to-high") {
        const salaryA = parseInt(a.salary.split("-")[1].replace("K", ""))
        const salaryB = parseInt(b.salary.split("-")[1].replace("K", ""))
        return salaryA - salaryB
      }
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-50 p-5 overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-8 px-2.5">
          <h1 className="text-[#1A4767] text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2.5 text-center tracking-tight">
            Find Your Dream Job
          </h1>
          <p className="text-slate-500 text-sm md:text-base text-center max-w-2xl mx-auto leading-relaxed">
            Browse through our curated list of opportunities and find the perfect match for your skills
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white p-5 md:p-8 rounded-2xl border border-gray-200 shadow-lg mb-10">
          {/* Search Bar with Stats */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <div className="relative flex-1 w-full min-w-0">
              <input
                type="text"
                placeholder="🔍 Search jobs by title, company or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-sm md:text-base bg-white text-slate-800 shadow-sm focus:border-[#1A4767] focus:ring-2 focus:ring-[#1A4767]/20 focus:outline-none transition-all duration-300"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</div>
            </div>

            <button className="px-6 md:px-8 py-4 border-none rounded-xl text-sm md:text-base bg-linear-to-br from-[#1A4767] to-[#1A4767] text-white cursor-pointer font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap flex items-center gap-2 tracking-wide">
              🔍 Search Jobs
            </button>

            <div className="bg-slate-100 px-5 py-3 rounded-lg text-[#1A4767] font-bold text-sm md:text-base whitespace-nowrap flex items-center gap-2 border border-gray-200">
              <span className="text-lg">📋</span>
              <span>
                {filteredJobs.length} of {jobs.length} Jobs
              </span>
            </div>
          </div>

          {/* Filter Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
            {/* Location Filter */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <span className="text-base">📍</span>
                Location
              </label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-sm bg-white text-slate-800 cursor-pointer shadow-sm focus:border-[#1A4767] focus:ring-2 focus:ring-[#1A4767]/20 focus:outline-none transition-all duration-300 appearance-none pr-10"
              >
                <option value="all">All Locations</option>
                <option value="Lahore, Pakistan">Lahore, Pakistan</option>
                <option value="Karachi, Pakistan">Karachi, Pakistan</option>
                <option value="Islamabad, Pakistan">Islamabad, Pakistan</option>
                <option value="Rawalpindi, Pakistan">Rawalpindi, Pakistan</option>
                <option value="Faisalabad, Pakistan">Faisalabad, Pakistan</option>
                <option value="Multan, Pakistan">Multan, Pakistan</option>
              </select>
            </div>

            {/* Job Type Filter */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <span className="text-base">💼</span>
                Job Type
              </label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-sm bg-white text-slate-800 cursor-pointer shadow-sm focus:border-[#1A4767] focus:ring-2 focus:ring-[#1A4767]/20 focus:outline-none transition-all duration-300 appearance-none pr-10"
              >
                <option value="all">All Types</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
                <option value="Physical">Onsite</option>
                <option value="Full-time">Full time</option>
                <option value="Part-time">Part time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            {/* Salary Sort */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <span className="text-base">💰</span>
                Salary Sort
              </label>
              <select
                value={salarySort}
                onChange={(e) => setSalarySort(e.target.value)}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-sm bg-white text-slate-800 cursor-pointer shadow-sm focus:border-[#1A4767] focus:ring-2 focus:ring-[#1A4767]/20 focus:outline-none transition-all duration-300 appearance-none pr-10"
              >
                <option value="none">Default Sorting</option>
                <option value="high-to-low">High to Low</option>
                <option value="low-to-high">Low to High</option>
              </select>
            </div>

            {/* Reset Button */}
            <div className="flex flex-col justify-end gap-2">
              <label className="text-xs font-semibold text-slate-700 opacity-0">Reset</label>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setLocationFilter("all")
                  setTypeFilter("all")
                  setSalarySort("none")
                }}
                className="w-full px-6 py-3.5 border-2 border-gray-200 rounded-lg text-sm bg-white text-slate-500 cursor-pointer font-semibold hover:bg-gray-50 hover:text-[#1A4767] hover:border-[#1A4767] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
              >
                <span className="text-base">🔄</span>
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard job = {job} />
            ))}
          </div>
        ) : (
          <div className="text-center p-12 md:p-16 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl text-gray-200 mb-5">🔍</div>
            <h3 className="text-slate-800 text-2xl md:text-3xl font-bold mb-3">No Jobs Found</h3>
            <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Try adjusting your search filters or browse all available jobs
            </p>
            <button
              onClick={() => {
                setSearchTerm("")
                setLocationFilter("all")
                setTypeFilter("all")
                setSalarySort("none")
              }}
              className="mt-6 px-8 py-3.5 border-none rounded-lg text-sm md:text-base bg-linear-to-br from-[#1A4767] to-[#0f374d] text-white cursor-pointer font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Footer Stats */}
        {filteredJobs.length > 0 && (
          <div className="mt-10 p-5 bg-white rounded-xl border border-gray-200 text-center">
            <div className="text-slate-500 text-sm flex items-center justify-center gap-2">
              <span className="text-base">ℹ️</span>
              Showing {filteredJobs.length} out of {jobs.length} jobs
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default JobsPage