import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    return (
        <nav
            className="
    sticky top-4 z-50 flex flex-wrap items-center justify-between
    bg-purple-400 backdrop-blur-md shadow-xl text-slate-900
    px-6 md:px-12 py-4 mx-4 md:mx-10 lg:mx-40
    rounded-md md:rounded-full lg:rounded-full
    max-w-full md:max-w-4xl lg:max-w-6xl
    mx-auto sm:shadow-sm md:shadow-md lg:shadow-lg"
        >
            <div
                className="flex flex-col cursor-pointer"
                onClick={() => navigate("/")}
            >
                <h1 className="font-bold text-lg md:text-xl">Sunil Reddy Mandadi</h1>
                <h2 className="font-semibold text-sm md:text-md">Full Stack Developer</h2>
            </div>

            <button
                className="md:hidden flex items-center text-2xl"
                onClick={() => setShow((prev) => !prev)}
                aria-label="Toggle menu"
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            <div
                className={`
          w-full md:w-auto
          ${show ? "flex" : "hidden"} 
          flex-col md:flex-row md:flex md:items-center md:gap-8
          mt-4 md:mt-0
        `}
            >
                <Link
                    to="/"
                    className="font-bold text-md hover:underline underline-offset-3 decoration-white decoration-3 py-2 md:py-0"
                    onClick={() => setShow(false)}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className="font-bold text-md hover:underline underline-offset-3 decoration-white decoration-3 py-2 md:py-0"
                    onClick={() => setShow(false)}
                >
                    About
                </Link>
                <Link
                    to="/skills"
                    className="font-bold text-md hover:underline underline-offset-3 decoration-white decoration-3 py-2 md:py-0"
                    onClick={() => setShow(false)}
                >
                    Skills
                </Link>
                <Link
                    to="/projects"
                    className="font-bold text-md hover:underline underline-offset-3 decoration-white decoration-3 py-2 md:py-0"
                    onClick={() => setShow(false)}
                >
                    Projects
                </Link>
                <Link
                    to="/contact"
                    className="font-bold text-md hover:underline underline-offset-3 decoration-white decoration-3 py-2 md:py-0"
                    onClick={() => setShow(false)}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;