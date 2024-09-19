import React from "react";
import Tourista from "../assets/portfolio/arrayDestruct.jpg";
import MovieApi from "../assets/portfolio/reactParallax.jpg";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: Tourista,
      code: "https://github.com/ChandraPavan-Prathapaneni/Tourista",
      demo: "https://your-demo-link-here.com", // Add demo links if available
    },
    {
      id: 2,
      src: MovieApi,
      code: "https://github.com",
      demo: "https://your-demo-link-here.com", // Add demo links if available
    },
  ];

  const handleDemoClick = (url) => {
    window.open(url, "_blank");
  };

  const handleCodeClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, code, demo }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="w-full h-48 object-cover object-center"
              />
              <div className="flex items-center justify-center p-4">
                <button
                  onClick={() => handleDemoClick(demo)}
                  className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeClick(code)}
                  className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
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
