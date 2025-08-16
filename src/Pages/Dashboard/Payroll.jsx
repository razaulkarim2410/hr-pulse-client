import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const Payroll = () => {
  const [payrolls, setPayrolls] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  // Fetch payroll requests
  const fetchPayrolls = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://hr-pulse-server.vercel.app/payroll"); // update base URL
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
      // ✅ Just navigate to Stripe payment page — all logic will be handled there
      navigate(`/dashboard/payment/${id}`);
    }
  };


  useEffect(() => {
    fetchPayrolls();
  }, []);


  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <Helmet>
        <title>Dashboard | Payroll</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Payroll Requests</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead>
              <tr className="bg-gray-100">
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
              {payrolls.map((pay) => (
                <tr key={pay._id}>
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
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      >
                        Pay
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {payrolls.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-4">
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
