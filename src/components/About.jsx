import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-gray-700 text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="text-center mb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="text-base sm:text-lg md:text-xl">
          <p className="mb-4">
            As a passionate software engineer with over 3+ years of experience,
            I specialize in developing scalable and efficient solutions using a
            diverse tech stack. My expertise spans Java, Python, React.js, and
            cloud platforms like AWS and Azure. I've successfully reduced
            processing times, enhanced database efficiency, and contributed to
            significant revenue increases through innovative application
            development.
          </p>
          <br></br>
          <p>
            I thrive in Agile environments, collaborating with cross-functional
            teams to deliver high-quality software solutions. My skills extend
            to DevOps practices, utilizing tools like Docker and Jenkins for
            CI/CD pipelines. Currently pursuing an M.S. in Information
            Technology Management at The University of Texas at Dallas, I'm
            constantly expanding my knowledge and staying current with emerging
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
