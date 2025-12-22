<<<<<<< HEAD
import { notifications } from "@/app/data/notifications";
import Link from "next/link";
// import { useLocation } from "react-router-dom";

const NotificationDetail = async({params}) => {

  const {slug} = await params
  const n = notifications.find(n => n.slug === slug)

    return (
        <div className="max-w-3xl mx-auto p-4">
            <Link
                href={`/jobseeker/notification`}
                className="mb-8 bg-blue-500 text-2xl text-white px-2 py-1 rounded-lg cursor-pointer shadow-lg hover:shadow-2xs hover:scale-105 transform transition-all duration-300 "
            >
                ← Back
            </Link>

            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">
                    {n.title}
                </h2>
                <span className={`font-bold px-4 py-1 rounded ${n.type === "warning" ? "bg-orange-100 text-orange-600" : n.type === "success" ? "bg-green-100 text-green-600": n.type === "info" ? "bg-blue-100 text-blue-600":n.type === "danger" ? "bg-red-100 text-red-600":""}`}>{n.type}</span>
                <p className="text-gray-700 leading-relaxed">
                    {n.body}
                </p>
            </div>
        </div>
    );
};

export default NotificationDetail;
=======
import React from 'react'

const page = () => {
  return (
    <div>Notification Detail Page</div>
  )
}

export default page
>>>>>>> f749a46fd1b7c36ef3d95f28f205de872598b59e
