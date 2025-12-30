'use client'
import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/images/logo.png'
import { FaBars, FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";


const Navbar = () => {
    const [role, setRole] = useState("admin")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    useEffect(() => {
        const savedRole = localStorage.getItem("role")
        if (savedRole) {
            setRole(savedRole)
        }
    }, [])

    const handleRoleChange = ((e) => {
        const newRole = e.target.value;
        setRole(newRole);
        localStorage.setItem("role", newRole);
    })
    const menusForGuest = [
        { title: "Home", link: "/" },
        { title: "Jobs", link: "/jobs" },
        { title: "About", link: "/guest/about" },
        { title: "Create Account", link: "/auth" },
    ]
    const menusForJobSeeker = [
        { title: "Home", link: "/" },
        { title: "Jobs", link: "/jobs" },
        { title: "My Jobs", link: "/jobseeker/myjobs/saved" },
        { title: "Messages", link: "/jobseeker/messages" },
        { title: "Notification", link: "/jobseeker/notification" },
        { title: "Account", link: "/jobseeker/account" }
    ]
    const menusForEmployer = [
        { title: "Dashboard", link: "/employer/employer-dashboard" },
        { title: "Post Job", link: "/employer/jobpost" },
        { title: "Jobs", link: "/employer/jobs" },
        { title: "Applicants", link: "/employer/applicants" },
        { title: "Messages", link: "/employer/messages" },
        { title: "Account", link: "/employer/account" }
    ]
    const menusForAdmin = [
        { title: "Dashboard", link: "/admin/dashboard" },
        { title: "Jobs", link: "/admin/jobs" },
        { title: "Users", link: "/admin/users" },
        { title: "Notification", link: "/admin/notification" },
        { title: "All Notifications", link: "/admin/notification/notification-list" },
        { title: "Account", link: "/admin/account" }
    ]

    let menus = []

    if (role === "guest") menus = menusForGuest
    if (role === "jobseeker") menus = menusForJobSeeker
    if (role === "employer") menus = menusForEmployer
    if (role === "admin") menus = menusForAdmin

    return (
        <nav className='sticky top-0 w-full bg-white shadow-md z-20'>
            <div className='max-w-6xl h-20 mx-8 md:mx-auto flex items-center justify-between py-4'>
                {/* logo */}
                <Link href={'/'} className='md:flex none gap-5 items-center justify-center'>
                    <Image className='rounded-full' src={logo} alt='logo not found' />
                </Link>
                <div id='navMenus' className="hidden md:flex gap-6">
                    <ul className="flex gap-6 items-center">
                        {menus.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link} className="text-gray-900 hover:bg-[#114A69] hover:text-white hover:p-2 hover:rounded-lg hover:font-bold transition-all transform duration-300 font-medium">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-3 justify-center items-center py-5">
                    <div className="flex flext-col items-center">
                        <select
                            value={role}
                            onChange={handleRoleChange}
                            className="p-2 rounded-lg bg-[#1A4767] text-white font-semibold"
                        >
                            <option value="guest">Guest</option>
                            <option value="jobseeker">Job Seeker</option>
                            <option value="employer">Epmloyer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <h3 className="hidden md:block text-md font-semibold text-white p-2 rounded-lg bg-[#1A4767] transition transform duration-300">{role}</h3>
                </div>
                <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='cursor-pointer text-2xl block md:hidden'>
                    <FaBars />
                </div>
                { mobileMenuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden">
                        <ul className="flex flex-col gap-4 p-5">
                            { menus.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link}
                                    onClick={() => (setMobileMenuOpen(false))}
                                    className="block text-gray-900 bg-white hover:bg-[#1A4767] hover:text-white px-4 py-2 rounded-lg transition font-medium"
                                    >
                                    {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar