'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminCreateNotification() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [category, setCategory] = useState("job");
    const [alertType, setAlertType] = useState("info");
    const [priority, setPriority] = useState("normal");

    const router = useRouter();

    const handleSubmit = () => {
        if (!title || !message) return;

        const newNotification = {
            id: Date.now(),
            title,
            message,
            category,
            alertType,
            priority,
            time: "Just now",
            read: false,
        };

        const existing = JSON.parse(localStorage.getItem("notifications")) || [];
        localStorage.setItem(
            "notifications",
            JSON.stringify([newNotification, ...existing])
        );


        setTitle("");
        setMessage("");
        setCategory("job");
        setAlertType("info");
        setPriority("normal");


        router.push("/admin/notification/notification-list");
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="bg-white p-5 rounded-xl shadow mb-6">
                <h2 className="font-semibold mb-4">Create Notification</h2>

                <input
                    className="border p-2 w-full mb-3 rounded"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="border p-2 w-full mb-3 rounded"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <div className="flex gap-3 mb-4">
                    <select
                        className="border p-2 w-1/3 rounded"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="job">Job</option>
                        <option value="announcement">Announcement</option>
                    </select>
                    <select
                        className="border p-2 w-1/3 rounded"
                        value={alertType}
                        onChange={(e) => setAlertType(e.target.value)}
                    >
                        <option value="info">Info</option>
                        <option value="success">Success</option>
                        <option value="warning">Warning</option>
                        <option value="danger">Danger</option>
                    </select>
                    <select
                        className="border p-2 w-1/3 rounded"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="high">High</option>
                        <option value="normal">Normal</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <button
                    onClick={handleSubmit}
                    className="bg-[#1A4767] text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Publish
                </button>
            </div>
        </div>
    );
}
