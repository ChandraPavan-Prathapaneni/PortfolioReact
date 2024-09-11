import React, { useState } from "react";
import { MdWork, MdSchool } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ExperienceAndEducation = () => {
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiences = [
    {
      title: "Software Engineer",
      company: "Capgemini",
      location: "Bangalore, India",
      date: "August 2021 - December 2022",
      description: [
        "Designed and developed scalable backend systems using Java, reducing processing time by 54 seconds.",
        "Built responsive websites with React.js, improving loading time and UX.",
        "Implemented a backend cleanup app using MS SQL Server, enhancing database efficiency by 50%.",
        "Managed testing lifecycle and code reviews to maintain high code quality.",
        "Collaborated in Agile environments and worked on legacy applications.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "CGI",
      location: "Bangalore, India",
      date: "August 2019 - November 2020",
      description: [
        "Developed multiple apps using Python for a Canadian telecom, significantly enhancing their operations and services, while gaining $20 Million Revenue.",
        "Orchestrated the seamless migration of legacy databases to modern MS SQL Server, ensuring data integrity and uninterrupted functionality.",
        "Leveraged Azure for app deployment and management, optimizing performance and scalability.",
        "Implemented data analytics to generate insights from user data, improving product features and user satisfaction.",
        "Leveraged HTML, CSS, and JavaScript for front-end web development, also enhancing UI/UX design.",
        "Employed Postman for API testing and debugging, ensuring robust and reliable backend services.",
      ],
    },
  ];

  const education = [
    {
      title: "Bachelor of Technology",
      school: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      date: "2015 - 2019",
      description: [
        "Graduated in Major of Electronics and Communication.",
        "Worked on projects in Embedded Systems, CNN, and Machine Learning.",
      ],
    },
    {
      title: "Masters of Science",
      school: "University of Texas at Dallas",
      location: "Richardson, Texas",
      date: "2023 - 2024",
      description: [
        "Graduating in Major of Information Systems",
        "Worked on projects in Web Development, UI App Design, Machine Learning, and Database Design.",
      ],
    },
  ];

  const handleExperience = () => {
    setShowEducation(false);
    setShowExperience(true);
    setCurrentIndex(0);
  };

  const handleEducation = () => {
    setShowExperience(false);
    setShowEducation(true);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    const items = showExperience ? experiences : education;
    setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1));
  };

  const items = showExperience ? experiences : education;
  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex === items.length - 1;

  return (
    <section
      id="my-journey"
      className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="text-center mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Journey
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <ul className="flex gap-8">
            <li
              onClick={handleExperience}
              className={`${
                showExperience
                  ? "border-b-2 border-textGreen text-textGreen"
                  : "border-b-2 border-transparent text-textDark"
              } py-3 px-6 text-sm cursor-pointer font-medium`}
            >
              Experience
            </li>
            <li
              onClick={handleEducation}
              className={`${
                showEducation
                  ? "border-b-2 border-textGreen text-textGreen"
                  : "border-b-2 border-transparent text-textDark"
              } py-3 px-6 text-sm cursor-pointer font-medium`}
            >
              Education
            </li>
          </ul>
        </div>

        <div className="relative flex items-center justify-center">
          {!isFirstItem && (
            <button
              onClick={handlePrev}
              className="absolute left-0 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
            >
              <FaArrowLeft />
            </button>
          )}

          <div className="flex overflow-hidden">
            <div className="flex-none w-[80vw] sm:w-[400px] md:w-[500px]">
              {items.length > 0 && (
                <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    {showExperience ? (
                      <MdWork className="text-white text-4xl" />
                    ) : (
                      <MdSchool className="text-white text-4xl" />
                    )}
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">
                        {items[currentIndex].title}
                      </h3>
                      <h4 className="text-lg">
                        {showExperience
                          ? items[currentIndex].company
                          : items[currentIndex].school}
                      </h4>
                      <h5 className="text-gray-600">
                        {items[currentIndex].location}
                      </h5>
                      <p className="text-sm">
                        {items[currentIndex].description.join(", ")}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        {items[currentIndex].date}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {!isLastItem && (
            <button
              onClick={handleNext}
              className="absolute right-0 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
            >
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
