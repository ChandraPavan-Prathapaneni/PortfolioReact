import React from "react";

const SectionTitle = ({ title, titleNo }) => {
  return (
    <div className="text-center mb-12">
      <span className="text-lg font-semibold text-rose-400">{titleNo}</span>
      <h2 className="text-4xl font-bold mt-2 text-gray-800">{title}</h2>
      <div className="mt-2 w-20 h-1 bg-rose-300 mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
