import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const Payroll = () => {
  const [payrolls, setPayrolls] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Auto-enable dark mode based on system preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Fetch payroll requests
  const fetchPayrolls = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://hr-pulse-server.vercel.app/payroll");
      setPayrolls(res.data);
    } catch (err) {
      console.error("Error fetching payrolls:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle "Pay" button click
  const handlePay = async (id) => {
    const confirm = await Swal.fire({
      title: "Confirm Payment?",
      text: "Do you want to proceed with payment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Pay",
    });

    if (confirm.isConfirmed) {
      navigate(`/dashboard/payment/${id}`);
    }
  };

  useEffect(() => {
    fetchPayrolls();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>Dashboard | Payroll</title>
      </Helmet>

      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Payroll Requests
      </h1>

      {loading ? (
        <p className="text-gray-600 dark:text-gray-300 text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Month</th>
                <th>Year</th>
                <th>Salary</th>
                <th>Payment Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payrolls.length > 0 ? (
                payrolls.map((pay) => (
                  <tr
                    key={pay._id}
                    className="text-gray-700 dark:text-gray-300 border-b dark:border-gray-700"
                  >
                    <td>{pay.name}</td>
                    <td>{pay.email}</td>
                    <td>{pay.month}</td>
                    <td>{pay.year}</td>
                    <td>৳{pay.salary}</td>
                    <td>
                      {pay.status === "paid"
                        ? new Date(pay.paymentDate).toLocaleDateString()
                        : "—"}
                    </td>
                    <td>
                      {pay.status === "paid" ? (
                        <span className="text-green-600 font-semibold">Paid</span>
                      ) : (
                        <button
                          onClick={() => handlePay(pay._id)}
                          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition"
                        >
                          Pay
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-4 text-gray-500 dark:text-gray-400"
                  >
                    No payroll requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Payroll;
