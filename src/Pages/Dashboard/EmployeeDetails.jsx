import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label
} from 'recharts';
import axios from 'axios';

const EmployeeDetails = () => {
  const { slug } = useParams();
  const [user, setUser] = useState(null);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/employee-salary-history/${slug}`);

        if (!res.data?.user) {
          setError('User not found');
          return;
        }

        setUser(res.data.user);

        const data = Array.isArray(res.data.payments)
          ? res.data.payments.map(p => ({
              monthYear: `${p.month}/${p.year}`,
              salary: p.salary,
            }))
          : [];

        setPayments(data);
      } catch (err) {
        console.error('Error fetching employee details:', err);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [slug]);

  if (loading) return <p className="text-center py-6">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-6">{error}</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{user.name}</h2>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={user.photo || 'https://i.ibb.co/HC5wMX9/avatar.png'}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <p><strong>Designation:</strong> {user.designation}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>

      <h3 className="text-xl mb-2">Salary History</h3>

      {payments.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={payments} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="monthYear">
              <Label value="Month / Year" offset={-10} position="insideBottom" />
            </XAxis>
            <YAxis>
              <Label value="Salary (৳)" angle={-90} position="insideLeft" />
            </YAxis>
            <Tooltip />
            <Bar dataKey="salary" fill="#ec4899" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-500">No salary history found.</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
