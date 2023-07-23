import React from "react";

const CollegeGallery = () => {
  const graduateImages = [
    "https://img.freepik.com/free-photo/cute-woman-writing-park_23-2147844892.jpg?size=626&ext=jpg&ga=GA1.2.1676688474.1687690117&semt=ais",
    "https://img.freepik.com/free-photo/cute-woman-writing-park_23-2147844892.jpg?size=626&ext=jpg&ga=GA1.2.1676688474.1687690117&semt=ais",
    "https://img.freepik.com/free-photo/cute-woman-writing-park_23-2147844892.jpg?size=626&ext=jpg&ga=GA1.2.1676688474.1687690117&semt=ais",
    // Add more image file names as needed
  ];
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">
          College Graduate Group Pictures
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {graduateImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Graduate Group ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeGallery;
