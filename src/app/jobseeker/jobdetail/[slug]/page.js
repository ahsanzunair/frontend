import { jobs } from "@/app/data/jobs.js";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default async function JobDetailPage({ params }) {

  // const router = useRouter()
  const { slug } = await params;

  // Find the job
  const job = jobs.find(job => job.slug === slug);

  if (!job) {
    return (
      <div style={{ minHeight: "100vh", background: "white", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "black", fontSize: "24px", textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "20px" }}>❌</div>
          Job not found
        </div>
      </div>
    );
  }

  const renderStars = (rating) => (
    <div style={{ display: "flex", gap: "4px" }}>
      {[1,2,3,4,5].map(star => (
        <span key={star} style={{ fontSize: "24px", color: star <= rating ? "#fbbf24" : "#374151" }}>★</span>
      ))}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "white", padding: "20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Link href={'/'} className="hover:bg-[#174961]"  style={{
          background: "transparent",
          border: "2px solid #174961",
          color: "#174961",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "600",
        }}>← Back to Jobs</Link>

        <div className="shadow-2xl" style={{ background: "white", borderRadius: "15px", padding: "clamp(20px, 4vw, 40px)" }}>
          <h1 style={{ color: "black", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: "bold", marginBottom: "10px" }}>{job.title}</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "15px" }}>
            <span style={{ background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)", color: "white", padding: "6px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "600" }}>{job.jobType}</span>
            <span style={{ color: "#174961", fontSize: "14px", fontWeight: "600" }}>📍 {job.location}</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
            <div style={{ background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", borderRadius: "12px", padding: "20px" }}>
              <div style={{ color: "black", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>💼 EXPERIENCE</div>
              <div style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}>{job.experience || "N/A"}</div>
            </div>
            <div style={{ background: "rgba(220, 38, 38, 0.1)", border: "1px solid rgba(220, 38, 38, 0.3)", borderRadius: "12px", padding: "20px" }}>
              <div style={{ color: "#dc2626", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>💰 SALARY RANGE</div>
              <div style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}>{job.salary}</div>
            </div>
            <div style={{ background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", borderRadius: "12px", padding: "20px" }}>
              <div style={{ color: "#3b82f6", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>📅 DEADLINE</div>
              <div style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}>{job.deadline || "N/A"}</div>
            </div>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "black", fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "bold", marginBottom: "15px" }}>📋 Job Description</h3>
            <p style={{ color: "black", fontSize: "16px", lineHeight: "1.8" }}>{job.description || "No description available."}</p>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "black", fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "bold", marginBottom: "15px" }}>✓ Key Requirements</h3>
            <ul style={{ color: "black", fontSize: "16px", lineHeight: "1.8", paddingLeft: "20px" }}>
              {job.requirements?.map((req,i) => <li key={i} style={{ marginBottom: "10px" }}>{req}</li>)}
            </ul>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "black", fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "bold", marginBottom: "15px" }}>🛠️ Required Skills</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {job.skills?.map((skill,i) => (
                <span key={i} style={{ background: "linear-gradient(135deg, #174961 0%, #2563eb 100%)", color: "white", padding: "8px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "600" }}>{skill}</span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "black", fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "bold", marginBottom: "15px" }}>🎁 Benefits</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              {job.benefits?.map((benefit,i) => (
                <div key={i} style={{ background: "rgba(220, 38, 38, 0.1)", border: "1px solid rgba(220, 38, 38, 0.3)", borderRadius: "8px", padding: "12px 16px", color: "black", fontSize: "14px", fontWeight: "600" }}>✓ {benefit}</div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
            <button style={{ background: "#dc2626", color: "white", padding: "14px 32px", borderRadius: "8px", fontSize: "16px", fontWeight: "600", flex: "1 1 200px", cursor: "pointer" }}>🔖 Save Job</button>
            <Link href={`/jobseeker/apply-now`} style={{ background: "linear-gradient(135deg, #174961 0%, #2563eb 100%)", color: "white", padding: "14px 48px", borderRadius: "8px", fontSize: "18px", fontWeight: "700", flex: "1 1 200px", cursor: "pointer" }}>Apply Now →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
