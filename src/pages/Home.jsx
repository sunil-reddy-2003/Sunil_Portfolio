import { useNavigate } from "react-router-dom";
import profile from "../assets/sunil.png";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col lg:flex-row mx-4 md:mx-20 items-center justify-center">
      
      <div className="w-full lg:w-7/12 flex flex-col items-start justify-center px-4 md:px-6">
        <h1 className="font-bold text-2xl md:text-3xl hover:translate-y-1 duration-500">
          Hi, I'm Sunil Reddy
        </h1>
        <h2 className="font-extrabold tracking-wider text-4xl md:text-6xl py-2 hover:translate-y-1 duration-500">
          Full Stack <span className="text-indigo-800">Developer</span>
        </h2>
        <div className="text-base md:text-xl font-semibold py-2 hover:translate-y-1 duration-500">
          I build secure, scalable backend systems with Spring Boot and microservices,
          and create responsive frontend applications that deliver real-world impact.
        </div>
        <div className="text-base md:text-xl font-bold py-2 hover:translate-y-1 duration-500">
          Spring Boot • Microservices • React • SQL • JWT
        </div>
        <div className="flex flex-col sm:flex-row gap-4 text-md font-semibold py-4">
          <a
            className="px-8 py-2 border rounded-md bg-indigo-800 text-white hover:bg-green-600"
            href="https://www.linkedin.com/in/sunilreddy2003"
            target="_blank"
          >
            View Linkedin
          </a>
          <a
            className="px-8 py-2 border rounded-md bg-black text-white hover:bg-slate-900"
            href="https://github.com/sunil-reddy-2003"
            target="_blank"
          >
            View Github
          </a>
        </div>
      </div>

      <div
        className="w-full lg:w-5/12 flex items-center justify-center mt-8 lg:mt-0 ">
        <img
          src={profile}
          alt="Sunil Reddy M"
          className="h-60 w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 object-cover outline-2 outline-purple-900 outline-offset-2 rounded-4xl hover:scale-110 duration-500 shadow-xl"
        />
      </div>
    </div>
  );
};

export default Home;