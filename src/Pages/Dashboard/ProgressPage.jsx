import React, { useEffect, useState } from "react";
import axios from "axios";

const ProgressPage = () => {
  const [works, setWorks] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch all employees for dropdown
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users");
        setEmployees(res.data);
      } catch (err) {
        console.error("Failed to fetch employees", err);
      }
    };
    fetchEmployees();
  }, []);

  // Fetch filtered worksheet data
  useEffect(() => {
    const fetchWorks = async () => {
      if (!selectedMonth) return; // Month is required

      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/progress", {
          params: {
            name: selectedName,
            month: selectedMonth,
          },
        });
        setWorks(res.data);
      } catch (err) {
        console.error("Failed to fetch works", err);
      } finally {
        setLoading(false);
      }
    };
    fetchWorks();
  }, [selectedName, selectedMonth]);

  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Employee Work Progress</h2>

      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <select
          className="select select-bordered"
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
        >
          <option value="">All Employees</option>
          {employees.map((emp) => (
            <option key={emp._id} value={emp.name}>
              {emp.name}
            </option>
          ))}
        </select>

        <select
          className="select select-bordered"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">Select Month</option>
          {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            .map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          {works.length > 0 ? (
            <table className="table table-zebra w-full">
              <thead className="bg-purple-800 text-white">
                <tr>
                  <th>#</th>
                  <th>Employee</th>
                  <th>Date</th>
                  <th>Task Title</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                {works.map((task, i) => (
                  <tr key={task._id}>
                    <td>{i + 1}</td>
                    <td>{task.name}</td>
                    <td>{task.date}</td>
                    <td>{task.taskTitle}</td>
                    <td>{task.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500">No data found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgressPage;
