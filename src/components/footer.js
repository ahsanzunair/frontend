import {

    FaPhoneAlt,

} from "react-icons/fa";
import { FaLocationDot, FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import logo  from '@/assets/images/logo.png'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-100 w-full px-5  sm:px-10 md:px-16 lg:px-36 text-gray-800">
            <div className="flex flex-col md:flex-row gap-10 md:gap-15 py-12 border-b border-gray-900">

                {/* Brand Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                    <Link href="/" className="cursor-pointer">
                        <img src={logo} alt="JobsWalay Logo" className="w-32" />
                    </Link>

                    <p className="mt-3 text-sm sm:text-base text-gray-800">
                        JobsWalay is a trusted Pakistani job portal connecting job seekers
                        with verified employment opportunities across multiple industries.
                    </p>



                    <div className="flex items-center gap-5 cursor-pointer text-2xl pt-4">
                        <a
                            href="https://whatsapp.com/channel/0029Vb6F3aL9sBIG322EuE3P"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Join our WhatsApp Channel"
                        >
                            <div className="flex gap-2 items-center">
                                <p className="text-sm font-bold">Follow on Whatsapp</p>
                                <FaSquareWhatsapp className="text-green-400 hover:text-green-500  transition" />
                            </div>

                        </a>
                    </div>

                </div>

                {/* Company Links */}
                <div className="flex flex-col pt-10 items-center md:items-start text-center md:text-left w-full">
                    <h2 className="font-semibold text-black mb-5">Company</h2>
                    <ul className="flex flex-col gap-3 text-xl sm:text-base text-gray-900">
                        <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
                        <li><Link href="/aboutus" className="hover:text-blue-400 transition">About Us</Link></li>
                        <li><Link href="/jobs" className="hover:text-blue-400 transition">Find Jobs</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
                        
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col pt-10 items-center md:items-start text-center md:text-left w-full">
                    <h2 className="font-semibold text-black mb-5">Get In hrefuch</h2>

                    <div className="flex flex-col gap-4 text-gray-900">
                        <p className="flex items-center gap-3">
                            <FaLocationDot className="text-green-500" />
                            Lahore, Pakistan
                        </p>
                        <p className="flex items-center gap-3">
                            <IoMdMail className="text-green-500" />
                            support@jobswalay.pk
                        </p>
                        <p className="flex items-center gap-3">
                            <FaPhoneAlt className="text-green-500" />
                            +92 300 1234567
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Bothrefm */}
            <p className="py-5 text-center text-xs sm:text-sm text-gray-950">
                Copyright©2025JobsWalay.All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
