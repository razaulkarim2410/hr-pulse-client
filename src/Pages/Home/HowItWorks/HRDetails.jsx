import React from "react";
import hrImg from "../../../assets/pexels-apasaric-3342739.jpg";

const dummyData = {
  name: "Jane Smith",
  photo: hrImg,
  role: "HR Manager",
  responsibilities: [
    "Verify work logs and attendance",
    "Process payroll requests",
    "Support teams with policy & onboarding",
  ],
};

const HRDetails = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-4xl font-bold text-green-700 mb-6">HR Details</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={dummyData.photo}
            alt={dummyData.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-green-500"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{dummyData.name}</h2>
            <p className="text-lg text-green-600">{dummyData.role}</p>
            <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
              {dummyData.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDetails;
