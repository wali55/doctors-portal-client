import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51MV6EOFKCXpjtOIkO48hupstHH8L5YpmjdZP1IiLnPuzIKtedXcsVOZ00f1hBQcUQCeBSfTphrWUQdD93WaPpz8t00pnNAtqJf"
);

const Payment = () => {
  const { id } = useParams();

  const url = `https://doctors-portal-server-v36k.onrender.com/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl mx-auto mt-10">
        <div class="card-body">
          <p>Hello, {appointment.patientName}</p>
          <h2 class="card-title">Please pay for: {appointment.treatment}</h2>
          <p>
            Your appointment:{" "}
            <span className="text-secondary font-semibold">
              {appointment.date}
            </span>{" "}
            at {appointment.slot}.
          </p>
          <p className="font-semibold">
            Please pay:{" "}
            <span className="text-secondary font-semibold">
              ${appointment.price}
            </span>
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-w-50 max-w-md shadow-2xl bg-base-100 mt-10 mx-auto">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
