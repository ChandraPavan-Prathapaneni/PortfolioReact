import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-400 to-orange-300 py-8 text-center text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://linkedin.com/in/chandra-pavan-prathapaneni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/ChandraPavan-Prathapaneni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:chandrapavanprathapaneni@gmail.com"
            className="hover:text-gray-100 transition-colors duration-200"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Chandra Pavan Prathapaneni
        </p>
        <p className="text-xs mt-1">Full Stack Developer</p>
      </div>
    </footer>
  );
};

export default Footer;
