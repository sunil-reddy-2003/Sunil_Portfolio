const EducationCard = ({ title, year, subtitle, score }) => {
    return (
        <div className="w-full lg:w-[720px] p-4 my-4 rounded-md shadow-md hover:scale-105 duration-300 text-gray-800 bg-white/40">
            <div className="flex flex-col lg:flex-row lg:justify-between px-2">
                <div className="font-bold text-lg lg:text-xl tracking-widest">
                    {title}
                </div>
                <div className="font-bold mt-2 lg:mt-0">
                    {year}
                </div>
            </div>

            <div className="px-4 text-sm italic font-semibold">
                {subtitle}
            </div>

            <div className="px-4 py-2 text-xs tracking-widest">
                {score}
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div className="flex flex-col items-center min-h-screen px-4 md:px-10 lg:px-0 py-12">

            <div className="w-full lg:w-[800px] my-10 bg-white/40 backdrop-blur-md shadow-md p-6 sm:p-8 rounded-2xl">

                <h1 className="text-3xl lg:text-4xl font-extrabold tracking-wider text-slate-900">
                    About Me
                </h1>

                <p className="mt-6 text-base lg:text-lg font-medium text-slate-700 tracking-wider">
                    Computer Science student and full stack developer building scalable backend systems and modern web applications solving real-world problems.
                </p>

            </div>

            <div className="w-full lg:w-[800px] my-6">

                <h1 className="text-3xl lg:text-4xl font-black text-slate-900 px-4 py-2 tracking-wider">
                    Education
                </h1>

                <EducationCard
                    title="Vellore Institute of Technology, Vellore"
                    year="2021 – 2026"
                    subtitle="Integrated M.Tech in Computer Science and Engineering"
                    score="GPA : 8.32/10"
                />

                <EducationCard
                    title="Narayana Junior College, Hyderabad"
                    year="2019 – 2021"
                    subtitle="Higher Secondary Education"
                    score="MARKS : 978/1000"
                />

                <EducationCard
                    title="St. Anne’s High School, Nalgonda"
                    year="2018 – 2019"
                    subtitle="Matriculation"
                    score="GPA : 9.8/10"
                />

            </div>
        </div>
    );
};

export default About;