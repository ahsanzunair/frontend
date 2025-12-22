import Link from 'next/link'
import React from 'react'

const JobsNav = () => {
    return (
        <>
            <h1 className='text-4xl font-bold text-center py-5'>My Jobs</h1>
            <div className='w-ful bg-white shadow-md border-0'>
                <div className='flex items-center justify-center'>
<<<<<<< HEAD
                    <Link href={'/jobseeker/myjobs/saved'} className='w-1/3 p-5 border-2 border-gray-300 text-center'>Saved Jobs</Link>
                    <Link href={'/jobseeker/myjobs/applied'} className='w-1/3 p-5 border-2 border-gray-300 text-center'>Applied Jobs</Link>
                    <Link href={'/jobseeker/myjobs/interviews'} className='w-1/3 p-5 border-2 border-gray-300 text-center'>Interviews</Link>
=======
                    <Link href={'/jobseeker/saved'} className='w-1/3 p-5 border-2 border-gray-300 text-center'>Saved Jobs</Link>
                    <Link href={'/jobseeker/applied'} className='w-1/3 p-5 border-2 border-gray-300 text-center'>Applied Jobs</Link>
                    <Link href={'/jobseeker/interviews'} className='w-1/3 p-5 border-2 border-gray-300 text-center'>Interviews</Link>
>>>>>>> f749a46fd1b7c36ef3d95f28f205de872598b59e
                </div>
            </div>
        </>
    )
}

export default JobsNav