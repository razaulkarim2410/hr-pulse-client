// src/Pages/Dashboard/PaymentHistory.jsx
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { auth } from '../../firebase/firebase.config';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
  const user = auth.currentUser;
  const email = user?.email;

  const [page, setPage] = useState(1);
  const limit = 5;

  const { data = {}, isLoading, isError, refetch } = useQuery({
    queryKey: ['payment-history', email, page],
    enabled: !!email,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/payment-history?email=${email}&page=${page}&limit=${limit}`
      );
      if (!res.ok) throw new Error("Failed to fetch payment history");
      return res.json();
    },
  });

  if (isLoading) return <p className="text-center py-6">Loading...</p>;
  if (isError) return <p className="text-center text-red-500 py-6">Failed to load payment history.</p>;

  const { payments = [], total = 0 } = data;
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="p-4">
      <Helmet>
        <title>Dashboard | Payment History</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-4">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Month</th>
              <th>Year</th>
              <th>Amount</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item, idx) => (
              <tr key={idx}>
                <td>{item.month}</td>
                <td>{item.year}</td>

                <td>৳{item.salary}</td>

                <td>{item.transactionId || item._id?.slice(-6)}</td>
                <td>
                  {item.paymentDate ? new Date(item.paymentDate).toLocaleDateString() : "N/A"}
                </td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`btn btn-sm ${page === i + 1 ? 'btn-neutral' : 'btn-outline'}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
