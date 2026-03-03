import amazio from "../assets/amazio.png";
import fbs from "../assets/fbs.png";
import dashboard from "../assets/BlinkitDashboard.jpg";
import UI from "../assets/UI.png";

const Projects = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-16">

      <h1 className="text-3xl sm:text-4xl font-black tracking-wider mb-12">Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

        <div className="rounded-xl shadow-xl bg-violet-50 transition duration-300 flex flex-col justify-between ">
          <img
            src={amazio}
            alt="Amazio – Full Stack E-Commerce Application"
            className="rounded-t-xl shadow-md border border-gray-200 object-cover"
          />
          <div className="p-6">
            <h2 className=" text-xl sm:text-2xl font-semibold mb-4">
              Amazio – Full Stack E-Commerce Application
            </h2>
            <ul className="text-gray-900 tracking-wide pb-4 leading-relaxed list-disc list-inside">
              <li className="p-2">
                Built a full-stack e-commerce platform using React and Spring Boot with JWT-based authentication and role-based authorization.
              </li>
              <li className="px-2">
                Implemented secure REST APIs, order lifecycle management, admin product controls, and PostgreSQL integration following clean layered architecture.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 font-semibold text-gray-800 mb-4">
              {["React.js", "React Router", "Context API", "Tailwind CSS", "Axios",
                "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "PostgreSQL",
                "Maven", "Git", "Vercel", "Render"].map(tech => (
                  <span key={tech} className="bg-violet-200 px-3 py-1 rounded-full text-sm">{tech}</span>
                ))}
            </div>

            <div className="flex gap-4 py-4">
              <a
                href="https://amazio-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-md bg-black text-white hover:bg-slate-900 transition duration-300 shadow-md"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/sunil-reddy-2003/Amazio-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-md bg-black text-white hover:bg-slate-900 transition duration-300 shadow-md"
              >
                Frontend Code
              </a>
              <a
                href="https://github.com/sunil-reddy-2003/Amazio-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-md bg-black text-white hover:bg-slate-900 transition duration-300 shadow-md"
              >
                Backend Code
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-xl shadow-xl bg-violet-50 transition duration-300 flex flex-col justify-between ">
          <img
            src={fbs}
            alt="Flight Booking System"
            className="rounded-t-xl shadow-md border border-gray-200 object-cover"
          />
          <div className="p-6">
            <h2 className=" text-xl sm:text-2xl font-semibold mb-4">
              Flight Booking System
            </h2>
            <ul className="text-gray-900 pb-4 leading-relaxed list-disc list-inside">
              <li>Designed and developed a scalable microservices-based flight booking backend system using Spring Boot.</li>
              <li>Implemented JWT authentication, role-based access control, inter-service communication, and email notification workflows.</li>
            </ul>
            <div className="flex flex-wrap gap-2 font-semibold text-gray-800 mb-4">
              {[
                "Spring Boot",
                "Microservices",
                "Spring Security",
                "JWT",
                "Thymeleaf",
                "JavaMailSender",
                "PostgreSQL",
              ].map((tech) => (
                <span key={tech} className="bg-violet-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2 py-4">
              <a
                href="https://github.com/sunil-reddy-2003/flight-booking-system"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-md bg-black text-white hover:bg-slate-900 transition duration-300 shadow-md"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-xl shadow-xl bg-violet-50 transition duration-300 flex flex-col justify-between ">
          <img
            src={dashboard}
            className="h-63 w-112 rounded-t-xl md:h-90 md:w-full shadow-md border border-gray-200 "
            alt="Blinkit Sales Dashboard"
          />
          <div className="p-6">
            <h2 className=" text-xl sm:text-2xl font-semibold mb-4">
              Blinkit Sales Performance & Outlet Analytics Dashboard
            </h2>
            <ul className="text-gray-900 pb-4 leading-relaxed list-disc list-inside">
              <li>
                Developed an interactive Power BI dashboard to analyze Blinkit's sales performance, customer satisfaction, and outlet distribution patterns.
              </li>
              <li>
                The project focuses on identifying key business insights using KPI modeling, segmentation analysis, and data-driven visualization techniques.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 font-semibold text-gray-800 mb-4">
              {["Python", "Power BI", "Pandas"].map((tech) => (
                <span key={tech} className="bg-violet-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2 py-4">
              <a
                href="https://drive.google.com/file/d/1le7MDe5KcoVCtBLk3Wp9HgcDqPpwtQlL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-md bg-black text-white hover:bg-slate-900 transition duration-300 shadow-md"
              >
                Dashboard
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-xl shadow-xl bg-violet-50 transition duration-300 flex flex-col justify-between ">
          <img src={UI} alt="MultiModal Information Retrieval System" className="rounded-t-xl shadow-md border border-gray-200" />
          <div className="p-6">
            <h2 className=" text-xl sm:text-2xl font-semibold mb-4">
              MultiModal Information Retrieval System
            </h2>
            <ul className="text-gray-900 pb-4 leading-relaxed list-disc list-inside">
              <li>Built a content-based retrieval system that finds similar images, audio clips, and videos using deep feature embeddings and vector similarity search.</li>
              <li>The system automatically detects the uploaded file type and retrieves the most semantically similar results from a pre-indexed dataset.</li>
            </ul>
            <div className="flex flex-wrap gap-2 font-semibold text-gray-800 mb-4">
              {["Python", "PyTorch", "OpenCLIP", "CLAP", "FAISS", "OpenCV", "Torchaudio", "Gradio"].map(tech => (
                <span key={tech} className="bg-violet-200 px-3 py-1 rounded-full text-sm">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4 py-4">
              <a
                href="https://drive.google.com/drive/folders/13y_NMncSIl2qCSkC4d0ya8fQsrB2o5hp?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-md bg-black text-white hover:bg-slate-900 transition duration-300 shadow-md"
              >
                Code
              </a>
              <a
                href="https://drive.google.com/drive/folders/1h87soj4ZCjnwb0rt9iRXhkMmKXczm3mv?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-md bg-black text-white hover:bg-slate-900 transition duration-300 shadow-md"
              >
                Results
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;