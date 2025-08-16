import React from "react";
import employeeImg from "../../../assets/pexels-timmossholder-1722196.jpg";

const dummyData = {
  name: "John Doe",
  photo: employeeImg,
  designation: "Software Engineer",
  details:
    "John is responsible for daily development tasks, attending meetings, submitting reports, and collaborating with HR for leave and reimbursement requests.",
};

const EmployeesDetails = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-4xl font-bold text-cyan-700 mb-6">Employee Details</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={dummyData.photo}
            alt={dummyData.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{dummyData.name}</h2>
            <p className="text-lg text-cyan-600">{dummyData.designation}</p>
            <p className="mt-4 text-gray-600">{dummyData.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesDetails;
