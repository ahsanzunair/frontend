import { useJobs } from "@/hooks/useJobs"
import { useEffect, useState } from "react"

const SearchBar = () => {
    const { updateFilters } = useJobs()
    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm.trim()) {
                updateFilters({ search: searchTerm });
            } else {
                updateFilters({search: undefined})
            }
        }, 500)

        return () => clearTimeout(timer);
    }, [searchTerm]);
    return (
    <div className="w-full max-w-2xl mx-auto mb-8">
        <input 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search jobs by title, company, or keywords..."
        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
    </div>
  )
}

export default SearchBar