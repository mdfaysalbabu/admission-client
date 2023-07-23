import React, { useContext, useState } from "react";
// import { AuthContext } from "../Providers/AuthProviders";

const UserProfile = () => {
    // const { user, } = useContext(AuthContext);
  const initialUserData = {
    name: "John Doe",
    email: "john.doe@example.com",
    university: "Example University",
    address: "123 Main St, City",
  };
  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Here, you can implement the logic to save the updated user data
    setIsEditing(false);
  };
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="mb-4">
          <label className="block font-bold mb-2">Name</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
          ) : (
            <p>{userData.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Email</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
          ) : (
            <p>{userData.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">University</label>
          {isEditing ? (
            <input
              type="text"
              name="university"
              value={userData.university}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
          ) : (
            <p>{userData.university}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Address</label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
          ) : (
            <p>{userData.address}</p>
          )}
        </div>
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg focus:outline-none"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg focus:outline-none"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
