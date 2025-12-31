'use client'
import { jobs } from "@/app/data/jobs"
import Image from "next/image"
import { useRouter } from "next/navigation"
import companyProfileImg from "@/assets/images/hero/professional.jpg"

const HomejobsList = () => {
    const router = useRouter()

    return (
        <>
            <h1 className="text-4xl font-bold text-center text-[#1A4767]">Job Listing</h1>
            <div className="h-auto m-8 md:m-12 p-6 rounded-md">
                <div className="">
                    {
                        jobs.slice(0, 5).map((job, index) => (
                            <div key={index}>
                                <div className="w-full flex sm:flex-row flex-col gap-3 justify-between items-center bg-white shadow-md m-2 p-6 rounded-md">
                                    <div className="flex gap-5 items-center">
                                        <div >
                                            <Image src={companyProfileImg} className="w-24 h-24 rounded-full" />
                                        </div>
                                        <div>
                                            <h1 className="text-xl md:text-2xl font-bold text-[#1A4767]">{job.title}</h1>
                                            <p>{job.jobType}</p>
                                            <p>{job.location}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => router.push(`jobs/job-details/${job.slug}`)} className="bg-[#1A4767] px-5 py-2 text-white rounded font-semibold">Apply now</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full text-center">
                    <button onClick={() => router.push('/jobs')} className="bg-[#1A4767] text-2xl px-8 py-4 text-white font-bold rounded-md mt-5">See All Jobs</button>
                </div>
            </div>
        </>
    )
}

export default HomejobsList