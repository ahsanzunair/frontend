import JobsNav from "@/components/jobseeker/JobsNav";

export default function RootLayout({ children }) {
    return (

        <>

            <JobsNav />
            {children}
        </>
    );
}
