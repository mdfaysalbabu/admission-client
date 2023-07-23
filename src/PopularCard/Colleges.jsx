import React from "react";
import CollegeDetails from "./CollegeDetails";
import CollegeCard from "./CollegeCard";
import { Route } from "react-router-dom";

const Colleges = () => {
  const colleges = [
    {
      id: 1,
      name: "College A",
      image: "https://img.freepik.com/free-photo/cute-woman-writing-park_23-2147844892.jpg?size=626&ext=jpg&ga=GA1.2.1676688474.1687690117&semt=ais",
      admissionDate: "Aug 15, 2023",
      events: "Annual Fest, Hackathon",
      researchHistory: "Established in 1995",
      sports: "Football, Basketball",
      admissionProcess:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      eventsDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      researchWorks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sportsCategories:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more college data objects here
  ];
  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">College Admission Website</h1>
        <div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {colleges.map((colleges) => (
                <CollegeCard key={colleges.id} college={colleges} />
              ))}
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Colleges;
