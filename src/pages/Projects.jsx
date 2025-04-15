import React from "react";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      name: "Tourista",
      code: "https://github.com/ChandraPavan-Prathapaneni/Tourista",
      link: "https://chandrapavan-prathapaneni.github.io/Tourista/#tours",
    },
    {
      id: 2,
      name: "React Movie App",
      code: "https://github.com/ChandraPavan-Prathapaneni/React-Movies-App/tree/main",
      link: "",
    },
    {
      id: 3,
      name: "Mama’s Kitchen",
      code: "https://github.com/ChandraPavan-Prathapaneni/",
      link: "",
    },
  ];

  const handleClick = (url) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div
      name="projects"
      className="min-h-screen w-full bg-gradient-to-b from-[#FFDAB9] via-peach-200 to-peach-300 flex items-center justify-center px-4 py-10"
    >
      <div className="max-w-screen-lg w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 border-b-4 inline border-orange-300 pb-2">
            Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {portfolios.map(({ id, name, code, link }) => (
            <div
              key={id}
              className="shadow-lg shadow-orange-200 bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-transform duration-200 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-orange-500 mb-4 drop-shadow">
                {name}
              </h3>
              <div className="flex flex-col gap-3 w-full">
                {link && (
                  <button
                    onClick={() => handleClick(link)}
                    className="px-4 py-2 bg-gradient-to-r from-rose-400 to-orange-300 text-white rounded-md shadow hover:shadow-lg"
                  >
                    Live Demo
                  </button>
                )}
                <button
                  onClick={() => handleClick(code)}
                  className="px-4 py-2 bg-gradient-to-r from-rose-400 to-orange-300 text-white rounded-md shadow hover:shadow-lg"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
