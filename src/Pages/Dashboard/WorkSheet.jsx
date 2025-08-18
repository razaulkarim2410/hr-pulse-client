import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { auth } from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";

const WorkSheet = () => {
  const [task, setTask] = useState("Sales");
  const [hours, setHours] = useState("");
  const [date, setDate] = useState(new Date());
  const [editItem, setEditItem] = useState(null);

  const user = auth.currentUser;
  const email = user?.email;

  const { data: workData = [], refetch } = useQuery({
    queryKey: ["worksheets", email],
    enabled: !!email,
    queryFn: async () => {
      const res = await fetch(
        `https://hr-pulse-server.vercel.app/worksheets?email=${email}`
      );
      const data = await res.json();
      return data.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWork = {
      task,
      hours: Number(hours),
      date: date.toDateString(),
      email,
      name: user?.displayName || "",
    };
    const res = await fetch("https://hr-pulse-server.vercel.app/worksheets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWork),
    });
    if (res.ok) {
      Swal.fire("Success!", "Task added successfully", "success");
      setHours("");
      refetch();
    }
  };

  const handleDelete = async (id) => {
    await fetch(`https://hr-pulse-server.vercel.app/worksheets/${id}`, {
      method: "DELETE",
    });
    Swal.fire("Deleted!", "Task removed.", "success");
    refetch();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(
      `https://hr-pulse-server.vercel.app/worksheets/${editItem._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          task: editItem.task,
          hours: Number(editItem.hours),
          date: editItem.date,
        }),
      }
    );
    setEditItem(null);
    Swal.fire("Updated!", "Task updated successfully", "success");
    refetch();
  };

  return (
    <div className="p-4 w-11/12 mx-auto min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>Dashboard | Work Sheet</title>
      </Helmet>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Work Sheet
        </h2>
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 flex-wrap items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
      >
        <select
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="select bg-gray-50 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
        >
          <option>Sales</option>
          <option>Support</option>
          <option>Content</option>
          <option>Paper-work</option>
        </select>
        <input
          type="number"
          placeholder="Hours Worked"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="input bg-gray-50 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
          required
        />
        <DatePicker
          selected={date}
          onChange={setDate}
          className="input bg-gray-50 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
        />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto mt-6">
        <table className="table w-full bg-white dark:bg-gray-800 rounded-lg shadow">
          <thead>
            <tr className="text-gray-800 dark:text-gray-200">
              <th>Task</th>
              <th>Hours</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {workData.map((item) => (
              <tr
                key={item._id}
                className="text-gray-700 dark:text-gray-300 border-b dark:border-gray-700"
              >
                <td>{item.task}</td>
                <td>{item.hours}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    className="btn btn-xs btn-warning mr-2"
                    onClick={() => setEditItem(item)}
                  >
                    ✏️
                  </button>
                  <button
                    className="btn btn-xs hover:bg-red-100 hover:text-red-700 dark:hover:bg-gray-700"
                    onClick={() => handleDelete(item._id)}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editItem && (
        <div className="modal modal-open">
          <div className="modal-box bg-white dark:bg-gray-800 dark:text-gray-200">
            <h3 className="font-bold text-lg">Edit Task</h3>
            <form onSubmit={handleUpdate} className="space-y-2">
              <select
                value={editItem.task}
                onChange={(e) =>
                  setEditItem({ ...editItem, task: e.target.value })
                }
                className="select bg-gray-50 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
              >
                <option>Sales</option>
                <option>Support</option>
                <option>Content</option>
                <option>Paper-work</option>
              </select>
              <input
                type="number"
                value={editItem.hours}
                onChange={(e) =>
                  setEditItem({ ...editItem, hours: e.target.value })
                }
                className="input bg-gray-50 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
              />
              <DatePicker
                selected={new Date(editItem.date)}
                onChange={(date) =>
                  setEditItem({ ...editItem, date: date.toDateString() })
                }
                className="input bg-gray-50 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
              />
              <div className="modal-action">
                <button type="submit" className="btn btn-success">
                  Update
                </button>
                <button
                  onClick={() => setEditItem(null)}
                  className="btn bg-gray-300 dark:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkSheet;
