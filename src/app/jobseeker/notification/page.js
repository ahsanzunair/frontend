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