// src/Pages/Profile/Profile.jsx
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

// Use environment variable for API base
const API_BASE = import.meta.env.VITE_API_URL || "https://hr-pulse-server.vercel.app/";

const Profile = () => {
  const { user } = useContext(AuthContext); // user from Firebase Auth
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ mobile: "", address: "" });

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    axios
      .get(`${API_BASE}/users/${user.email}`)
      .then((res) => {
        setProfile(res.data);
        setFormData({
          mobile: res.data.mobile || "",
          address: res.data.address || "",
        });
        setError(null);
      })
      .catch((err) => {
        console.error("Profile fetch error:", err);
        setError("Failed to load profile. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    axios
      .put(`${API_BASE}/users/${user.email}`, formData)
      .then((res) => {
        setProfile(res.data);
        setEditing(false);
        setError(null);
      })
      .catch((err) => {
        console.error("Profile update error:", err);
        setError("Failed to save changes. Please try again.");
      });
  };

  if (loading) return <p className="text-center py-10">Loading profile...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
      <img
        src={profile.photo}
        alt="User"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold text-center">{profile.name}</h2>
      <p className="text-center text-gray-600">{profile.email}</p>
      <p className="text-center text-sm text-blue-500 font-semibold">
        Role: {profile.role}
      </p>

      {!editing ? (
        <>
          <p className="mt-4">📱 Mobile: {profile.mobile || "Not set"}</p>
          <p>🏠 Address: {profile.address || "Not set"}</p>
          <button
            onClick={() => setEditing(true)}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Edit Profile
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border p-2 mt-2 rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 mt-2 rounded"
          />
          <button
            onClick={handleSave}
            className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg"
          >
            Save
          </button>
          <button
            onClick={() => setEditing(false)}
            className="mt-2 w-full bg-gray-300 text-gray-700 py-2 rounded-lg"
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
