'use client'
import { applicants } from "@/app/data/applicants";
import { jobs } from "@/app/data/jobs";
import { users } from "@/app/data/users";
import StatCard from "@/components/admin/StateCard";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts";



const COLORS = ["#4f46e5", "#6366f1", "#818cf8", "#a5b4fc", "#c7d2fe"];

const Dashboard = () => {
    const totalEmployers = users.filter(user => user.role === "employer").length
    const activeJobs = users.filter(user => user.status === "Active").length
    const DASHBOARD_STATS = [
    { title: "Total Users", value: users.length },
    { title: "Total Employers", value: totalEmployers },
    { title: "Total Jobs", value: jobs.length },
    { title: "Active Jobs", value: activeJobs },
    { title: "Applications", value: applicants.length },
];

const JOB_GROWTH = [
    { month: "Jan", jobs: 10 },
    { month: "Feb", jobs: 15 },
    { month: "Mar", jobs: 12 },
    { month: "Apr", jobs: 20 },
    { month: "May", jobs: 18 },
    { month: "Jun", jobs: 25 },
];

const APPLICATIONS_CATEGORY = [
    { category: "Engineering", value: 300 },
    { category: "Design", value: 150 },
    { category: "Marketing", value: 200 },
    { category: "Sales", value: 120 },
    { category: "HR", value: 100 },
];
    return (
        <div className="space-y-12 bg-white text-black p-6">



            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {DASHBOARD_STATS.map((stat) => (
                    <StatCard key={stat.title} {...stat} bgColor="bg-gray-100" textColor="text-black" />
                ))}
            </section>


            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="card p-6 bg-gray-100 border border-gray-300 rounded-lg">
                    <h3 className="card-title mb-4 text-black">Dashboard Stats Overview</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart
                            data={DASHBOARD_STATS}
                            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                        >
                            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                            <XAxis dataKey="title" stroke="#000" />
                            <YAxis stroke="#000" />
                            <Tooltip contentStyle={{ backgroundColor: "#f9f9f9", color: "#000" }} />
                            <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>


                <div className="card p-6 bg-gray-100 border border-gray-300 rounded-lg">
                    <h3 className="card-title mb-4 text-black">Job Growth (Monthly)</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart
                            data={JOB_GROWTH}
                            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                        >
                            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                            <XAxis dataKey="month" stroke="#000" />
                            <YAxis stroke="#000" />
                            <Tooltip contentStyle={{ backgroundColor: "#f9f9f9", color: "#000" }} />
                            <Line type="monotone" dataKey="jobs" stroke="#6366f1" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>


                <div className="card lg:col-span-2 p-6 bg-gray-100 border border-gray-300 rounded-lg">
                    <h3 className="card-title mb-4 text-black">Applications per Category</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={APPLICATIONS_CATEGORY}
                                dataKey="value"
                                nameKey="category"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label={{ fill: "#000" }}
                            >
                                {APPLICATIONS_CATEGORY.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: "#f9f9f9", color: "#000" }} />
                            <Legend verticalAlign="bottom" height={36} wrapperStyle={{ color: "#000" }} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
