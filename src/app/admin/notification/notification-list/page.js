'use client'
import { useState, useEffect } from "react";

export default function NotificationList() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("notifications")) || [];
        setNotifications(stored);
    }, []);

    const markAsRead = (id) => {
        const updated = notifications.map((n) =>
            n.id === id ? { ...n, read: true } : n
        );
        setNotifications(updated);
        localStorage.setItem("notifications", JSON.stringify(updated));
    };

    const getAlertColor = (type) => {
        switch (type) {
            case "info":
                return "border-blue-500";
            case "success":
                return "border-green-500";
            case "warning":
                return "border-yellow-500";
            case "danger":
                return "border-red-500";
            default:
                return "border-gray-500";
        }
    };

    const getPriorityBg = (priority) => {
        switch (priority) {
            case "high":
                return "bg-red-50";
            case "normal":
                return "bg-yellow-50";
            case "low":
                return "bg-green-50";
            default:
                return "";
        }
    };

    if (notifications.length === 0) {
        return <div className="text-center text-gray-500">🎉 No notifications</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6 space-y-4">
            {notifications.map((n) => (
                <div
                    key={n.id}
                    className={`p-4 rounded-xl shadow bg-white border-l-4 ${getAlertColor(
                        n.alertType
                    )} ${!n.read ? getPriorityBg(n.priority) : ""}`}
                >
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold">{n.title}</h3>
                        <span className="text-sm text-gray-500">{n.time}</span>
                    </div>
                    <p className="text-gray-600">{n.message}</p>
                    <div className="flex justify-between items-center mt-2">
                        {!n.read && (
                            <button
                                onClick={() => markAsRead(n.id)}
                                className="text-sm text-blue-600"
                            >
                                Mark as read
                            </button>
                        )}
                        <div className="flex gap-2">
                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-200 text-gray-800">
                                {n.category.toUpperCase()}
                            </span>
                            <span
                                className={`text-xs font-semibold px-2 py-1 rounded-full ${n.priority === "high"
                                        ? "bg-red-200 text-red-800"
                                        : n.priority === "normal"
                                            ? "bg-yellow-200 text-yellow-800"
                                            : "bg-green-200 text-green-800"
                                    }`}
                            >
                                {n.priority.toUpperCase()}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}