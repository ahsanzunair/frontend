import Link from "next/link";
import Image from "next/image";
import logo  from '@/assets/images/logo.png'
import { FaBars, FaHome } from "react-icons/fa";


const Navbar = () => {
    const role = "jobseeker"

    const menusForGuest = [
        { title: <FaHome size={30} />, link: "#" },
        { title: "About", link: "/about" },
        { title: "Login", link: "/login" },
        { title: "Register", link: "/register" }
    ]
    const menusForJobSeeker = [
        { title: "Home", link: "/" },
        { title: "My Jobs", link: "/jobseeker/saved" },
        { title: "Messages", link: "/jobseeker/messages" },
        { title: "Notification", link: "/jobseeker/notification" },
        { title: "Account", link: "/jobseeker/account" }
    ]
    const menusForEmployer = [
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

    return (
        <nav className='w-full bg-white shadow-md'>
            <div className='max-w-6xl h-20 mx-8 md:mx-auto flex items-center justify-between py-4'>
                {/* logo */}
                <Link href={'/'} className='md:flex none gap-5 items-center justify-center'>
                    <Image className='rounded-full' src={logo} alt='logo not found' />
                </Link>
                <div id='navMenus' className="hidden md:flex gap-6">
                    {menus.map((item, index) => (
                        <ul key={index}>
                            <li>
                                <Link href={item.link} className="text-grey-900 hover:text-red-400 hover:scale-3d">
                                    {item.title}
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>
                <div className='cursor-pointer text-2xl block md:hidden'>
                    <FaBars />
                </div>
            </div>
        </nav>
    )
}

export default Navbar