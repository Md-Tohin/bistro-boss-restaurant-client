import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const totalAmount = cart.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (totalAmount && totalAmount > 0) {
      axiosSecure
        .post("/create-payment-intent", { amount: totalAmount })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalAmount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    //  comfirm payment
    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (paymentError) {
      console.log("[error]", paymentError);
      setError(paymentError.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      console.log("Payment Success!", paymentIntent);
      setTransactionId(paymentIntent.id);

      //  payment success
      const paymentInfo = {
        email: user?.email,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        transactionId: paymentIntent.id,
        date: new Date(), // date convert to use moment js
        cartIds: cart.map(item => item._id),
        menuIds: cart.map(item => item.menuId),
        paymentMethod: "Card",
        paymentStatus: paymentIntent.status,
        orderStatus: "pending",
      }

      const response = await axiosSecure.post("/orders/store", paymentInfo);
      console.log(response.data);
      if (response.data.orderResult?.insertedId) {
        refetch();
        navigate("/user/orders");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Order Payment Competed Successfully!",
          showConfirmButton: false,
          timer: 1500
        });
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }

    } else {
      console.log("Payment Failed!");
    }
  };

  return (
    <>
      {transactionId && (
        <div
          className="flex bg-green-100 rounded-lg p-4 text-sm text-green-700 mb-10"
          role="alert"
        >
          <svg
            className="w-5 h-5 inline mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"></path>
          </svg>
          <div>
            <span className="font-medium">Success ! </span> Payment Completed
            Successfully!.
          </div>
        </div>
      )}
      {error && (
        <div className="grid mb-5 w-full place-items-center overflow-x-scroll rounded-lg p-6 pt-0 lg:overflow-visible">
          <div
            role="alert"
            className="relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-red-500 text-white flex"
          >
            <div className=" mr-12">
              <p className="font-bold text-black">
                🌟 Error
                <span className="text-white">- {error}</span>
              </p>
            </div>
            <button
              className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 !absolute top-3 right-3"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-11/12 mx-auto">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="mx-auto w-1/5 mt-5">
          <button
            type="submit"
            className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            disabled={!stripe || !clientSecret}
          >
            Payment
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
