import { users } from '@/app/data/users'
import { Divide } from 'lucide-react'
import React from 'react'


const page = async ({ params }) => {
    const { slug } = await params
    const user = users.find(user => user.slug === slug)
    return (
        <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-lg p-6 w-full max-w-md border border-white/30">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Details</h2>

                <div className="space-y-3">
                    <p className="text-gray-700"><span className="font-semibold">User ID:</span> {user.id}</p>
                    <p className="text-gray-700"><span className="font-semibold">Name:</span> {user.name}</p>
                    <p className="text-gray-700"><span className="font-semibold">Email:</span> {user.email}</p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Role:</span>
                        <span className={`ml-2 px-2 py-1 rounded-full text-sm font-semibold ${user.role === 'admin' ? 'bg-blue-600 text-white' :
                                user.role === 'employer' ? 'bg-purple-500 text-white' :
                                    user.role === 'jobseeker' ? 'bg-green-500 text-white' :
                                        'bg-gray-400 text-white'
                            }`}>
                            {user.role}
                        </span>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default page