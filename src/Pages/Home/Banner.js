import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-chair">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-lg ml-5 rounded-lg shadow-2xl" alt=""/>
        <div>
          <h1 className="text-5xl font-bold text-accent">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Dentistry, also known as dental medicine and oral medicine, is the
            branch of medicine focused on the teeth, gums, and mouth.
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
