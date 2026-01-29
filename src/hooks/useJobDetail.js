import { jobsApi } from "@/lib/api/jobs";

export async function jobDetails(idOrSlug) {

  if (!idOrSlug) {
    return { job: null, error: "No job identifier provided" };
  }

  try {
    const isNumber = /^\d+$/.test(idOrSlug);

    let jobData;

    if (isNumber) {
      
      const jobId = Number(idOrSlug);
      jobData = await jobsApi.getJobById(jobId);
    } else {
      
      const response = await jobsApi.getJobBySlug(idOrSlug);

      
      jobData = response;
    }

   
    if (jobData && jobData.results && Array.isArray(jobData.results)) {

      if (jobData.results.length === 0) {
        return { job: null, error: "Job not found" };
      }

    
      const exactMatch = jobData.results.find(job => job.slug === idOrSlug);
      jobData = exactMatch || jobData.results[0];
    }

    if (!jobData || (!jobData.id && !jobData._id)) {
      return { job: null, error: "Job not found" };
    }

    
    const jobId = jobData.id || jobData._id;
    try {
      await jobsApi.incrementViews(jobId);
    } catch (viewErr) {
      console.warn("Failed to increment views:", viewErr);
    }

    return { job: jobData, error: null };

  } catch (err) {
    console.error("💥 Error in jobDetails:", err);


    return {
      job: null,
      error: err?.response?.data?.detail || err?.message || "Failed to fetch job details"
    };
  }
}