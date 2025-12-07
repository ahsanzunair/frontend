import Link from 'next/link'
import React from 'react'

const page = () => {
    const messages = [
        {
            id: 1,
            sender: "Ahsan",
            text: "Hey, what's up?",
            time: "10:30 AM",
        },
        {
            id: 2,
            sender: "Ali",
            text: "All good! Tum batao?",
            time: "10:31 AM",
        },
        {
            id: 3,
            sender: "Ahsan",
            text: "Bas coding chal rahi hai.",
            time: "10:32 AM",
        },
        {
            id: 4,
            sender: "Ali",
            text: "Nice! Keep it up 🔥",
            time: "10:33 AM",
        },
    ];

    return (
        <div className='w-full flex items-center justify-center p-5'>
            <div className='w-4/5 flex flex-col gap-5 bg-white shadow-lg rounded-md p-3'>
                <Link href={`/jobseeker/messages/${messages.slug}`}>
                {messages.map((sms) => (
                    <h1>{sms.sender}</h1>
                ))}
                </Link>
            </div>
        </div>
    )
}

export default page