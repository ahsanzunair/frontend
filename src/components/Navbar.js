import Link from "next/link";
import Image from "next/image";
import logo  from '@/assets/images/logo.png'
import { FaBars, FaHome } from "react-icons/fa";
import { users } from "@/app/data/users";



const Navbar = () => {
    users.role = "admin"


    const menusForGuest = [
        { title: <FaHome size={30} />, link: "#" },
        { title: "About", link: "/about" },
        { title: "Login", link: "/login" },
        { title: "Register", link: "/register" }
    ]
    const menusForJobSeeker = [
        { title: "Home", link: "/" },
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
        { title: "Account", link: "/admin/account" }
    ]


    let menus = []

    if (users.role === "guest") menus = menusForGuest
    if (users.role === "jobseeker") menus = menusForJobSeeker
    if (users.role === "employer") menus = menusForEmployer
    if (users.role === "admin") menus = menusForAdmin

    return (
        <nav className='w-full bg-white shadow-md'>
            <div className='max-w-6xl h-20 mx-8 md:mx-auto flex items-center justify-between py-4'>

                {/* logo */}

                <Link href={'/'} className='md:flex none gap-5 items-center justify-center'>
                    <Image className='rounded-full' src={logo} alt='logo not found' />
                </Link>

                {/* Nav Menus */}
                <div id='navMenus' className="hidden md:flex gap-6">
                    {menus.map((item, index) => (
                        <ul key={index}>
                            <li>
                                <Link href={item.link} className="text-grey-900 hover:bg-[#114A69] hover:text-white hover:p-2 hover:rounded-lg hover:font-bold transition-all transform duration-300 font-medium">
                                    {item.title}
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center py-5">
                    {/* <Image className="bg-gray-500 rounded-[50%] overflow-hidden" src={'#'} alt="Profile Image" width={50} height={50} /> */}
                    <h3 className="text-md font-semibold text-white p-2 rounded-lg bg-[#1A4767] transition transform duration-300">{users.role}</h3>
                </div>
                <div className='cursor-pointer text-2xl block md:hidden'>
                    <FaBars />
                </div>
            </div>
        </nav>
    )
}

export default Navbar