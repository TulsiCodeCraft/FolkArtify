import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  const handlePayment = async () => {
    // Initialize Razorpay payment
    const options = {
      key: "rzp_test_EQoLmVxOwQlA1j",
      amount: order.amount,
      currency: "INR",
      name: "Indecraft",
      description: "Payment for your order",
      order_id: order.id,
      handler: function (response) {
        alert("Payment Successful");
        navigate('/success');
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#3399cc"
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="order-summary">
          {/* Add order summary here */}
        </div>
        <div className="payment-details">
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          <button 
            onClick={handlePayment}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;