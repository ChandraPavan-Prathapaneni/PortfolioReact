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
import springboot from "../assets/springboot.png";

const TechStack = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-300 bg-transparent",
    },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-300 bg-transparent" },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-300 bg-transparent",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-400 bg-transparent",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-300 bg-transparent",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-300 bg-transparent",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400 bg-transparent",
    },
    {
      id: 8,
      src: git,
      title: "Git",
      style: "shadow-orange-300 bg-transparent",
    },
    {
      id: 9,
      src: figma,
      title: "Figma",
      style: "shadow-teal-300 bg-transparent",
    },
    {
      id: 10,
      src: aws,
      title: "Amazon Web Services",
      style: "shadow-yellow-300 bg-transparent",
    },
    {
      id: 11,
      src: azure,
      title: "Azure",
      style: "shadow-cyan-300 bg-transparent",
    },
    { id: 12, src: gcp, title: "GCP", style: "shadow-blue-300 bg-transparent" },
    {
      id: 13,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-300 bg-transparent",
    },
    {
      id: 14,
      src: python,
      title: "Python",
      style: "shadow-blue-300 bg-transparent",
    },
    {
      id: 15,
      src: java,
      title: "Java",
      style: "shadow-red-300 bg-transparent",
    },
    {
      id: 16,
      src: springboot,
      title: "Spring Boot",
      style: "shadow-green-300 bg-transparent",
    },
  ];

  return (
    <div
      name="tech-stack"
      className="bg-gradient-to-b from-[#FFDAB9] via-peach-200   to-peach-300 pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-800">
        <div className="text-center mb-8">
          <p className="text-5xl font-bold inline border-b-4 border-peach-300">
            Tech Stack
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-6 rounded-xl bg-transparent ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-sm font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
