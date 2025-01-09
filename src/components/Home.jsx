import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20" // Add pt-20 for top padding
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white p-2">
            I'm a Full Stack Developer
            <h4 className="text-lg p-2 sm:text-lg md:text-lg font-medium text-white">
              <br></br>~Chandra Pavan Prathapaneni
            </h4>
          </h2>

          <p className="text-gray-500 max-w-md p-2">
            I have 5 years of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React, Tailwind, JavaScript.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 cursor-pointer"
            >
              projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-8 md:mt-0 w-96 px-3 py-3 h-70">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
