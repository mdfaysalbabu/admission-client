import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-teal-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Brand */}
          <div className="text-white font-bold text-xl">My College App</div>

          {/* Hamburger menu icon for mobile */}
          <div className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 cursor-pointer text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>

          {/* Navigation Links - Responsive */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:space-x-4 md:items-center m-3`}
          >
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/college" className="text-white hover:text-gray-300">
                Colleges
              </a>
            </li>
            <li>
              <a href="/admission" className="text-white hover:text-gray-300">
                Admission
              </a>
            </li>
            <li>
              <a href="/mycollege" className="text-white hover:text-gray-300">
                My College
              </a>
            </li>
          </ul>

          {/* Search Field */}
          <div className="md:ml-4 p-3">
            <input
              type="text"
              placeholder="Search..."
              className="py-1 px-2 rounded-md md:w-40"
            />
          </div>

          {/* Login and Registration Buttons */}
          <div >
            {user ? (
              <>
                <span className=" mr-5 text-xl text-yellow-500">
                  {user?.displayName}
                </span>
                <div className=" rounded-2xl">
                  <img
                    className="rounded-2xl w-14 p-2"
                    src={user?.photoURL}
                    title={user.displayName}
                    alt=""
                  />
                </div>

                <button
                  onClick={handleLogOut}
                  className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                >
                  Logout
                </button>
              </>
            ) : (
              // <>
              //   <Link to="/login">Login</Link>
              // </>
              <Link to="/login">
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-purple-500 text-white py-2 px-4 rounded-lg shadow-md transition duration-300">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
