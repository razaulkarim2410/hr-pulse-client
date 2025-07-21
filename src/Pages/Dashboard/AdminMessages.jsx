import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${API}/messages`);
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <div className="p-4">Loading messages...</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Helmet>
        <title>Admin Message</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6">📩 Contact Messages</h2>

      {messages.length === 0 ? (
        <p className="text-gray-500">No messages found.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="p-4 border border-gray-300 rounded-md shadow-sm"
            >
              <p>
                <strong>Email:</strong> {msg.email}
              </p>
              <p className="mt-2">
                <strong>Message:</strong> {msg.message}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Sent: {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
