import {
    BriefcaseIcon,
    PhoneIcon,
    UserGroupIcon,
    ClipboardDocumentListIcon,
    ChartBarIcon,
    ChatBubbleLeftRightIcon,
    AcademicCapIcon,
    PaintBrushIcon,
} from "@heroicons/react/24/outline";

const categories = [
    {
        title: "Marketing",
        jobs: "123 Vacancies",
        icon: BriefcaseIcon,
    },
    {
        title: "Customer Service",
        jobs: "123 Vacancies",
        icon: PhoneIcon,
    },
    {
        title: "Human Resource",
        jobs: "123 Vacancies",
        icon: UserGroupIcon,
    },
    {
        title: "Project Management",
        jobs: "123 Vacancies",
        icon: ClipboardDocumentListIcon,
    },
    {
        title: "Business Development",
        jobs: "123 Vacancies",
        icon: ChartBarIcon,
    },
    {
        title: "Sales & Communication",
        jobs: "123 Vacancies",
        icon: ChatBubbleLeftRightIcon,
    },
    {
        title: "Teaching & Education",
        jobs: "123 Vacancies",
        icon: AcademicCapIcon,
    },
    {
        title: "Design & Creative",
        jobs: "123 Vacancies",
        icon: PaintBrushIcon,
    },
];

const ExploreJobs = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">


                <h2 className="text-3xl font-bold text-center mb-10">
                    Explore By Category
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white border hover:border-[#1A4767]  flex-col p-6 py-5 rounded-2xl shadow-sm hover:shadow-2xl hover:scale-105 transform transition-all duration-300 cursor-pointer flex items-start gap-4"
                            >

                                <div className="bg-blue-100 font-bold text-[#1A4767] p-3 rounded-lg">
                                    <Icon className="h-7 w-7  font-bold text-lg" />
                                </div>


                                <div>
                                    <h3 className="font-semibold text-lg">
                                        {cat.title}
                                    </h3>
                                    <p className="text-sm text-[#1A4767]">
                                        {cat.jobs}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default ExploreJobs;
