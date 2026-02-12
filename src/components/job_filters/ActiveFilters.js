import { useJobs } from "@/hooks/useJobs"
import { Search } from "lucide-react";

const ActiveFilters = () => {
    const { filters, updateFilters } = useJobs()

    const activeFilters = Object.entries(filters).filter(
        ([key, value]) => value !== undefined && value !== ""
    );

    if (activeFilters.length === 0) {
        return null;
    }

    const removeFilter = (filterKey) => {
        const newFilters = { ...filters };
        delete newFilters[filterKey];
        updateFilters(newFilters);
    };

    const filterLabels = {
        Search: "Search",
        job_type: "Job Type",
        location: "Location",
        min_salary: "Minimum Salary",
        max_salary: "Maximum Salary",
    };
    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Active Filters:</h3>
            <div className="flex flex-wrap gap-2">
                {activeFilters.map(([key, value]) => (
                    <div key={key} className="bg-blue-100 text-[#1A4767] px-3 py-1 rounded-full flex items-center gap-2">
                        <span>
                            {filterLabels[key] || key}: <strong>{value}</strong>
                        </span>
                        <button onClick={() => removeFilter(key)} className="text-[#1A4767] hover:text-blue-950">
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActiveFilters