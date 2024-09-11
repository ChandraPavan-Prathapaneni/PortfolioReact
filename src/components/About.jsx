import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a passionate software engineer with over 3+ years of experience, I
          specialize in developing scalable and efficient solutions using a
          diverse tech stack. My expertise spans Java, Python, React.js, and
          cloud platforms like AWS and Azure. I've successfully reduced
          processing times, enhanced database efficiency, and contributed to
          significant revenue increases through innovative application
          development. My experience includes working with both modern and
          legacy systems, from responsive web applications to mainframe
          technologies.
        </p>

        <br />

        <p className="text-xl">
          I thrive in Agile environments, collaborating with cross-functional
          teams to deliver high-quality software solutions. My skills extend to
          DevOps practices, utilizing tools like Docker and Jenkins for CI/CD
          pipelines. I'm particularly proud of my work in migrating legacy
          systems to modern technologies while ensuring data integrity and
          improved performance. Currently pursuing an M.S. in Information
          Technology Management at The University of Texas at Dallas, I'm
          constantly expanding my knowledge and staying current with emerging
          technologies. My goal is to leverage my technical skills and creative
          problem-solving abilities to drive innovation and create impactful
          solutions in the ever-evolving field of software engineering.
        </p>
      </div>
    </div>
  );
};

export default About;
