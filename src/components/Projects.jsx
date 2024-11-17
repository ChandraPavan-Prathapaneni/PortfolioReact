import React from "react";
import Tourista from "../assets/portfolio/Tourista.png";
import MovieApi from "../assets/portfolio/Movie.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: Tourista,
      code: "https://github.com/ChandraPavan-Prathapaneni/Tourista",
      link: "https://chandrapavan-prathapaneni.github.io/Tourista/#tours", // Add demo links if available
    },
    {
      id: 2,
      src: MovieApi,
      code: "https://github.com/ChandraPavan-Prathapaneni/React-Movies-App/tree/main",
      link: "https://github.com/ChandraPavan-Prathapaneni/movies", // Add demo links if available
    },
  ];

  const handleLinkClick = (url) => {
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
        <div className="text-center mb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            My Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, code, link }) => (
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
                  onClick={() => handleLinkClick(link)}
                  className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
                >
                  Link
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
