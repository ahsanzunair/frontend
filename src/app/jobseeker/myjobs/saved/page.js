'use client'
import { jobs } from '@/app/data/jobs.js';
import Link from 'next/link';
import React from 'react'


const savedJobs = () => {



  return (
    <>
      <h1 className='text-4xl font-bold text-center py-5'>Saved Jobs</h1>
      <div className='w-full py-5 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {jobs.map((job) => (
          <Link key={job.id} href={`/jobseeker/jobdetail/${job.slug}`}>
            <div className='border border- rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white'>
              <h2 className="text-xl font-semibold">{job.title}</h2>

              <p className="text-gray-600 mt-1">{job.company}</p>

              <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                <span>{job.location}</span>
                {<span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                  {job.jobType}
                </span>}
              </div>

              <p className="text-green-600 font-medium mt-3">{job.salary}</p>

              <button className="w-full mt-4 bg-[#114A69] text-white py-2 rounded-lg transition">
                Apply Now
              </button>
            </div>
          </Link>
        ))}
      </div >
    </>
  )
}

export default savedJobs