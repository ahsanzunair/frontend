import JobDetailClient from "@/components/JobDetailClient";
import { jobDetails } from "@/hooks/useJobDetail";

export default async function jobDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const { job, error } = await jobDetails(slug);


  return <JobDetailClient
    job={job}
    // loading={loading}
    error={error}
  />;
}