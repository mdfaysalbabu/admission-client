import React from "react";
import { Controller, useForm } from "react-hook-form";

const Admission = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle form submission logic here
  };
  return (
    <div className="">
      <form  onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-red-300 m-5">
        <div className="mb-4">
          <label htmlFor="college" className="text-gray-800 font-semibold">
            Select College
          </label>
          <select
            id="college"
            {...control}
            name="college"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-400"
          >
            <option value="college1">College 1</option>
            <option value="college2">College 2</option>
            <option value="college3">College 3</option>
            {/* Add more college options here */}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="candidateName"
            className="text-gray-800 font-semibold"
          >
            Candidate Name
          </label>
          <Controller
            name="candidateName"
            control={control}
            rules={{ required: "Candidate Name is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-400"
              />
            )}
          />
          {errors.candidateName && (
            <span className="text-red-500">{errors.candidateName.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="text-gray-800 font-semibold">
            Subject
          </label>
          <Controller
            name="subject"
            control={control}
            rules={{ required: "Subject is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-400"
              />
            )}
          />
          {errors.subject && (
            <span className="text-red-500">{errors.subject.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="candidateEmail"
            className="text-gray-800 font-semibold"
          >
            Candidate Email
          </label>
          <Controller
            name="candidateEmail"
            control={control}
            rules={{
              required: "Candidate Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-400"
              />
            )}
          />
          {errors.candidateEmail && (
            <span className="text-red-500">
              {errors.candidateEmail.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="candidatePhone"
            className="text-gray-800 font-semibold"
          >
            Candidate Phone Number
          </label>
          <Controller
            name="candidatePhone"
            control={control}
            rules={{ required: "Candidate Phone Number is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="tel"
                className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-400"
              />
            )}
          />
          {errors.candidatePhone && (
            <span className="text-red-500">
              {errors.candidatePhone.message}
            </span>
          )}
        </div>

        {/* Add more input fields for address, date of birth, and image field */}
        {/* For example: */}
        <div className="mb-4">
          <label htmlFor="address" className="text-gray-800 font-semibold">
            Address
          </label>
          <Controller
            name="address"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field }) => (
              <textarea
                {...field}
                className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-400"
                rows="3"
              />
            )}
          />
          {errors.address && (
            <span className="text-red-500">{errors.address.message}</span>
          )}
        </div>

        {/* Add Date of Birth and Image fields based on your requirements */}

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admission;
