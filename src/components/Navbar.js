'use client'
import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/images/logo.png'
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { loadUserFromStorage, logout } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";


const Navbar = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const { user, role, isAuthenticated } = useSelector((state) => state.auth);



    useEffect(() => {
        dispatch(loadUserFromStorage());
    }, [dispatch])

    // const handleRoleChange = ((e) => {
    //     const newRole = e.target.value;
    //     setRole(newRole);
    //     localStorage.setItem("role", newRole);
    // })


    const menusForGuest = [
        { title: "Home", link: "/" },
        { title: "Jobs", link: "/jobs" },
        { title: "About", link: "/guest/about" },
        { title: "Contact Us", link: "/guest/contact-us" },
    ]
    const menusForJobSeeker = [
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

    const handleLogout = () => {
        dispatch(logout());
        window.location.href = "/auth/login";
    }

    let menus = [];
    let currentRole = role;

    if (!isAuthenticated || !role) {

        menus = menusForGuest;
        currentRole = "guest";
    } else if (role == "jobseeker") {
        menus = menusForJobSeeker
    } else if (role === "employer") {
        menus = menusForEmployer
    } else if (role === "admin") {
        menus = menusForAdmin
    }

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
                <div className="md:flex hidden items-center justify-center gap-2">
                    <div className="flex gap-3 justify-center items-center py-5">
                        {isAuthenticated ? (
                            <div className="flex flex-col items-end">
                                <span className="text-sm font-semibold text-gray-700">
                                    {user?.first_name} {user?.last_name}
                                </span>
                                <span className="text-xs px-2 py-1 rounded-full bg-[#1A4767] text-white">
                                    {role?.toUpperCase()}
                                </span>
                            </div>
                        ) : (
                            <div className="flex gap-3">
                                <button
                                    onClick={() => router.push("/auth/login")}
                                    className="text-gray-900 hover:bg-[#1A4767] hover:text-white hover:p-2 hover:rounded-lg hover:font-bold transition-all transform duration-300 font-medium"
                                >
                                    Login</button>
                                <button
                                    onClick={() => router.push("/auth/register")}
                                    className="text-gray-900 hover:bg-[#1A4767] hover:text-white hover:p-2 hover:rounded-lg hover:font-bold transition-all transform duration-300 font-medium"
                                >
                                    Register</button>
                            </div>
                        )}
                    </div>

                    {isAuthenticated && (

                        <button
                            onClick={handleLogout}
                            className="text-gray-900 hover:bg-red-600 hover:text-white hover:p-2 hover:rounded-lg hover:font-bold transition-all transform duration-300 font-medium px-4"
                        >
                            Logout
                        </button>

                    )}
                </div>

                <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='cursor-pointer text-2xl md:hidden'>
                    <FaBars />
                </div>
                {mobileMenuOpen && (
                    <div
                        onClick={() => setMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/20 backdrop-blur-xs z-40 md:hidden"
                    />
                )}


                <div
                    className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-xl z-50
        transform transition-transform duration-300
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
                >
                    <div className="flex items-center justify-between p-4 border-b">
                        <h2 className="text-lg font-bold text-[#1A4767]">Menu</h2>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-2xl font-bold cursor-pointer"
                        >
                            ✕
                        </button>
                    </div>

                    <ul className="flex flex-col gap-4 p-5">
                        {menus.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.link}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-gray-900 hover:bg-[#1A4767] hover:text-white px-4 py-2 rounded-lg transition font-medium"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <div className="flex flex-col items-center justify-center gap-2">
                            <div className="flex gap-3 justify-center items-center py-5">
                                {isAuthenticated ? (
                                    <div className="flex flex-col items-end">
                                        <span className="text-sm font-semibold text-gray-700">
                                            {user?.first_name} {user?.last_name}
                                        </span>
                                        <span className="text-xs px-2 py-1 rounded-full bg-[#1A4767] text-white">
                                            {role?.toUpperCase()}
                                        </span>
                                    </div>
                                ) : 
                                (
                                    <div className="flex flex-col gap-3">
                                        <button
                                            onClick={() => router.push("/auth/login")}
                                            className="text-gray-900 hover:bg-[#1A4767] hover:text-white hover:p-2 hover:rounded-lg hover:font-bold transition-all transform duration-300 font-medium"
                                        >
                                            Login</button>
                                        <button
                                            onClick={() => router.push("/auth/register")}
                                            className="text-gray-900 hover:bg-[#1A4767] hover:text-white hover:p-2 hover:rounded-lg hover:font-bold transition-all transform duration-300 font-medium"
                                        >
                                            Register</button>
                                    </div>
                                )}
                            </div>

                            {isAuthenticated && (

                                <button
                                    onClick={handleLogout}
                                    className="text-gray-900 hover:bg-red-600 hover:text-white hover:p-2 hover:rounded-lg hover:font-bold transition-all transform duration-300 font-medium px-4"
                                >
                                    Logout
                                </button>

                            )}
                        </div>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar