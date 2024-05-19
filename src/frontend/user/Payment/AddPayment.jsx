import { FaMoneyBill } from "react-icons/fa";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const AddPayment = () => {
    // const CLIENT_SECRET = import.meta.env.VITE_STRIPE_CLIENT_SECRET;
    const options = {
        // passing the client secret obtained from the server
        // clientSecret: `{{sk_`test_51NM0bKLpsh2LrDYyA0eDOV0xXpEZ6FSyvGK8EkNHXQmA5CeuaZ85KeyX2mDpF7TRY0W1y8Lc6lgvn9vUr4bd6bRH00q8E1NpHH}}}`,
      };
    return (
        <>
      <div className="flex  items-center text-stone-700 py-4 mb-2">
        <span className="font-bold text-2xl">
          <FaMoneyBill className="text-4xl" />
        </span>
        <span className="font-bold text-3xl ms-2"> Payment </span>
      </div>
      <div className="py-4 pb-8 px-5 shadow-lg"> 
        <div className="mt-8">
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
        </div>
      </div>
    </>
    );
};

export default AddPayment;