import React from "react";

const SectionTitle = ({ title, titleNo }) => {
  return (
    <div className="text-center mb-8">
      <span className="text-lg font-semibold text-gray-500">{titleNo}</span>
      <h2 className="text-3xl font-bold mt-2">{title}</h2>
    </div>
  );
};

export default SectionTitle;
