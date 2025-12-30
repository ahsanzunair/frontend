'use client'
import { useRouter } from "next/navigation";


const BackButton = () => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="inline-block hover:bg-[#174961] hover:text-white hover:font-bold mb-10 lg:mb-8 border-2 border-[#174961] text-[#174961] px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
    >
      ← Back to Jobs
    </button>
  )
}

export default BackButton