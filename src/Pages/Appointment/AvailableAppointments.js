import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://doctors-portal-server-v36k.onrender.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-16">
      <h4 className="text-secondary text-center text-xl">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto mt-12">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
