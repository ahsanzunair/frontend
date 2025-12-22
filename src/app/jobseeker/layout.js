import JobsNav from "@/components/jobseeker/JobsNav";

export default function RootLayout({ children }) {
    return (

        <>
            <div>
                <JobsNav />
            </div>
            {children}
        </>
    );
}
