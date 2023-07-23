import React from "react";
import CollegeCard from "./CollegeCard";
import CollegeUse from "../Hooks/CollegeUse";

const College = () => {
  const [collegeAll, isLoading] = CollegeUse();
  if (isLoading) {
    return (
      <div className="flex justify-center py-3">
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">College Admission Website</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {collegeAll.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default College;
