import React from "react";
import CollegeUse from "../Hooks/CollegeUse";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const PopularCollege = () => {
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
    <Fade direction="left">
      <div>
        <h1 className="text-3xl text-center text-orange-400 py-6">
          Popular College
        </h1>
        <div className="grid md:grid-cols-3 gap-4">
          {collegeAll.slice(0, 3).map((college) => (
            <div key={college._id}>
              <div>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="relative">
                    <img
                      src={college.college_image}
                      alt={college.college_name}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <h2 className="text-red-300 font-bold text-xl">
                      {college.college_name}
                    </h2>
                    <span className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-md">
                      {college.admission_dates.fall}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mt-4 mb-2">
                    {college.name}
                  </h2>
                  <p className="mb-2">
                    <span className="font-bold">Events:</span>{" "}
                    {college.events.slice(0, 2).map((event) => (
                      <li key={event._id}></li>
                    ))}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">Research History:</span>{" "}
                    {college.research_history}
                  </p>
                  {/* <p className="mb-2">
                  <span className="font-bold">Sports:</span> {
                    college.sports_category.slice(0,2).map(sports=><li key={sports._id}></li>)
                  }
                </p> */}
                  <Link
                    to={`/college/${college.id}`}
                    className="inline-block w-full text-center bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default PopularCollege;
