import React from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = ({ college }) => {
  const { collegeId } = useParams();
  const colleges = college.find((college) => college.id === parseInt(collegeId));

  if (!college) {
    return <div>College not found!</div>;
  }
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={colleges.image}
          alt={colleges.name}
          className="w-full h-40 object-cover rounded-t-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-4">{colleges.name}</h2>
        <p className="mb-2">
          <span className="font-bold">Admission Process:</span>{" "}
          {college.admissionProcess}
        </p>
        <p className="mb-2">
          <span className="font-bold">Events Details:</span>{" "}
          {college.eventsDetails}
        </p>
        <p className="mb-2">
          <span className="font-bold">Research Works:</span>{" "}
          {college.researchWorks}
        </p>
        <p className="mb-2">
          <span className="font-bold">Sports Categories:</span>{" "}
          {college.sportsCategories}
        </p>
      </div>
    </div>
  );
};

export default CollegeDetails;
