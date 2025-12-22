import { jobs } from '@/app/data/jobs'
import { Divide } from 'lucide-react'


const page = async ({ params }) => {
    const { slug } = await params
    const job = jobs.find(job => job.slug === slug)
    return (
        <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-lg p-6 w-full max-w-md border border-white/30">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">job Details</h2>

                <div className="space-y-3">
                    <p className="text-gray-700"><span className="font-semibold">job ID:</span> {job.id}</p>
                    <p className="text-gray-700"><span className="font-semibold">Name:</span> {job.title}</p>
                    <p className="text-gray-700"><span className="font-semibold">Description:</span> {job.description}</p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Job Type:</span>
                        <span className={`ml-2 px-2 py-1 rounded-full text-sm font-semibold ${job.type === 'Remote' ? 'bg-blue-600 text-white' :
                            job.type === 'Hybrid' ? 'bg-purple-500 text-white' :
                                job.type === 'Full-time' ? 'bg-green-500 text-white' :
                                  job.type === 'Part-time' ? 'bg-orange-300 text-white' :
                                  job.type === 'Contract' ? 'bg-gray-400 text-white' :
                                   ""
                            }`}>
                            {job.type}
                        </span>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default page