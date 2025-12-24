// 'use client'
// import { useCallback, useState } from "react";
// import "@/components/components.css"
// import Link from "next/link";
// import { applicants as applicantsData } from "@/app/data/applicants";

// export default function Applicants() {

//     const [applicants, setApplicants] = useState(applicantsData)
//     const [searchTerm, setSearchTerm] = useState("");
//     const [filterStatus, setFilterStatus] = useState("all");

//     const search = searchTerm.toLowerCase();
//     const formatStatus = (text) => 
//         text.charAt(0).toUpperCase() + text.slice(1)

//     const status = {
//         PENDING: "pending",
//         SHORTLISTED: "shortlisted",
//         REJECTED: "rejected"
//     }

//     const getStatusClass = (status) => {
//         switch (status) {
//             case "pending":
//                 return "bg-yellow-100 text-yellow-700";
//             case "shortlisted":
//                 return "bg-blue-100 text-[#1A4767]";
//             case "rejected":
//                 return "bg-red-100 text-[#973030]";
//             default:
//                 return "";
//         }
//     }

//     const filteredApplicants = applicants.filter(applicant => {
//         const matchesSearch = applicant.name.toLowerCase().includes(search) ||
//             applicant.email.toLowerCase().includes(search) ||
//             applicant.position.toLowerCase().includes(search);

//         const matchesFilter = filterStatus === "all" || applicant.status === filterStatus;

//         return matchesSearch && matchesFilter;
//     });

//     const handleApprove = useCallback((id) => {
//         setApplicants(previous =>
//             previous.map(applicant =>
//                 applicant.id === id ? { ...applicant, status: status.SHORTLISTED } : applicant
//             )
//         );
//     }, []);

//     const handleReject = useCallback((id) => {
//         setApplicants(previous =>
//             previous.map(applicant =>
//                 applicant.id === id ? { ...applicant, status: status.REJECTED } : applicant
//             )
//         );
//     }, []);

//     const handleView = (id) => {
//         alert(`Viewing resume for applicant ${id}`);
//     };

//     return (
//         <div>
//             <div className="container">
//                 <div className="main-content">
//                     <div className="m-8">
//                         <h2 className="mb-5 text-3xl font-bold">Applicants Management</h2>
//                         <p className="welcome-text">Review and manage all job applicants</p>
//                     </div>

//                     <div className="filter-section bg-white p-5 rounded-xl shadow-md flex flex-wrap gap-4 items-center mb-6">
//                         <input
//                             type="text"
//                             placeholder="🔍 Search by name, email, or position..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="flex-1 min-w-[280px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A4767]"
//                         />

//                         <select
//                             value={filterStatus}
//                             onChange={(e) => setFilterStatus(e.target.value)}
//                             className="flex-1 min-w-[280px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A4767]"
//                         >
//                             <option value="all">All Status</option>
//                             <option value={status.PENDING}>Pending</option>
//                             <option value={status.SHORTLISTED}>Shortlisted</option>
//                             <option value={status.REJECTED}>Rejected</option>
//                         </select>

//                         <div className="filter-info" style={{ color: "#333", fontWeight: "600", whiteSpace: "nowrap" }}>
//                             📊 Showing {filteredApplicants.length} of {applicants.length} applicants
//                         </div>
//                     </div>

//                     {filteredApplicants.length > 0 ? (
//                         <div className="applicants-grid">
//                             {/* <Link href={`/employer/applicants/${applicant.slug}`}> */}
//                             <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
//                                 <thead className="bg-[#1A4767] text-white">
//                                     <tr className="">
//                                         <th className="px-4 py-3 text-sm font-semibold border border-white">Id</th>
//                                         <th className="px-4 py-3 text-sm font-semibold border border-white">Name</th>
//                                         <th className="px-4 py-3 text-sm font-semibold border border-white">Email</th>
//                                         <th className="px-4 py-3 text-sm font-semibold border border-white">Phone No</th>
//                                         <th className="px-4 py-3 text-sm font-semibold border border-white">Skills</th>
//                                         <th className="px-4 py-3 text-sm font-semibold border border-white">Position</th>
//                                         <th className="px-4 py-3 text-sm font-semibold border border-white">Application Date</th>
//                                         <th className="px-4 py-3 text-sm font-semibold border border-white">Status</th>
//                                         <th className="px-4 py-3 text-sm font-semibold border border-white">Resume</th>
//                                         <th className="px-4 py-3 text-sm font-semibold border border-white">Update Status</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="rounded">
//                                     {filteredApplicants.map(applicant => (
//                                         <tr key={applicant.id} className="border-b hover:bg-gray-50 transition">
//                                             <td className="px-4 py-3 text-sm text-gray-700 border border-gray-300"> {applicant.id}</td>
//                                             <td className="px-4 py-3 text-sm text-gray-700 border border-gray-300"> {applicant.name}</td>
//                                             <td className="px-4 py-3 text-sm text-gray-700 border border-gray-300"> {applicant.email}</td>
//                                             <td className="px-4 py-3 text-sm text-gray-700 border border-gray-300"> {applicant.phone}</td>
//                                             <td className="px-4 py-3 text-sm text-gray-700 border border-gray-300">
//                                                 {
//                                                     applicant.skills.map((skill, index) => (
//                                                         <div key={index}>
//                                                             {skill}
//                                                         </div>
//                                                     ))
//                                                 }
//                                             </td>
//                                             <td className="px-4 py-3 text-sm text-gray-700 border border-gray-300"> {applicant.position}</td>
//                                             <td className="px-4 py-3 text-sm text-gray-700 border border-gray-300"> {applicant.appliedDate}</td>
//                                             <td className="px-4 py-3 text-sm text-gray-700 border border-gray-300">
//                                                 <span
//                                                     className={`px-3 py-1 rounded-full text-xs font-semibold 
//                                                     ${getStatusClass(applicant.status)}
//                                                     `}
//                                                 >
//                                                     {formatStatus(applicant.status)}
//                                                 </span>
//                                             </td>
//                                             <td className="px-4 py-3 text-sm text-gray-700 border border-gray-300">
//                                                 <button className="text-[#1A4767] hover:underline font-medium" onClick={() => handleView(applicant.id)}>View Resume</button>
//                                             </td>
//                                             <td className="px-4 py-3 text-sm text-gray-700 border border-gray-300 space-y-2">
//                                                 <button
//                                                     onClick={() => handleApprove(applicant.id)}
//                                                     className="bg-[#1A4767] hover:bg-[#153754] text-white px-4 py-1.5 rounded-md text-sm transition"
//                                                 >
//                                                     Shortlist
//                                                 </button>

//                                                 <button
//                                                     onClick={() => handleReject(applicant.id)}
//                                                     className="bg-[#973030] hover:bg-[#7f2828] px-4 py-1.5 text-white rounded-md text-sm transition"
//                                                 >
//                                                     Reject
//                                                 </button>
//                                             </td>

//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                             {/* </Link> */}
//                         </div>
//                     ) : (
//                         <div className="no-results">
//                             <p>No applicants found matching your search.</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }


'use client'
import { useCallback, useState } from "react";

export default function Applicants() {
    const initialApplicants = [
        {
            id: 1,
            slug: "ali-khan",
            name: "Ali Khan",
            email: "ali.khan@gmail.com",
            phone: "+92 300 1234567",
            profileImage: "/images/users/ali.jpg",
            resume: "/resumes/ali-khan-resume.pdf",
            position: "Frontend Developer",
            experience: "2 Years",
            skills: ["React", "Tailwind", "JavaScript"],
            appliedDate: "2025-12-10",
            status: "pending",
        },
        {
            id: 2,
            slug: "ayesha-malik",
            name: "Ayesha Malik",
            email: "ayesha.malik@gmail.com",
            phone: "+92 321 9876543",
            profileImage: "/images/users/ayesha.jpg",
            resume: "/resumes/ayesha-malik-resume.pdf",
            position: "Backend Developer",
            experience: "3 Years",
            skills: ["Django", "REST API", "PostgreSQL"],
            appliedDate: "2025-12-11",
            status: "shortlisted",
        },
        {
            id: 3,
            slug: "usman-raza",
            name: "Usman Raza",
            email: "usman.raza@gmail.com",
            phone: "+92 312 5558899",
            profileImage: "/images/users/usman.jpg",
            resume: "/resumes/usman-raza-resume.pdf",
            position: "MERN Stack Developer",
            experience: "1 Year",
            skills: ["MongoDB", "Express", "React", "Node"],
            appliedDate: "2025-12-12",
            status: "rejected",
        },
        {
            id: 4,
            slug: "hassan-ali",
            name: "Hassan Ali",
            email: "hassan.ali@gmail.com",
            phone: "+92 334 7788990",
            profileImage: "/images/users/hassan.jpg",
            resume: "/resumes/hassan-ali-resume.pdf",
            position: "UI/UX Designer",
            experience: "4 Years",
            skills: ["Figma", "Adobe XD", "Wireframing"],
            appliedDate: "2025-12-12",
            status: "pending",
        },
        {
            id: 5,
            slug: "sara-ahmed",
            name: "Sara Ahmed",
            email: "sara.ahmed@gmail.com",
            phone: "+92 345 6677889",
            profileImage: "/images/users/sara.jpg",
            resume: "/resumes/sara-ahmed-resume.pdf",
            position: "Frontend Developer",
            experience: "1.5 Years",
            skills: ["HTML", "CSS", "JavaScript", "React"],
            appliedDate: "2025-12-13",
            status: "shortlisted",
        },
        {
            id: 6,
            slug: "bilal-hussain",
            name: "Bilal Hussain",
            email: "bilal.h@gmail.com",
            phone: "+92 301 4455667",
            profileImage: "/images/users/bilal.jpg",
            resume: "/resumes/bilal-hussain-resume.pdf",
            position: "Python Developer",
            experience: "2.5 Years",
            skills: ["Python", "Django", "REST API"],
            appliedDate: "2025-12-13",
            status: "pending",
        },
        {
            id: 7,
            slug: "zain-abbas",
            name: "Zain Abbas",
            email: "zain.abbas@gmail.com",
            phone: "+92 333 9988776",
            profileImage: "/images/users/zain.jpg",
            resume: "/resumes/zain-abbas-resume.pdf",
            position: "DevOps Engineer",
            experience: "3 Years",
            skills: ["Docker", "AWS", "CI/CD"],
            appliedDate: "2025-12-14",
            status: "rejected",
        },
        {
            id: 8,
            slug: "fatima-noor",
            name: "Fatima Noor",
            email: "fatima.noor@gmail.com",
            phone: "+92 322 1122334",
            profileImage: "/images/users/fatima.jpg",
            resume: "/resumes/fatima-noor-resume.pdf",
            position: "QA Engineer",
            experience: "2 Years",
            skills: ["Manual Testing", "Automation", "Selenium"],
            appliedDate: "2025-12-14",
            status: "pending",
        },
        {
            id: 9,
            slug: "hamza-sheikh",
            name: "Hamza Sheikh",
            email: "hamza.sheikh@gmail.com",
            phone: "+92 315 5566778",
            profileImage: "/images/users/hamza.jpg",
            resume: "/resumes/hamza-sheikh-resume.pdf",
            position: "Mobile App Developer",
            experience: "3 Years",
            skills: ["React Native", "Firebase", "API Integration"],
            appliedDate: "2025-12-15",
            status: "shortlisted",
        },
        {
            id: 10,
            slug: "noor-ul-ain",
            name: "Noor Ul Ain",
            email: "noor.ain@gmail.com",
            phone: "+92 318 8899001",
            profileImage: "/images/users/noor.jpg",
            resume: "/resumes/noor-ul-ain-resume.pdf",
            position: "Junior Web Developer",
            experience: "Fresh Graduate",
            skills: ["HTML", "CSS", "JavaScript"],
            appliedDate: "2025-12-15",
            status: "pending",
        },
    ];

    const [applicants, setApplicants] = useState(initialApplicants);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

    const search = searchTerm.toLowerCase();

    const formatStatus = (text) => text.charAt(0).toUpperCase() + text.slice(1);

    const getStatusClass = (status) => {
        switch (status) {
            case "pending":
                return "bg-yellow-100 text-yellow-700";
            case "shortlisted":
                return "bg-blue-100 text-[#1A4767]";
            case "rejected":
                return "bg-red-100 text-[#973030]";
            default:
                return "";
        }
    };

    const filteredApplicants = applicants.filter((applicant) => {
        const matchesSearch =
            applicant.name.toLowerCase().includes(search) ||
            applicant.email.toLowerCase().includes(search) ||
            applicant.position.toLowerCase().includes(search);

        const matchesFilter =
            filterStatus === "all" || applicant.status === filterStatus;

        return matchesSearch && matchesFilter;
    });

    const handleApprove = useCallback((id) => {
        setApplicants((prev) =>
            prev.map((applicant) =>
                applicant.id === id ? { ...applicant, status: "shortlisted" } : applicant
            )
        );
    }, []);

    const handleReject = useCallback((id) => {
        setApplicants((prev) =>
            prev.map((applicant) =>
                applicant.id === id ? { ...applicant, status: "rejected" } : applicant
            )
        );
    }, []);

    const handleView = (id) => {
        const applicant = applicants.find((a) => a.id === id);
        if (applicant) {
            window.open(applicant.resume, "_blank");
        }
    };

    return (
        <div className="min-h-screen p-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">

                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-1">Applicants Management</h2>
                    <p className="text-gray-600">Review and manage all job applicants</p>
                </div>

                {/* Filters */}
                <div className="bg-white p-5 rounded-xl shadow-md flex flex-wrap gap-4 items-center mb-6">
                    <input
                        type="text"
                        placeholder="🔍 Search by name, email, or position..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 min-w-[250px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A4767]"
                    />

                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="flex-1 min-w-[250px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A4767]"
                    >
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="shortlisted">Shortlisted</option>
                        <option value="rejected">Rejected</option>
                    </select>

                    <div className="text-gray-800 font-semibold whitespace-nowrap">
                        📊 Showing {filteredApplicants.length} of {applicants.length} applicants
                    </div>
                </div>

                {/* Table (desktop) */}
                {filteredApplicants.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white rounded-full shadow-lg hidden md:table">
                            <thead className="bg-[#1A4767] text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">ID</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">Name</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">Email</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">Phone</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">Skills</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">Position</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">Applied Date</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">Status</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">Resume</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {filteredApplicants.map((applicant) => (
                                    <tr key={applicant.id} className="border-b hover:bg-gray-50 transition">
                                        <td className="px-4 py-3 text-gray-700 border border-gray-300">{applicant.id}</td>
                                        <td className="px-4 py-3 text-gray-700 border border-gray-300">{applicant.name}</td>
                                        <td className="px-4 py-3 text-gray-700 border border-gray-300">{applicant.email}</td>
                                        <td className="px-4 py-3 text-gray-700 border border-gray-300">{applicant.phone}</td>
                                        <td className="px-4 py-3 text-gray-700 border border-gray-300">{applicant.skills.join(", ")}</td>
                                        <td className="px-4 py-3 text-gray-700 border border-gray-300">{applicant.position}</td>
                                        <td className="px-4 py-3 text-gray-700 border border-gray-300">{applicant.appliedDate}</td>
                                        <td className="px-4 py-3 border border-gray-300">
                                            <span className={`px-3 py-1 rounded-full text-center text-xs font-semibold ${getStatusClass(applicant.status)}`}>
                                                {formatStatus(applicant.status)}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-gray-700 border border-gray-300">
                                            <button className="text-[#1A4767] hover:underline" onClick={() => handleView(applicant.id)}>View</button>
                                        </td>
                                        <td className="px-4 py-3 text-gray-700 border border-gray-300 flex flex-col gap-1">
                                            <button
                                                onClick={() => handleApprove(applicant.id)}
                                                className="bg-[#1A4767] hover:bg-[#153754] text-white px-3 py-1 rounded-md text-sm transition"
                                            >
                                                Shortlist
                                            </button>
                                            <button
                                                onClick={() => handleReject(applicant.id)}
                                                className="bg-[#973030] hover:bg-[#7f2828] text-white px-3 py-1 rounded-md text-sm transition"
                                            >
                                                Reject
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Mobile cards */}
                        <div className="md:hidden mt-6 space-y-4">
                            {filteredApplicants.map((applicant) => (
                                <div key={applicant.id} className="bg-white p-4 rounded-xl shadow-sm">
                                    <div className="flex justify-between mb-2">
                                        <div>
                                            <p className="font-semibold text-gray-900">{applicant.name}</p>
                                            <p className="text-sm text-gray-500">{applicant.position}</p>
                                        </div>
                                        <span className={`px-2 text-center rounded-lg ${getStatusClass(applicant.status)}`}>
                                            {formatStatus(applicant.status)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">{applicant.email}</p>
                                    <p className="text-sm text-gray-600 mb-1">{applicant.phone}</p>
                                    <p className="text-sm text-gray-600 mb-1">Skills: {applicant.skills.join(", ")}</p>
                                    <p className="text-sm text-gray-600 mb-2">Applied: {applicant.appliedDate}</p>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleApprove(applicant.id)}
                                            className="flex-1 bg-[#1A4767] hover:bg-[#153754] text-white px-3 py-2 rounded-md text-sm transition"
                                        >
                                            Shortlist
                                        </button>
                                        <button
                                            onClick={() => handleReject(applicant.id)}
                                            className="flex-1 bg-[#973030] hover:bg-[#7f2828] text-white px-3 py-2 rounded-md text-sm transition"
                                        >
                                            Reject
                                        </button>
                                    </div>
                                    <button onClick={() => handleView(applicant.id)} className="mt-2 text-[#1A4767] underline text-sm">View Resume</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12 text-gray-600">No applicants found matching your search.</div>
                )}
            </div>
        </div>
    );
}
