import React from "react";
import CollegeCard from "./CollegeCard";

const College = () => {
  const colleges = [
    {
      id: 1,
      name: "College A",
      image: "https://img.freepik.com/free-photo/cheerful-students-library_23-2147844654.jpg?size=626&ext=jpg&ga=GA1.2.1676688474.1687690117&semt=ais",
      rating: 4.5,
      admissionDate: "August 15, 2023",
      researchCount: 50,
      events: "Annual Fest, Hackathon",
      sportsFacilities: "Basketball, Football",
    },
    // Add more college data objects here
  ];
  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">College Admission Website</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default College;
