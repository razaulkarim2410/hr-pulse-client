import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      return Swal.fire("Error", "Both fields are required", "error");
    }

    try {
      await axios.post(`${API}/messages`, formData);
      Swal.fire("Sent!", "Your message has been received.", "success");
      setFormData({ email: "", message: "" });
    } catch (err) {
      Swal.fire("Error", "Something went wrong", "error");
    }
  };
 
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">✉ Contact Us</h2>

      <div>
        <p><strong>Address:</strong> HRPulse HQ, Dhaka, Bangladesh</p>
        <p><strong>Email:</strong> support@hrpulse.com</p>
        <p><strong>Phone:</strong> +880 123 456 7890</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Your email"
          className="input input-bordered w-full"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          placeholder="Your message"
          className="textarea textarea-bordered w-full h-32"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        <button className="btn btn-primary w-full" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
