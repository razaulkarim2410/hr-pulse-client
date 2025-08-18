import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const EmployeeList = () => {
  const queryClient = useQueryClient();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Auto-enable dark mode based on system preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const { data: employees = [], isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axios.get("https://hr-pulse-server.vercel.app/users");
      return res.data;
    },
  });

  const verifyMutation = useMutation({
    mutationFn: async ({ id, isVerified }) => {
      const res = await axios.patch(
        `https://hr-pulse-server.vercel.app/users/${id}/verify`,
        { isVerified }
      );
      return res.data;
    },
    onSuccess: () => {
      Swal.fire("Success", "Verification status updated", "success");
      queryClient.invalidateQueries(["employees"]);
    },
  });

  const payrollMutation = useMutation({
    mutationFn: async (payData) => {
      const token = localStorage.getItem("access-token");
      const res = await axios.post(
        "https://hr-pulse-server.vercel.app/payroll",
        payData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data;
    },
    onSuccess: () => {
      Swal.fire("Success", "Payment request submitted", "success");
      setSelectedEmployee(null);
      setMonth("");
      setYear("");
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        Swal.fire("Unauthorized", "Please login again", "error");
      } else {
        Swal.fire("Error", error.message || "Something went wrong", "error");
      }
    },
  });

  const handleVerify = (id, currentStatus) => {
    verifyMutation.mutate({ id, isVerified: !currentStatus });
  };

  const handlePaySubmit = () => {
    if (!month || !year) {
      return Swal.fire("Error", "Month and Year are required", "error");
    }

    payrollMutation.mutate({
      employeeId: selectedEmployee._id,
      name: selectedEmployee.name,
      email: selectedEmployee.email,
      salary: selectedEmployee.salary,
      month,
      year,
    });
  };

  if (isLoading)
    return (
      <div className="text-center mt-10 text-gray-700 dark:text-gray-200">
        Loading...
      </div>
    );

  return (
    <div className="py-5 w-11/12 mx-auto transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Helmet>
        <title>Dashboard | Employee List</title>
      </Helmet>

      <h2 className="text-3xl font-semibold text-center mb-6">Employee List</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border text-sm">
          <thead className="bg-purple-900 text-white">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Verified</th>
              <th className="p-2">Bank Account</th>
              <th className="p-2">Salary</th>
              <th className="p-2">Pay</th>
              <th className="p-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr
                key={emp._id}
                className="border hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <td className="p-2">{emp.name}</td>
                <td className="p-2">{emp.email}</td>
                <td className="p-2 text-center">
                  <button
                    className={`text-lg ${emp.isVerified ? "text-green-500" : "text-red-500"}`}
                    onClick={() => handleVerify(emp._id, emp.isVerified)}
                  >
                    {emp.isVerified ? "✅" : "❌"}
                  </button>
                </td>
                <td className="p-2">{emp.bank_account_no}</td>
                <td className="p-2">৳{emp.salary}</td>
                <td className="p-2">
                  <button
                    className={`btn btn-xs ${emp.isVerified ? "btn-primary" : "btn-disabled"}`}
                    disabled={!emp.isVerified}
                    onClick={() => setSelectedEmployee(emp)}
                  >
                    Pay
                  </button>
                </td>
                <td className="p-2">
                  <a
                    href={`/dashboard/employee-salary-history/${emp.email}`}
                    className="text-blue-600 underline text-sm"
                  >
                    View Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pay Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="p-6 rounded-lg w-full max-w-sm transition-colors duration-300 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            <h3 className="text-lg font-semibold mb-4">Pay {selectedEmployee.name}</h3>
            <p className="mb-2">Salary: ৳{selectedEmployee.salary}</p>
            <div className="mb-2">
              <label>Month:</label>
              <input
                type="text"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="e.g., July"
                className="input input-bordered w-full mt-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
              />
            </div>
            <div className="mb-4">
              <label>Year:</label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="e.g., 2025"
                className="input input-bordered w-full mt-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedEmployee(null)}
              >
                Cancel
              </button>
              <button className="btn btn-primary btn-sm" onClick={handlePaySubmit}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
