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

    const { data } = await axios.post("http://localhost:5000/create-payment-intent", {
      salary: payroll.salary,
    });

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
      // ✅ Mark payroll as paid in backend
      await axios.patch(`http://localhost:5000/payroll/${payroll._id}/pay`);

      Swal.fire("Success", "Payment complete", "success");
      navigate("/dashboard/payroll");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <Helmet>
        <title>Dashboard | Employee Payment</title>
      </Helmet>
      <h2 className="text-xl font-semibold mb-4">Pay ৳{payroll.salary} to {payroll.name}</h2>
      <CardElement className="border p-3 mb-4 rounded" />
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

  useEffect(() => {
    axios.get("http://localhost:5000/payroll").then((res) => {
      const found = res.data.find((p) => p._id === id);
      setPayroll(found);
    });
  }, [id]);

  if (!payroll) return <div>Loading payroll...</div>;

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm payroll={payroll} />
    </Elements>
  );
};

export default EmployeePayment;
