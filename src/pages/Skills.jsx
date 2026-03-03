const Skills = () => {
    return (
        <div className="flex flex-col min-h-screen lg:h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-12">

            <h1 className=" text-3xl sm:text-4xl font-black text-gray-800 tracking-wider mb-10">
                Technical Skills
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="p-6 rounded-xl shadow-md bg-white-20 hover:scale-105 hover:bg-white/30 transition duration-300">
                    <h2 className="text-lg font-bold text-gray-800 mb-3">
                        Programming Languages
                    </h2>
                    <div className="font-semibold text-slate-600 space-y-1">
                        <p>Java</p>
                        <p>JavaScript</p>
                        <p>Python</p>
                        <p>C Programming</p>
                        <p>SQL</p>
                    </div>
                </div>

                <div className="p-6 rounded-xl shadow-md bg-white-20 hover:scale-105 hover:bg-white/30 transition duration-300">
                    <h2 className="text-lg font-bold text-gray-800 mb-3">
                        Frontend Development
                    </h2>
                    <div className="font-semibold text-slate-600 space-y-1">
                        <p>React</p>
                        <p>Tailwind CSS</p>
                        <p>HTML</p>
                        <p>CSS</p>
                    </div>
                </div>

                <div className="p-6 rounded-xl shadow-md bg-white-20 hover:scale-105 hover:bg-white/30 transition duration-300">
                    <h2 className="text-lg font-bold text-gray-800 mb-3">
                        Backend Development
                    </h2>
                    <div className="font-semibold text-slate-600 space-y-1">
                        <p>Spring Boot</p>
                        <p>Spring Security</p>
                        <p>Spring MVC</p>
                        <p>Microservices</p>
                        <p>JWT</p>
                    </div>
                </div>

                <div className="p-6 rounded-xl shadow-md bg-white-20 hover:scale-105 hover:bg-white/30 transition duration-300">
                    <h2 className="text-lg font-bold text-gray-800 mb-3">
                        CS Fundamentals
                    </h2>
                    <div className="font-semibold text-slate-600 space-y-1">
                        <p>Data Structures & Algorithms</p>
                        <p>OOP</p>
                        <p>DBMS</p>
                        <p>Operating Systems</p>
                    </div>
                </div>

                <div className="p-6 rounded-xl shadow-md bg-white-20 hover:scale-105 hover:bg-white/30 transition duration-300">
                    <h2 className="text-lg font-bold text-gray-800 mb-3">
                        Databases 
                    </h2>
                    <div className="font-semibold text-slate-600 space-y-1">
                        <p>MySQL</p>
                        <p>PostgreSQL</p>
                    </div>
                </div>
                <div className="p-6 rounded-xl shadow-md bg-white-20 hover:scale-105 hover:bg-white/30 transition duration-300">
                    <h2 className="text-lg font-bold text-gray-800 mb-3">
                        Tools
                    </h2>
                    <div className="font-semibold text-slate-600 space-y-1">
                        <p>Git / Github</p>
                        <p>Postman</p>
                        <p>Vercel</p>
                        <p>Render</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;