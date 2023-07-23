import React from "react";
import { Link } from "react-router-dom";

const CollegeCard = ({colleges}) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="relative">
          <img
            src={colleges.image}
            alt={colleges.name}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <span className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-md">
            {colleges.admissionDate}
          </span>
        </div>
        <h2 className="text-xl font-bold mt-4 mb-2">{colleges.name}</h2>
        <p className="mb-2">
          <span className="font-bold">Events:</span> {colleges.events}
        </p>
        <p className="mb-2">
          <span className="font-bold">Research History:</span>{" "}
          {colleges.researchHistory}
        </p>
        <p className="mb-2">
          <span className="font-bold">Sports:</span> {colleges.sports}
        </p>
        <Link
          to={`/college/${colleges.id}`}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;
