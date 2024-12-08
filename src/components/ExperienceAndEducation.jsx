import React, { useState, useEffect, useRef } from "react";
import { MdWork, MdSchool } from "react-icons/md";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ExperienceAndEducation = () => {
  const [showExperience, setShowExperience] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

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
        "Graduating in Major of Information Systems.",
        "Worked on projects in Web Development, UI App Design, Machine Learning, and Database Design.",
      ],
    },
  ];

  const items = showExperience ? experiences : education;
  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex === items.length - 1;

  useEffect(() => {
    if (cardRef.current) {
      const currentCardHeight = cardRef.current.scrollHeight;
      setMaxHeight((prevMaxHeight) =>
        Math.max(prevMaxHeight, currentCardHeight)
      );
    }
  }, [currentIndex, showExperience]);

  const handlePrev = () => {
    if (!isFirstItem) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isLastItem) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleExperience = () => {
    setShowExperience(true);
    setCurrentIndex(0);
  };

  const handleEducation = () => {
    setShowExperience(false);
    setCurrentIndex(0);
  };

  return (
    <section
      id="my-journey"
      className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="text-center mb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            My Journey
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={handleExperience}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              showExperience
                ? "bg-gray-300 text-gray-700 border border-gray-300"
                : "bg-gray-900 text-white border border-gray-700"
            }`}
          >
            Experience
          </button>
          <button
            onClick={handleEducation}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              !showExperience
                ? "bg-gray-300 text-gray-700 border border-gray-300"
                : "bg-gray-900 text-white border border-gray-700"
            }`}
          >
            Education
          </button>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Card */}
          <div
            ref={cardRef}
            className="w-[80vw] sm:w-[400px] md:w-[500px] bg-gray-800 text-white p-6 rounded-lg shadow-lg overflow-hidden transition-all duration-500"
            style={{ height: `${maxHeight}px` }}
          >
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
                <h5 className="text-gray-400">
                  {items[currentIndex].location}
                </h5>
                <p className="text-sm mt-2">
                  {items[currentIndex].description.join(", ")}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {items[currentIndex].date}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4 space-x-4">
            {!isFirstItem && (
              <button
                onClick={handlePrev}
                className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600"
              >
                <FaArrowUp />
              </button>
            )}
            {!isLastItem && (
              <button
                onClick={handleNext}
                className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600"
              >
                <FaArrowDown />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
