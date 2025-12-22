import Link from "next/link";
import Image from "next/image";
import logo  from '@/assets/images/logo.png'
import { FaBars, FaHome } from "react-icons/fa";
<<<<<<< HEAD
import { users } from "@/app/data/users";



const Navbar = () => {
    users.role = "admin"

=======


const Navbar = () => {
    const role = "jobseeker"
>>>>>>> f749a46fd1b7c36ef3d95f28f205de872598b59e

    const menusForGuest = [
        { title: <FaHome size={30} />, link: "#" },
        { title: "About", link: "/about" },
        { title: "Login", link: "/login" },
        { title: "Register", link: "/register" }
    ]
    const menusForJobSeeker = [
        { title: "Home", link: "/" },
<<<<<<< HEAD
        { title: "My Jobs", link: "/jobseeker/myjobs/saved" },
=======
        { title: "My Jobs", link: "/jobseeker/saved" },
>>>>>>> f749a46fd1b7c36ef3d95f28f205de872598b59e
        { title: "Messages", link: "/jobseeker/messages" },
        { title: "Notification", link: "/jobseeker/notification" },
        { title: "Account", link: "/jobseeker/account" }
    ]
    const menusForEmployer = [
<<<<<<< HEAD
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
=======
        { title: "Dashboard", link: "#" },
        { title: "Post Job", link: "#" },
        { title: "Messages", link: "#" },
        { title: "Account", link: "#" }
    ]
    const menusForAdmin = [
        { title: "Dashboard", link: "#" },
        { title: "Jobs", link: "#" },
        { title: "Users", link: "#" },
        { title: "Notification", link: "#" },
        { title: "Account", link: "#" }
    ]

    let menus = []

    if (role === "guest") menus = menusForGuest
    if (role === "jobseeker") menus = menusForJobSeeker
    if (role === "employer") menus = menusForEmployer
    if (role === "admin") menus = menusForAdmin
>>>>>>> f749a46fd1b7c36ef3d95f28f205de872598b59e

    return (
        <nav className='w-full bg-white shadow-md'>
            <div className='max-w-6xl h-20 mx-8 md:mx-auto flex items-center justify-between py-4'>
<<<<<<< HEAD

                {/* logo */}

                <Link href={'/'} className='md:flex none gap-5 items-center justify-center'>
                    <Image className='rounded-full' src={logo} alt='logo not found' />
                </Link>

                {/* Nav Menus */}
=======
                {/* logo */}
                <Link href={'/'} className='md:flex none gap-5 items-center justify-center'>
                    <Image className='rounded-full' src={logo} alt='logo not found' />
                </Link>
>>>>>>> f749a46fd1b7c36ef3d95f28f205de872598b59e
                <div id='navMenus' className="hidden md:flex gap-6">
                    {menus.map((item, index) => (
                        <ul key={index}>
                            <li>
<<<<<<< HEAD
                                <Link href={item.link} className="text-grey-900 hover:bg-[#114A69] hover:text-white hover:p-2 hover:rounded-lg hover:font-bold transition-all transform duration-300 font-medium">
=======
                                <Link href={item.link} className="text-grey-900 hover:text-red-400 hover:scale-3d">
>>>>>>> f749a46fd1b7c36ef3d95f28f205de872598b59e
                                    {item.title}
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>
<<<<<<< HEAD

                <div className="flex flex-col justify-center items-center py-5">
                    {/* <Image className="bg-gray-500 rounded-[50%] overflow-hidden" src={'#'} alt="Profile Image" width={50} height={50} /> */}
                    <h3 className="text-md font-semibold text-white p-2 rounded-lg bg-[#1A4767] transition transform duration-300">{users.role}</h3>
                </div>
=======
>>>>>>> f749a46fd1b7c36ef3d95f28f205de872598b59e
                <div className='cursor-pointer text-2xl block md:hidden'>
                    <FaBars />
                </div>
            </div>
        </nav>
    )
}

export default Navbar