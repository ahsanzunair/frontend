import { jobsApi } from "@/lib/api/jobs";
import { useState, useEffect, useCallback } from "react";
import { useDebounce } from './useDebounce';

export const useJobs = (initialFilters = {}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({
        count: 0,
        next: null,
        previous: null,
        page: 1,
        pageSize: 10,
    });
    const [filters, setFilters] = useState(initialFilters)
    const debouncedFilters = useDebounce(filters, 500);

    const fetchJobs = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await jobsApi.getJobs({
                ...debouncedFilters,
                page: pagination.page,
                page_size: pagination.pageSize,
            });

            setJobs(response.results);
            setPagination(prev => ({
                ...prev,
                count: response.count,
                next: response.next,
                previous: response.previous,
            }));
        } catch (err) {
            setError(err.response?.data?.detail || err.message || "Something went wrong");
            setJobs([]);
        } finally{
            setLoading(false);
        }
    }, [debouncedFilters, pagination.page, pagination.pageSize]);

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

    const updateFilters = useCallback((newFilters) => {
        setFilters(prev => ({...prev, ...newFilters}));
        setPagination(prev => ({...prev, page:1}));
    }, []);
    
    const clearFilters = useCallback(() => {
        setFilters({});
        setPagination(prev => ({...prev, page:1}));
    }, []);

    const goToPage = useCallback((page) => {
        setPagination(prev => ({...prev, page}));
    },[]);

    return{
        jobs,
        loading,
        error,
        pagination, 
        filters,
        updateFilters,
        clearFilters,
        goToPage,
        refetch: fetchJobs,
    };
};