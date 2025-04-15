import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/chandra-pavan-prathapaneni/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/ChandraPavan-Prathapaneni",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:chandrapavanprathapaneni@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <>
      {/* Desktop version */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-44 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-peach-200 text-gray-800 hover:bg-peach-300 shadow-md ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile version */}
      <footer className="lg:hidden fixed bottom-0 left-0 w-full bg-[#1e1e1e] bg-opacity-95 text-white shadow-md z-50">
        <div className="flex justify-around py-4">
          {links.map(({ id, child, href, download }) => (
            <a
              key={id}
              href={href}
              className="flex flex-col items-center text-sm"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
};

export default SocialLinks;
