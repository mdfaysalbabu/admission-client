import React, { useState } from "react";

const CollegeCard = ({ college }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
        <div className="relative">
          <img
            src={college.image}
            alt={college.name}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <span className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-md">
            {college.rating}
          </span>
        </div>
        <h2 className="text-xl font-bold mt-4 mb-2">{college.name}</h2>
        <div className="flex justify-between items-center mb-4">
          <p>Admission Date: {college.admissionDate}</p>
          <p>Research: {college.researchCount}</p>
        </div>
        <button
          onClick={toggleDetails}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Details
        </button>

        {showDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg max-w-lg">
              <h2 className="text-2xl font-bold mb-4">
                {college.name} Details
              </h2>
              <p>
                <span className="font-bold">Events:</span> {college.events}
              </p>
              <p>
                <span className="font-bold">Sports Facilities:</span>{" "}
                {college.sportsFacilities}
              </p>
              <button
                onClick={toggleDetails}
                className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeCard;
