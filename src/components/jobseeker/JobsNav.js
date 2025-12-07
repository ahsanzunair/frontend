import Link from 'next/link'
import React from 'react'

const JobsNav = () => {
    return (
        <>
            <h1 className='text-4xl font-bold text-center py-5'>My Jobs</h1>
            <div className='w-ful bg-white shadow-md border-0'>
                <div className='flex items-center justify-center'>
                    <Link href={'/jobseeker/saved'} className='w-1/3 p-5 border-2 border-gray-300 text-center'>Saved Jobs</Link>
                    <Link href={'/jobseeker/applied'} className='w-1/3 p-5 border-2 border-gray-300 text-center'>Applied Jobs</Link>
                    <Link href={'/jobseeker/interviews'} className='w-1/3 p-5 border-2 border-gray-300 text-center'>Interviews</Link>
                </div>
            </div>
        </>
    )
}

export default JobsNav