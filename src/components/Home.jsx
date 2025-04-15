import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-[#FFDAB9] via-peach-200 to-peach-300 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 p-2">
            I'm a Full Stack Developer
            <h4 className="text-lg p-2 sm:text-lg md:text-lg font-medium text-gray-800">
              <br />
              ~Chandra Pavan Prathapaneni
            </h4>
          </h2>

          <p className="text-gray-700 max-w-md p-2">
            I have 5+ years of experience building and designing web
            applications.
          </p>

          <div>
            <Link
              to="/projects"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-rose-400 to-orange-300 shadow-md hover:shadow-lg transition duration-300"
            >
              Projects
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
            className="rounded-2xl mx-auto w-2/3 md:w-full max-w-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
