import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AllEmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch all verified users (HR + Employee)
  useEffect(() => {
    axios.get("/users") // Assumes your backend /users returns all verified users
      .then(res => setEmployees(res.data))
      .catch(err => console.error("Failed to fetch users:", err));
  }, []);

  const handleMakeAdmin = async (id, name) => {
    const confirm = await Swal.fire({
      title: `Promote ${name} to Admin?`,
      text: "This user will have full admin access.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Promote",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axios.put(`/users/${id}/make-admin`);
        if (res.data.success) {
          Swal.fire("Success", `${name} is now an Admin.`, "success");
          // Update UI
          setEmployees(prev =>
            prev.map(emp =>
              emp._id === id ? { ...emp, role: "Admin" } : emp
            )
          );
        }
      } catch (error) {
        console.error("Error promoting to admin:", error);
        Swal.fire("Error", "Could not promote user to Admin.", "error");
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Verified Employees</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Role</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.designation || "N/A"}</td>
                <td className="capitalize">{user.role}</td>
                <td>
                  {user.role === "Admin" ? (
                    <span className="text-green-600 font-semibold">Already Admin</span>
                  ) : (
                    <button
                      className="btn btn-sm btn-outline btn-primary"
                      onClick={() => handleMakeAdmin(user._id, user.name)}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployeeList;
