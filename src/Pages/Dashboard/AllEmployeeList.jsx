import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const API_BASE = import.meta.env.VITE_API_URL;



const AllEmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(`${API_BASE}/users/all`);


      if (Array.isArray(res.data)) {
        setEmployees(res.data);
      } else {
        console.error("Expected array, got:", res.data);
        setEmployees([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleMakeHR = async (id) => {
    const confirmed = await Swal.fire({
      title: "Make this employee an HR?",
      showCancelButton: true,
      confirmButtonText: "Yes, promote!",
    });

    if (confirmed.isConfirmed) {
      await axios.put(`${API_BASE}/users/${id}/make-hr`);

      fetchEmployees();
    }
  };

  const handleFire = async (id) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "This employee will be fired.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, fire!",
    });

    if (confirmed.isConfirmed) {
      await axios.patch(`${API_BASE}/users/${id}/fire`);

      fetchEmployees();
    }
  };

  const handleSalaryUpdate = async (id, newSalary) => {
    if (!newSalary || isNaN(newSalary)) return;
    await axios.patch(`${API_BASE}/users/${id}/salary`, {
      salary: parseFloat(newSalary),
    });

    fetchEmployees();
  };

  const handleVerify = async (id) => {
    await axios.patch(`${API_BASE}/users/${id}/verify`, {
      isVerified: true,
    });

    fetchEmployees();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">All Employees</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Verify</th>
            <th>Make HR</th>
            <th>Fire</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.designation}</td>
              <td>{user.role}</td>
              <td>
                <input
                  type="number"
                  className="input input-sm input-bordered w-28"
                  defaultValue={user.salary || 0}
                  onBlur={(e) => handleSalaryUpdate(user._id, e.target.value)}
                />
              </td>
              <td>
                {user.isVerified ? (
                  <span className="text-green-500 font-bold">✔</span>
                ) : (
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => handleVerify(user._id)}
                  >
                    Verify
                  </button>
                )}
              </td>
              <td>
                {user.role === "Employee" && !user.isFired ? (
                  <button
                    className="btn btn-sm btn-info"
                    onClick={() => handleMakeHR(user._id)}
                  >
                    Make HR
                  </button>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </td>
              <td>
                {user.isFired ? (
                  <span className="text-red-500 font-semibold">Fired</span>
                ) : (
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleFire(user._id)}
                  >
                    Fire
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEmployeeList;
