"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import JobCard from "@/components/JobCard"
import { useJobs } from "@/hooks/useJobs"
import { Loader2, Search, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import JobFilter from "@/components/job_filters/JobFilter"

const JobsPage = () => {
  const router = useRouter()
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [salarySort, setSalarySort] = useState("none")
  const { jobs, loading, error, pagination, updateFilters, clearFilters, goToPage } = useJobs(filters);
  const handleFilterChange = (newFilters) => {
    updateFilters(newFilters);
  };

  const handlePageChange = (page) => {
    goToPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const filteredJobs = jobs
    .filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(updateFilters.toString().toLowerCase()) ||
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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center gap-3 text-red-800 mb-3">
              <AlertCircle className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Error Loading Jobs</h3>
            </div>
            <p className="text-red-700">{error}</p>
            <button
              onClick={() => updateFilters({})}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

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
        <div className="lg:col-span-1">
          <JobFilter filteredJobs={filteredJobs} jobs={jobs} locationFilter={locationFilter} salarySort={salarySort} />
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">Loading jobs...</p>
            </div>
          </div>
        )}

        {/* Jobs Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
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

      {pagination.count > 0 && (
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            Page {pagination.page} of {Math.ceil(pagination.count / pagination.pageSize)}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={!pagination.previous}
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${pagination.previous
                ? 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="flex gap-1">
              {[...Array(Math.min(5, Math.ceil(pagination.count / pagination.pageSize)))].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 rounded-md ${pagination.page === pageNum
                      ? 'bg-[#1A4767] text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={!pagination.next}
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${pagination.next
                ? 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>


  )
}

export default JobsPage