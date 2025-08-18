import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const CheckoutForm = ({ payroll }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const { data } = await axios.post(
      "https://hr-pulse-server.vercel.app/create-payment-intent",
      {
        salary: payroll.salary,
      }
    );

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: payroll.name,
          email: payroll.email,
        },
      },
    });

    if (result.error) {
      Swal.fire("Error", result.error.message, "error");
      setProcessing(false);
    } else if (result.paymentIntent.status === "succeeded") {
      await axios.patch(
        `https://hr-pulse-server.vercel.app/payroll/${payroll._id}/pay`
      );

      Swal.fire("Success", "Payment complete", "success");
      navigate("/dashboard/payroll");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 rounded shadow-md transition-colors duration-300 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-xl font-semibold mb-4">
        Pay ৳{payroll.salary} to {payroll.name}
      </h2>
      <div className="border p-3 mb-4 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
        <CardElement />
      </div>
      <button
        type="submit"
        disabled={!stripe || processing}
        className="btn btn-primary w-full"
      >
        {processing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const EmployeePayment = () => {
  const { id } = useParams();
  const [payroll, setPayroll] = useState(null);

  // Auto-enable dark mode based on system preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    axios.get("https://hr-pulse-server.vercel.app/payroll").then((res) => {
      const found = res.data.find((p) => p._id === id);
      setPayroll(found);
    });
  }, [id]);

  if (!payroll) return <div className="text-center py-6">Loading payroll...</div>;

  return (
    <div className="min-h-screen p-4 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Dashboard | Employee Payment</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Employee Payment
      </h2>

      <Elements stripe={stripePromise}>
        <CheckoutForm payroll={payroll} />
      </Elements>
    </div>
  );
};

export default EmployeePayment;
