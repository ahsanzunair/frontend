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
