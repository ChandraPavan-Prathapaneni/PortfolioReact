import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, name: "home", path: "/" },
    { id: 2, name: "tech stack", path: "/tech-stack" },
    { id: 3, name: "about me", path: "/about-me" },
    { id: 4, name: "career", path: "/career" },
    { id: 5, name: "projects", path: "/projects" },
    { id: 6, name: "contact", path: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-gray-900 bg-gradient-to-r from-[#FFDAB9] to-[#fcc8a3] fixed top-0 z-50 shadow-md">
      <div>
        <h1 className="text-4xl sm:text-5xl font-signature ml-2 text-rose-600">
          Pavan
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, name, path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-700 hover:text-rose-500 hover:scale-105 duration-200"
          >
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-700 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#FFDAB9] via-[#FFF5EE] to-white text-gray-800">
          {links.map(({ id, name, path }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-rose-500"
            >
              <Link to={path} onClick={() => setNav(false)}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
