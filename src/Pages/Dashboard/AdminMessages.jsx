import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_API_URL || "https://hr-pulse-server.vercel.app";

  // Detect system dark mode and apply class
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

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

  if (loading)
    return (
      <div className="p-4 text-gray-700 dark:text-gray-200">Loading messages...</div>
    );

  return (
    <div className="p-6 max-w-5xl mx-auto transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Helmet>
        <title>Admin Message</title>
      </Helmet>

      <h2 className="text-3xl font-bold mb-6">📩 Contact Messages</h2>

      {messages.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No messages found.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="p-4 border rounded-md shadow-sm border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300"
            >
              <p>
                <strong>Email:</strong> {msg.email}
              </p>
              <p className="mt-2">
                <strong>Message:</strong> {msg.message}
              </p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
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
