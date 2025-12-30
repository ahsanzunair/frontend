import { jobs } from "@/app/data/jobs.js";
import BackButton from "@/components/BackButton";
import Link from "next/link";

export default async function JobDetailPage({ params }) {
  const { slug } = await params;
  const job = jobs.find(job => job.slug === slug);

  if (!job) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-5">
        <div className="text-center text-black">
          <div className="text-5xl mb-5">❌</div>
          <div className="text-2xl">Job not found</div>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-600"}`}
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white p-5">
      <div className="max-w-6xl mx-auto">
        <BackButton />
        <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-8 lg:p-10">
          <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold mb-2.5">
            {job.title}
          </h1>

          <div className="flex items-center gap-3 flex-wrap mb-4">
            <span className="bg-linear-to-br from-red-600 to-red-800 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              {job.jobType}
            </span>
            <span className="text-[#174961] text-sm font-semibold">
              📍 {job.location}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
              <div className="text-black text-sm font-semibold mb-2">💼 EXPERIENCE</div>
              <div className="text-black text-lg font-bold">
                {job.experience || "N/A"}
              </div>
            </div>

            <div className="bg-red-50 border border-red-300 rounded-xl p-5">
              <div className="text-red-600 text-sm font-semibold mb-2">💰 SALARY RANGE</div>
              <div className="text-black text-lg font-bold">{job.salary}</div>
            </div>

            <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
              <div className="text-blue-600 text-sm font-semibold mb-2">📅 DEADLINE</div>
              <div className="text-black text-lg font-bold">
                {job.deadline || "N/A"}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-black text-xl md:text-2xl font-bold mb-4">📋 Job Description</h3>
            <p className="text-black text-base leading-relaxed">
              {job.description || "No description available."}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-black text-xl md:text-2xl font-bold mb-4">✓ Key Requirements</h3>
            <ul className="text-black text-base leading-relaxed list-disc pl-5 space-y-2.5">
              {job.requirements?.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-black text-xl md:text-2xl font-bold mb-4">🛠️ Required Skills</h3>
            <div className="flex flex-wrap gap-2.5">
              {job.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="bg-linear-to-br from-[#174961] to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-black text-xl md:text-2xl font-bold mb-4">🎁 Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {job.benefits?.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-red-50 border border-red-300 rounded-lg px-4 py-3 text-black text-sm font-semibold"
                >
                  ✓ {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
            <button className="bg-red-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold flex-1 min-w-[200px] cursor-pointer hover:bg-red-700 transition-colors">
              🔖 Save Job
            </button>
            <Link
              href="/jobseeker/apply-now"
              className="bg-linear-to-br from-[#174961] to-blue-600 text-white px-8 py-3.5 rounded-lg text-lg font-bold flex-1 min-w-[200px] cursor-pointer text-center hover:opacity-90 transition-opacity"
            >
              Apply Now →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 