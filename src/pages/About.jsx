import React from "react";

const About = () => {
  return (
    <div
      name="about-me"
      className="bg-gradient-to-b from-[#FFDAB9] via-peach-200 to-peach-300 pt-20 py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="text-center mb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <div className="text-base sm:text-lg md:text-xl">
          <p className="mb-4">
            Hi, I'm <strong>Chandra Pavan Prathapaneni</strong>, a passionate
            and results-driven software engineer based in Plano, TX. I bring
            over 5 years of hands-on experience building robust, scalable
            full-stack applications and microservices using technologies like
            Java, Spring Boot, React.js, Node.js, and cloud platforms like AWS
            and Azure.
          </p>
          <p className="mb-4">
            Currently, I'm working remotely at{" "}
            <strong>Adverum Biotechnologies</strong>, where I focus on
            optimizing system performance through smart caching strategies and
            efficient database design. I’ve also contributed to backend
            infrastructure using Spring Boot, Hibernate, and cloud-native
            deployments with Docker and AWS EC2.
          </p>
          <p className="mb-4">
            Previously, at <strong>Capgemini</strong> and <strong>CGI</strong>,
            I worked on a wide range of enterprise-grade solutions—from building
            RESTful APIs and frontend interfaces to managing microservices and
            DevOps pipelines. My toolkit includes MongoDB, Redis, PostgreSQL,
            and a strong understanding of CI/CD practices using GitHub Actions,
            Jenkins, and container orchestration.
          </p>
          <p className="mb-4">
            I thrive in Agile environments and love collaborating across teams
            to deliver impactful solutions. I’m also currently pursuing my M.S.
            in Information Technology Management at The University of Texas at
            Dallas, constantly learning and adapting to new technologies.
          </p>
          <p>
            When I’m not coding, you’ll likely find me experimenting with side
            projects like my Manga Inventory System, keeping up with emerging
            tech trends, or tweaking my portfolio to make it just a little more
            perfect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
