import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { auth } from '../../firebase/firebase.config';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
  const user = auth.currentUser;
  const email = user?.email;

  const [page, setPage] = useState(1);
  const limit = 5;

  // Auto-enable dark mode based on system preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const { data = {}, isLoading, isError } = useQuery({
    queryKey: ['payment-history', email, page],
    enabled: !!email,
    queryFn: async () => {
      const res = await fetch(
        `https://hr-pulse-server.vercel.app/payment-history?email=${email}&page=${page}&limit=${limit}`
      );
      if (!res.ok) throw new Error("Failed to fetch payment history");
      return res.json();
    },
  });

  if (isLoading) return <p className="text-center py-6 text-gray-600 dark:text-gray-300">Loading...</p>;
  if (isError) return <p className="text-center text-red-500 py-6">Failed to load payment history.</p>;

  const { payments = [], total = 0 } = data;
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="p-4 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>Dashboard | Payment History</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Payment History
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <tr>
              <th>Month</th>
              <th>Year</th>
              <th>Amount</th>
              <th>Transaction ID</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item, idx) => (
              <tr key={idx} className="text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">
                <td>{item.month}</td>
                <td>{item.year}</td>
                <td>৳{item.salary}</td>
                <td>{item.transactionId || item._id?.slice(-6)}</td>
                <td>{item.paymentDate ? new Date(item.paymentDate).toLocaleDateString() : "N/A"}</td>
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
              className={`btn btn-sm ${page === i + 1 ? 'btn-neutral' : 'btn-outline'} dark:btn-outline`}
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
