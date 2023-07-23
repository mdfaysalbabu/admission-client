import React from "react";
import { Fade } from "react-awesome-reveal";

const CollegeGallery = () => {
  const graduateImages = [
    "https://img.freepik.com/free-photo/graduation-concept-with-students-holding-blank-certificate-template_23-2148201847.jpg?size=626&ext=jpg&ga=GA1.2.1676688474.1687690117&semt=ais",
    "https://img.freepik.com/free-photo/portrait-three-smiling-graduate-friends-graduation-robes-university-campus-with-diploma_496169-1363.jpg?size=626&ext=jpg&ga=GA1.2.1676688474.1687690117&semt=ais",
    "https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201866.jpg?size=626&ext=jpg&ga=GA1.2.1676688474.1687690117&semt=ais",
    "https://img.freepik.com/free-photo/multinational-graduates-male-female-celebrating-graduation-university-campus-removing-their-graduation-hats-smiling-camera_496169-1297.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=ais",
    "https://img.freepik.com/free-photo/three-happy-international-graduate-friends-greeting-university-campus-graduation-robes-with-diploma_496169-1360.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=ais",
    "https://img.freepik.com/premium-photo/students-university-people-wearing-mantles-group-students_115086-788.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=ais",
    // Add more image file names as needed
  ];
  return (
    <Fade direction="right">
      <div>
        <div className=" rounded-lg shadow-md p-4">
          <h2 className="text-2xl text-orange-400 font-bold mb-4 text-center">
             Gallery
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
    </Fade>
  );
};

export default CollegeGallery;
