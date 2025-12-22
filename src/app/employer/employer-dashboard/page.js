import OverviewCard from "@/components/employer/OverviewCard";
import Link from "next/link.js";
// import '../components/components.css';

export default function EmployerDasboard() {
    const dashboardStats = [
        { icon: "📝", title: "Total Job Posts", count: 10 },
        { icon: "✅", title: "Active Jobs", count: 5 },
        { icon: "👥", title: "Total Applicants", count: 100 }
    ];

    const recentJobs = [
        { id: 1, title: "Frontend Developer", company: "ABC Pvt Ltd", status: "Active" },
        { id: 2, title: "Backend Developer", company: "XYZ Ltd", status: "Active" },
        { id: 3, title: "UI/UX Designer", company: "TechCorp", status: "Pending" }
    ];

    const recentApplicants = [
        { id: 1, name: "Muhammad Bilal", position: "Frontend Developer", status: "pending" },
        { id: 2, name: "Kainat Bilal", position: "Backend Developer", status: "approved" },
        { id: 3, name: "Ali Hassan", position: "UI/UX Designer", status: "rejected" }
    ];

    return (
        <div>
            <div className="container">
                <div className="main-content">
                    <div className="dashboard-header">
                        <h2 className="text-4xl md:text-3xl">Dashboard</h2>
                        <p className="welcome-text">Welcome back! Here's your hiring overview.</p>
                    </div>

                    <div className="stats-container">
                        {dashboardStats.map((stat, index) => (
                            <OverviewCard
                                key={index}
                                icon={stat.icon}
                                title={stat.title}
                                count={stat.count}
                                bgClass={index === 1 ? "bg-success" : index === 2 ? "bg-warning" : ""}
                            />
                        ))}
                    </div>

                    <div className="dashboard-sections">
                        <div className="dashboard-section">
                            <div className="section-header">
                                <h3>📋 Recent Job Posts</h3>
                                <Link href="#" className="view-all-link">View All →</Link>
                            </div>
                            <div className="jobs-list">
                                {recentJobs.map(job => (
                                    <div key={job.id} className="list-item">
                                        <div className="item-content">
                                            <h4>{job.title}</h4>
                                            <p className="item-meta">{job.company}</p>
                                        </div>
                                        <span className={`status-badge ${job.status.toLowerCase()}`}>
                                            {job.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="dashboard-section">
                            <div className="section-header">
                                <h3>👥 Recent Applicants</h3>
                                <Link href="#" className="view-all-link">View All →</Link>
                            </div>
                            <div className="applicants-list">
                                {recentApplicants.map(applicant => (
                                    <div key={applicant.id} className="list-item">
                                        <div className="item-content">
                                            <h4>{applicant.name}</h4>
                                            <p className="item-meta">{applicant.position}</p>
                                        </div>
                                        <span className={`status-badge ${applicant.status}`}>
                                            {applicant.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}