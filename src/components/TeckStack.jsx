import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import figma from "../assets/figma.png";
import aws from "../assets/aws.png";
import azure from "../assets/azure.png";
import nodejs from "../assets/nodejs.png";
import git from "../assets/Git.png";
import java from "../assets/Java.png";
import gcp from "../assets/gcp.png";
import springboot from "../assets/Springboot.png";

const TechStack = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "pt-8 shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "pt-8 shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "pt-8 shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "pt-8 shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "pt-8 shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "pt-8 shadow-white",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "pt-8 shadow-gray-400",
    },
    {
      id: 8,
      src: git,
      title: "Git",
      style: "pt-8 shadow-orange-400",
    },
    {
      id: 9,
      src: figma,
      title: "Figma",
      style: "pt-8 shadow-teal-400",
    },
    {
      id: 10,
      src: aws,
      title: "Amazon Web Services",
      style: "pt-8 shadow-orange-400",
    },
    {
      id: 11,
      src: azure,
      title: "Azure",
      style: "pt-8 shadow-cyan-400",
    },
    {
      id: 12,
      src: gcp,
      title: "GCP",
      style: "pt-8 shadow-blue-400",
    },
    {
      id: 13,
      src: nodejs,
      title: "Node JS",
      style: "pt-8 shadow-green-400",
    },
    {
      id: 14,
      src: python,
      title: "Python",
      style: "pt-8 shadow-blue-400",
    },
    {
      id: 15,
      src: java,
      title: "Java",
      style: "pt-8 shadow-red-400",
    },
    {
      id: 16,
      src: springboot,
      title: "Spring Boot",
      style: "pt-8 shadow-green-400",
    },
  ];

  return (
    <div
      name="tech-stack"
      className="bg-gradient-to-b from-gray-800 to-black w-full py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center mb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            Tech Stack
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
