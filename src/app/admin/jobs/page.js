'use client'
import { jobs } from "@/app/data/jobs";
import Link from "next/link";

const Adminjobs = () => {

  const handleEdit = (jobId) => console.log(`Edit job: ${jobId}`);
  const handleDelete = (jobId) => {
    if (window.confirm(`Are you sure you want to delete job ${jobId}?`)) {
      console.log(`Delete job: ${jobId}`);
    }
  };
  const handleToggleBlock = (jobId, currentStatus) => {
    console.log(`Toggle block for job: ${jobId}. Current status: ${currentStatus}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">All jobs</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden bg-white">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Company</th>
              <th className="px-6 py-3 text-left">Job Type</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={job.id} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition`}>
                <td className="px-6 py-4">{job.id}</td>
                <td className="px-6 py-4">
                  <Link href={`/jobs/job-details/${job.slug}`} className="text-black font-medium hover:underline">
                    {job.title}
                  </Link>
                </td>
                <td className="px-6 py-4 text-gray-600">{job.company}</td>

                {/* Role Badge */}
                <td className="px-6 py-4">
                  <span className={`ml-2 px-2 py-1 rounded-full text-sm font-semibold ${job.type === 'Remote' ? 'bg-blue-600 text-white' :
                    job.type === 'Hybrid' ? 'bg-purple-500 text-white' :
                      job.type === 'Full-time' ? 'bg-green-500 text-white' :
                        job.type === 'Part-time' ? 'bg-orange-300 text-white' :
                          job.type === 'Contract' ? 'bg-gray-400 text-white' :
                            ""
                    }`}>
                    {job.jobType}
                  </span>
                </td>

                {/* Status Badge */}
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full ${job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                    {job.status}
                  </span>
                </td>

                {/* Action Buttons */}
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => handleEdit(job.id)}
                    className="px-3 py-1 text-sm rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="px-3 py-1 text-sm rounded-md bg-red-600 text-white shadow hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleToggleBlock(job.id, job.status)}
                    className={`px-3 py-1 text-sm rounded-md shadow transition ${job.status === 'Active'
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-green-500 text-white hover:bg-green-600'
                      }`}
                  >
                    {job.status === 'Active' ? 'Block' : 'Unblock'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminjobs;
