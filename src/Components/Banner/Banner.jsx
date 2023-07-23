import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Zoom duration={800} delay={ 200}>
      <div className="mt-3">
        <div className="bg-gradient-to-r from-gray-500 via-blue-300 to-green-200 text-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="md:flex items-center justify-between">
              <div className="md:w-1/2">
                <h1 className="text-5xl font-bold mb-4 leading-tight">
                  Welcome to Our College
                </h1>
                <p className="text-xl mb-6">
                  University admission or college admission is the process
                  through which students enter tertiary education at
                  universities and colleges.
                </p>
                <Link to="/hob">
                  <button className="bg-white text-purple-500 px-6 py-3 rounded-lg shadow-md hover:shadow-lg focus:outline-none">
                    Learn More
                  </button>
                </Link>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 p-4">
                <img
                  src="https://img.freepik.com/free-photo/want-answer_1098-13608.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=ais" // Replace with the URL or file path of your banner image
                  alt="College Banner"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Banner;
