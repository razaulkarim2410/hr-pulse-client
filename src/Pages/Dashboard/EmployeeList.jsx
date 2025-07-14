import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const EmployeeList = () => {
  const queryClient = useQueryClient();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const { data: employees = [], isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/users");
      return res.data;
    },
  });

  const verifyMutation = useMutation({
    mutationFn: async ({ id, isVerified }) => {
      const res = await axios.patch(`http://localhost:5000/users/${id}/verify`, {
        isVerified,
      });
      return res.data;
    },
    onSuccess: () => {
      Swal.fire("Success", "Verification status updated", "success");
      queryClient.invalidateQueries(["employees"]);
    },
  });

  const payrollMutation = useMutation({
    mutationFn: async (payData) => {
      const res = await axios.post("http://localhost:5000/payroll", payData);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire("Success", "Payment request submitted", "success");
      setSelectedEmployee(null);
      setMonth("");
      setYear("");
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

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className=" py-10 mt-14 w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold mb-6  text-center">Employee List</h2>
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
              <tr key={emp._id} className="border hover:bg-gray-100">
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
                    className={`btn btn-xs ${emp.isVerified ? "btn-primary" : "btn-disabled"
                      }`}
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
          <div className="bg-white p-6 rounded-lg w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">Pay {selectedEmployee.name}</h3>
            <p className="mb-2">Salary: ৳{selectedEmployee.salary}</p>
            <div className="mb-2">
              <label>Month:</label>
              <input
                type="text"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="e.g., July"
                className="input input-bordered w-full mt-1"
              />
            </div>
            <div className="mb-4">
              <label>Year:</label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="e.g., 2025"
                className="input input-bordered w-full mt-1"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button className="btn btn-secondary btn-sm" onClick={() => setSelectedEmployee(null)}>
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
