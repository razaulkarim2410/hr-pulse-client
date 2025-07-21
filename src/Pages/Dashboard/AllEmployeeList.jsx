import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const API_BASE = import.meta.env.VITE_API_URL;

const AllEmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'card'

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

  const handleSalaryUpdate = async (id, newSalary, currentSalary) => {
    const parsedNew = parseFloat(newSalary);
    const parsedCurrent = parseFloat(currentSalary);
    if (!parsedNew || isNaN(parsedNew)) return;

    if (parsedNew <= parsedCurrent) {
      Swal.fire("Not Allowed", "Only salary increases are allowed!", "warning");
      return;
    }

    await axios.patch(`${API_BASE}/users/${id}/salary`, {
      salary: parsedNew,
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
    <div className="p-4">
      <Helmet>
        <title>Dashboard | All Employee</title>
      </Helmet>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">All Employees</h2>
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
        >
          {viewMode === "table" ? "Switch to Card View" : "Switch to Table View"}
        </button>
      </div>

      {viewMode === "table" ? (
        <div className="overflow-x-auto">
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
                      onBlur={(e) =>
                        handleSalaryUpdate(user._id, e.target.value, user.salary)
                      }
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
      ) : (
        // 🔁 Card View Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {employees.map((user) => (
            <div
              key={user._id}
              className="card bg-base-100 shadow-md border p-4 space-y-2"
            >
              <h3 className="text-lg font-bold">{user.name}</h3>
              <p>Designation: {user.designation}</p>
              <p>Role: {user.role}</p>
              <p>
                Salary:
                <input
                  type="number"
                  className="input input-sm input-bordered w-28 ml-2"
                  defaultValue={user.salary || 0}
                  onBlur={(e) =>
                    handleSalaryUpdate(user._id, e.target.value, user.salary)
                  }
                />
              </p>
              <p>
                Verify:{" "}
                {user.isVerified ? (
                  <span className="text-green-500 font-bold">✔</span>
                ) : (
                  <button
                    className="btn btn-xs btn-success"
                    onClick={() => handleVerify(user._id)}
                  >
                    Verify
                  </button>
                )}
              </p>
              <p>
                Make HR:{" "}
                {user.role === "Employee" && !user.isFired ? (
                  <button
                    className="btn btn-xs btn-info"
                    onClick={() => handleMakeHR(user._id)}
                  >
                    Make HR
                  </button>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </p>
              <p>
                Fire:{" "}
                {user.isFired ? (
                  <span className="text-red-500 font-semibold">Fired</span>
                ) : (
                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => handleFire(user._id)}
                  >
                    Fire
                  </button>
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllEmployeeList;
