"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { jobs } from "@/app/data/jobs.js";



const JobsPage = () => {
    const { id } = useParams();

    const router = useRouter();
    const JobDetailPage = () => {
        navigate("/Jobs/Details/:id");
    };
   

    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState("all");
    const [typeFilter, setTypeFilter] = useState("all");
    const [salarySort, setSalarySort] = useState("none");

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.skills.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesLocation = locationFilter === "all" || job.location === locationFilter;
        const matchesType = typeFilter === "all" || job.type === typeFilter;

        return matchesSearch && matchesLocation && matchesType;
    })
        .sort((a, b) => {
            if (salarySort === "high-to-low") {
                const salaryA = parseInt(a.salary.split('-')[1].replace('K', ''));
                const salaryB = parseInt(b.salary.split('-')[1].replace('K', ''));
                return salaryB - salaryA;
            } else if (salarySort === "low-to-high") {
                const salaryA = parseInt(a.salary.split('-')[1].replace('K', ''));
                const salaryB = parseInt(b.salary.split('-')[1].replace('K', ''));
                return salaryA - salaryB;
            }
            return 0;
        });

    return (
        <div style={{ minHeight: "auto", background: "white", padding: "15px", overflowY: "auto" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
                <div style={{ marginBottom: "20px", padding: "0 5px" }}>
                    <h2 style={{ color: "black", fontSize: "clamp(24px, 5vw, 32px)", fontWeight: "bold", marginBottom: "8px", textAlign: "center" }}>Jobs</h2>
                </div>

                <div style={{ background: "#174961",
                     padding: "clamp(15px, 3vw, 20px)", borderRadius: "10px", marginBottom: "25px", border: "1px solid rgba(220, 38, 38, 0.3)", boxShadow: "0 4px 16px rgba(220, 38, 38, 0.2)" }}>
                    <div style={{ display: "flex", alignItems: "stretch", gap: "10px", flexWrap: "wrap", marginBottom: "15px" }}>
                        <input
                            type="text"
                            placeholder="🔍 Search jobs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                flex: "1 1 250px",
                                minWidth: "0",
                                padding: "12px 15px",
                                border: "2px solid #3b82f6",
                                borderRadius: "8px",
                                fontSize: "14px",
                                background: "transparent",
                                color: "#fff",
                                boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)"
                            }}
                        />
                        <button
                            style={{
                                padding: "12px 24px",
                                border: "2px solid #3b82f6",
                                borderRadius: "8px",
                                fontSize: "14px",
                                background: "#174961",
                                color: "white",
                                cursor: "pointer",
                                fontWeight: "600",
                                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)",
                                transition: "all 0.3s ease",
                                whiteSpace: "nowrap",
                                display: "flex",
                                alignItems: "center",
                                gap: "5px"
                            }}
                            // onMouseEnter={(e) => {
                            //     e.target.style.background = "#2563eb";
                            //     e.target.style.transform = "scale(1.05)";
                            // }}
                            // onMouseLeave={(e) => {
                            //     e.target.style.background = "#3b82f6";
                            //     e.target.style.transform = "scale(1)";
                            // }}
                        >
                            🔍 Search
                        </button>
                        <div style={{
                            color: "#e0e0e0",
                            fontWeight: "600",
                            fontSize: "clamp(12px, 2vw, 14px)",
                            whiteSpace: "nowrap",
                            display: "flex",
                            alignItems: "center",
                            padding: "0 10px"
                        }}>
                            📋 {filteredJobs.length} of {jobs.length} jobs
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <label style={{ fontSize: "12px", fontWeight: "600", color: "#e0e0e0" }}>📍 Location</label>
                            <select
                                value={locationFilter}
                                onChange={(e) => setLocationFilter(e.target.value)}
                                style={{
                                    padding: "10px 12px",
                                    border: "2px solid #3b82f6",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    background: "#174961",
                                    color: "#fff",
                                    cursor: "pointer",
                                    width: "100%",
                                    boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)"
                                }}
                            >
                                <option value="all">All Locations</option>
                                <option value="Johar town Lahore">Lahore, Pakistan</option>
                                <option value="Gulberg, Lahore">Islamabad, Pakistan</option>
                                <option value="Model town Lahore">Karachi, Pakistan</option>
                                <option value="Model town Lahore">Faislabad, Pakistan</option>
                            </select>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <label style={{ fontSize: "12px", fontWeight: "600", color: "#e0e0e0" }}>💼 Job Type</label>
                            <select
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                                style={{
                                    padding: "10px 12px",
                                    border: "2px solid #3b82f6",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    background: "#174961",
                                    color: "#fff",
                                    cursor: "pointer",
                                    width: "100%",
                                    boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)"
                                }}
                            >
                                <option value="all">All Types</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Work from Home">Remote</option>
                                <option value="Physical">Onsite</option>
                                <option value="Physical">Part time</option>
                                <option value="Physical">Internship</option>
                            </select>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <label style={{ fontSize: "12px", fontWeight: "600", color: "#e0e0e0" }}>💰 Salary</label>
                            <select
                                value={salarySort}
                                onChange={(e) => setSalarySort(e.target.value)}
                                style={{
                                    padding: "10px 12px",
                                    border: "2px solid #3b82f6",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    background: "#174961",
                                    color: "#fff",
                                    cursor: "pointer",
                                    width: "100%",
                                    boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)"
                                }}
                            >
                                <option value="none">Default</option>
                                <option value="high-to-low">High to Low</option>
                                <option value="low-to-high">Low to High</option>
                            </select>
                        </div>

                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setLocationFilter("all");
                                setTypeFilter("all");
                                setSalarySort("none");
                            }}
                            style={{
                                padding: "10px 20px",
                                border: "2px solid #3b82f6",
                                borderRadius: "8px",
                                fontSize: "14px",
                                background: "#174961",
                                color: "white",
                                cursor: "pointer",
                                fontWeight: "600",
                                alignSelf: "flex-end",
                                // boxShadow: "0 4px 12px rgba(220, 38, 38, 0.4)",
                                transition: "all 0.3s ease",
                                whiteSpace: "wrap"
                            }}
                            // onMouseEnter={(e) => {
                            //     e.target.style.background = "#b91c1c";
                            //     e.target.style.transform = "scale(1.05)";
                            // }}
                            // onMouseLeave={(e) => {
                            //     e.target.style.background = "#dc2626";
                            //     e.target.style.transform = "scale(1)";
                            // }}
                        >
                            🔄 Reset
                        </button>
                    </div>
                </div>

                {filteredJobs.length > 0 ? (
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                        gap: "20px"
                    }}>
                        {filteredJobs.map(job => (
                            <div
                                key={job.id}
                                style={{
                                    // background: "linear-gradient(145deg, #1a1a2e 0%, #0f3460 100%)",
                                    background: "white",
                                    borderRadius: "15px",
                                    overflow: "auto",
                                    boxShadow: "0 8px 24px rgba(220, 38, 38, 0.2)",
                                    border: "1px solid rgba(220, 38, 38, 0.3)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(220, 38, 38, 0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(220, 38, 38, 0.2)";
                                }}
                            >
                                <div style={{
                                    // background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
                                    background: "#174961",
                                    padding: "20px",
                                    borderBottom: "2px solid rgba(59, 130, 246, 0.5)"
                                }}>
                                    <h2 style={{
                                        color: "#fff",
                                        fontSize: "clamp(18px, 3vw, 20px)",
                                        fontWeight: "bold",
                                        marginBottom: "8px",
                                        wordBreak: "break-word"
                                    }}>{job.company}</h2>
                                    <div style={{ color: "#e0e0e0", fontSize: "clamp(12px, 2vw, 14px)" }}>Job title:</div>
                                    <h5 style={{
                                        color: "#fff",
                                        fontSize: "clamp(14px, 2.5vw, 16px)",
                                        marginTop: "4px",
                                        fontWeight: "600",
                                        wordBreak: "break-word"
                                    }}>{job.title}</h5>
                                </div>

                                <div style={{ padding: "0", flex: 1 }}>
                                    <div style={{
                                        padding: "12px 20px",
                                        borderBottom: "1px solid rgba(59, 130, 246, 0.2)",
                                        color: "#e0e0e0",
                                        fontSize: "clamp(12px, 2vw, 14px)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        wordBreak: "break-word"
                                    }}>
                                        <span style={{ color: "#3b82f6", flexShrink: 0 }}>📍</span>
                                        <span className="text-black">{job.location}</span>
                                    </div>
                                    <div style={{
                                        padding: "12px 20px",
                                        borderBottom: "1px solid rgba(59, 130, 246, 0.2)",
                                        color: "#e0e0e0",
                                        fontSize: "clamp(12px, 2vw, 14px)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}>
                                        <span style={{ color: "#3b82f6", flexShrink: 0 }}>💼</span>
                                        <span className="text-black">{job.jobType}</span>
                                    </div>
                                    <div style={{
                                        padding: "12px 20px",
                                        color: "#4ade80",
                                        fontSize: "clamp(14px, 2.5vw, 16px)",
                                        fontWeight: "bold",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}>
                                        <span style={{ color: "#3b82f6", flexShrink: 0 }}>💰</span>
                                        <span>{job.salary}</span>
                                    </div>
                                </div>

                                <div style={{
                                    padding: "20px",
                                    display: "flex",
                                    gap: "10px",
                                    flexWrap: "wrap"
                                }}>
                                    <button
                                        onClick={() => router.push(`/jobseeker/jobdetail/${job.slug}`)}
                                        style={{
                                            flex: "1 1 120px",
                                            backgroundColor: "#174961",
                                            color: "white",
                                            padding: "10px 15px",
                                            border: "none",
                                            borderRadius: "8px",
                                            fontSize: "clamp(12px, 2vw, 14px)",
                                            fontWeight: "600",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            boxShadow: "0 4px 12px rgba(220, 38, 38, 0.3)"
                                        }}
                                       
                                        >
                                        See Details
                                    </button>
                                    <button style={{
                                        flex: "1 1 120px",
                                        backgroundColor: "transparent",
                                        color: "#3b82f6",
                                        padding: "10px 15px",
                                        border: "2px solid #3b82f6",
                                        borderRadius: "8px",
                                        fontSize: "clamp(12px, 2vw, 14px)",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease"
                                    }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "#174961";
                                            e.target.style.border = "none";
                                            e.target.style.color = "white";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "transparent";
                                            e.target.style.color = "#3b82f6";
                                            e.target.style.border = "2px solid #3b82f6";
                                        }}>
                                        Not Interested
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{
                        textAlign: "center",
                        padding: "40px 20px",
                        color: "#a0a0a0",
                        fontSize: "clamp(16px, 3vw, 18px)"
                    }}>
                        <p>No jobs found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default JobsPage