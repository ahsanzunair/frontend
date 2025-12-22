<<<<<<< HEAD
'use client'
import { notifications } from "@/app/data/notifications";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Notifications = () => {
  const router = useRouter();



  // const [notifications, setNotifications] = useState(notifications)
  const handleDelete = (id) => {
    notifications.filter((n) => n.id !== id);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>

      {notifications.length === 0 && (
        <p className="text-gray-500 text-2xl font-bold">No Notifications Available</p>
      )}

      <div className="space-y-4">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row gap-5 sm:gap-0  justify-between items-center sm:items-start"
          >
            <div>
              <h3 className="font-medium text-lg">{n.title}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {n.body.split(" ").slice(0, 25).join(" ")}...
              </p>
            </div>

            <div className="flex gap-2 ">
              <button
                onClick={() => router.push(`/jobseeker/notification/${n.slug}`)}
                className="px-3 py-1 text-lg bg-[#1A4767] text-white rounded-lg hover:bg-[#2A5575] cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                View
              </button>

              <button
                onClick={() => handleDelete(n.id)}
                className="px-3 py-1 text-lg bg-[#973030] text-white rounded-lg hover:bg-red-600 cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
=======
import Link from 'next/link'

const notifications = [
  {
    id: 1,
    title: "Job Application Update",
    message: "Your application for Frontend Developer has been moved to Interview stage.",
    type: "info",       // info, success, warning, error
    date: "2025-12-05",
    time: "10:30 AM",
    read: false
  },
  {
    id: 2,
    title: "New Message",
    message: "You have received a new message from SoftCube Solutions.",
    type: "info",
    date: "2025-12-06",
    time: "02:15 PM",
    read: false
  },
  {
    id: 3,
    title: "Job Selected",
    message: "Congratulations! You have been selected for Full Stack Engineer at InnovateX Labs.",
    type: "success",
    date: "2025-12-01",
    time: "11:00 AM",
    read: true
  },
  {
    id: 4,
    title: "Interview Scheduled",
    message: "Your interview for React Developer is scheduled on 2025-12-20 at 12:30 PM.",
    type: "info",
    date: "2025-12-04",
    time: "09:00 AM",
    read: false
  },
  {
    id: 5,
    title: "Application Rejected",
    message: "Unfortunately, your application for Mobile App Developer has been rejected.",
    type: "error",
    date: "2025-12-03",
    time: "03:45 PM",
    read: true
  },
  {
    id: 6,
    title: "Pending Action",
    message: "Please complete your profile to apply for more jobs.",
    type: "warning",
    date: "2025-12-02",
    time: "08:00 AM",
    read: false
  }
];


const page = () => {
    return (
        <div className='w-full flex items-center justify-center p-5'>
            <div className='w-4/5 flex flex-col gap-5 bg-white shadow-lg rounded-md p-3'>
                <Link href={`/jobseeker/notification/${notifications.slug}`}>
                    <p>This is Message</p>
                </Link>
            </div>
        </div>
    )
}

export default page
>>>>>>> f749a46fd1b7c36ef3d95f28f205de872598b59e
