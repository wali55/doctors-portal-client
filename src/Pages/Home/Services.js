import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Restoring minerals to tooth surfaces",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "Treat the tooth decay currently present",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Get an in-office bleaching at a dentist's office",
            img: whitening
        }
    ];
  return (
    <div className="mt-28">
      <div className="text-center">
        <h3 className="text-secondary font-bold text-xl">OUR SERVICES</h3>
        <h2 className="font-semibold text-4xl text-accent">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto mt-12">
        {
            services.map(service => <Service
            key={service._id}
            service={service}
            ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
