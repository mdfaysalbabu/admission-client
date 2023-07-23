import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-500 via-blue-300 to-green-200">
          <div className="text-6xl font-bold text-white mb-4">404</div>
          <div className="text-3xl font-bold text-white mb-8">
            Page Not Found
          </div>
          <img
            src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1900.jpg"
            alt="Awesome Image"
            className="w-64 mb-8 rounded-full shadow-lg"
          />
          <Link>
            <button
              to="/"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
