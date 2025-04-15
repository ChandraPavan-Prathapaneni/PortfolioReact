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
      title: "Full Stack Java Developer",
      company: "Adverum Biotechnologies",
      location: "Redwood, California",
      date: "August 2023 - Present",
      description: [
        "Optimized database queries and implemented data caching strategies using Redis and MongoDB indexes, improving system performance by reducing query response times and enhancing scalability",
        "All the functionality is implemented using Spring Boot and Hibernate ORM. Implemented Java EE components using Spring MVC, Spring IOC, Spring transactions and Spring security modules",
        "Designed, documented and developed Micro Services using Java, Spring Boot, Spring, Hibernate, MySQL Workbench,Postman",
        "Utilized Amazon Web Services (AWS EC2) to deploy Docker containers with both monolith and Micro-Services architecture",
        "Implemented API Gateway using AWS API Gateway to expose microservices securely, manage traffic routing, and ensure scalability, reducing direct client-to-service communication and improving fault tolerance",
      ],
    },
    {
      title: "Software Engineer",
      company: "Capgemini",
      location: "Bangalore, India",
      date: "December 2020 - December 2022",
      description: [
        "designed and developed RESTful API and services using best practices to interact within the microservices and with the frontend application. While writing application-level code to interact with APIs, Web Services using AJAX, JSON and XML.",
        "Involved in developing user interface with HTML5, CSS3, JSON, AJAX, React JS, Typescript, Es6 and on server-side technology with Node JS.",
        "Developed Data Access Object (DAO) for interacting with databases using Hibernate. Developed and consumed JSON based RESTful services using Spring MVC and Spring Boot",
        "Mentored other team members regarding technology conflicts and upgradations requested by the client. Responsible for integrating the offshore team with the onsite team.",
        "Developing the application using Struts and Hibernate based frameworks done with server-side validations using Struts validation framework REST APIs, including JSON data formats and written shell scripts in Linux to call routines.",
        "Developing the Micro Services using Spring Boot that create, update, delete and get the assignment information from the backend.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "CGI",
      location: "Bangalore, India",
      date: "January 2019 - November 2020",
      description: [
        "Implemented Restful web services API using HTTP and REST principles. GIT used for defects, changing tracking across the application. Wrote Junit test classes for the services and prepared documentation.",
        "Used Spring JDBC for data retrieval from the database for various inquiries. Wrote complex SQL queries to retrieve data from the Oracle database.",
        "Developed a web application utilizing Spring Boot that analyzes database tables to create various batch reports and visual models.",
        "Wrote services to store and retrieve user data from MongoDB for the application on devices.",
        "Implemented AWS high availability using AWS Elastic Load Balancing (ELB), which performs balancing across instances in multiple availability zones. Designed, implemented, and supported fully automated infrastructure.",
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

  const handlePrev = () => !isFirstItem && setCurrentIndex((prev) => prev - 1);
  const handleNext = () => !isLastItem && setCurrentIndex((prev) => prev + 1);
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
      id="career"
      className="bg-gradient-to-b from-[#FFDAB9] via-peach-200 to-peach-300 text-gray-900 pt-20"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex justify-center mb-8 py-1">
          <button
            onClick={handleExperience}
            className={`px-6 py-2 text-sm font-medium rounded-l-lg transition-all duration-300 ${
              showExperience
                ? "bg-gradient-to-r from-orange-400 to-orange-300 text-white border border-orange-300 scale-105 shadow-md"
                : "bg-orange-100 text-gray-800 border border-orange-300"
            }`}
          >
            Experience
          </button>
          <button
            onClick={handleEducation}
            className={`px-6 py-2 text-sm font-medium rounded-r-lg transition-all duration-300 ${
              !showExperience
                ? "bg-gradient-to-r from-orange-400 to-orange-300 text-white border border-orange-300 scale-105 shadow-md"
                : "bg-orange-100 text-gray-800 border border-orange-300"
            }`}
          >
            Education
          </button>
        </div>

        {/* Navigation buttons above card - centered and closer together */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-4">
            <button
              aria-label="Previous item"
              onClick={handlePrev}
              disabled={isFirstItem}
              className={`p-3 rounded-full shadow-md transition ${
                isFirstItem
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-orange-400 hover:bg-orange-500 text-white"
              }`}
            >
              <FaArrowUp />
            </button>

            <span className="text-sm font-medium text-gray-700">
              {currentIndex + 1} / {items.length}
            </span>

            <button
              aria-label="Next item"
              onClick={handleNext}
              disabled={isLastItem}
              className={`p-3 rounded-full shadow-md transition ${
                isLastItem
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-orange-400 hover:bg-orange-500 text-white"
              }`}
            >
              <FaArrowDown />
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="flex justify-center">
          <div
            ref={cardRef}
            className="w-full max-w-[900px] bg-gradient-to-r from-orange-100 to-orange-200 text-black p-6 md:p-8 rounded-2xl shadow-xl transition-all duration-500 mx-4 mb-12"
            style={{
              minHeight: `${maxHeight}px`,
              transition: "min-height 0.5s ease-in-out",
            }}
          >
            <div className="flex items-start">
              <div className="mr-6 mt-1">
                {showExperience ? (
                  <MdWork className="text-orange-500 text-4xl" />
                ) : (
                  <MdSchool className="text-orange-500 text-4xl" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-gray-900">
                  {items[currentIndex].title}
                </h3>
                <h4 className="text-xl text-gray-800">
                  {showExperience
                    ? items[currentIndex].company
                    : items[currentIndex].school}
                </h4>
                <h5 className="text-gray-700 font-medium">
                  {items[currentIndex].location}
                </h5>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-gray-700">
                  {items[currentIndex].description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <p className="text-sm text-orange-600 font-medium mt-4">
                  {items[currentIndex].date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
