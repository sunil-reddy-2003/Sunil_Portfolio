const Contact = () => {
  return (
    <div className="min-h-screen lg:h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-20 flex flex-col">

      <h1 className="text-3xl sm:text-4xl font-black tracking-wider mb-12">
        Get In Touch
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <a
          href="mailto:sunilreddymandadi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            border border-black/40 
            flex flex-col 
            items-center 
            justify-center 
            p-6 
            rounded-xl 
            transition duration-300
            bg-white/40 hover:scale-104
          "
        >
          <i className="fa-regular fa-envelope text-4xl mb-4 text-gray-900 "></i>
          <h1 className="text-sm sm:text-lg font-bold text-center break-all">
            sunilreddymandadi@gmail.com
          </h1>
        </a>

        <a
          href="https://www.linkedin.com/in/sunilreddy2003"
          target="_blank"
          rel="noopener noreferrer"
          className="
            border border-black/40 
            flex flex-col 
            items-center 
            justify-center 
            p-6 
            rounded-xl 
            transition duration-300
            bg-white/40 hover:scale-104
          "
        >
          <i className="fa-brands fa-linkedin-in text-4xl mb-4 text-gray-900"></i>
          <h1 className="text-sm sm:text-md font-bold text-center">
            Let’s connect professionally
          </h1>
        </a>

        <a
          href="https://github.com/sunil-reddy-2003"
          target="_blank"
          rel="noopener noreferrer"
          className="
            border border-black/40 
            flex flex-col 
            items-center 
            justify-center 
            p-6 
            rounded-xl 
            transition duration-300
            bg-white/40 hover:scale-104
          "
        >
          <i className="fa-brands fa-github text-4xl mb-4 text-gray-900"></i>
          <h1 className="text-sm sm:text-md font-bold text-center">
            Explore my projects & code
          </h1>
        </a>

        <div
          className="
            border border-black/40 
            flex flex-col 
            items-center 
            justify-center 
            p-6 
            rounded-xl 
            transition duration-300
            bg-white/40 hover:scale-104
          "
        >
          <i class="fa-solid fa-map-pin text-4xl mb-4 text-gray-900"></i>
          <h1 className="text-sm sm:text-md font-bold text-center">
            Telangana, India
          </h1>
        </div>

      </div>

      <div className="mt-12 text-sm sm:text-md font-semibold text-center">
        Let’s connect and build something impactful.
      </div>

    </div>
  );
};

export default Contact;