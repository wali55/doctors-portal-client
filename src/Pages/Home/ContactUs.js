import React from "react";
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <section style={{background: `url(${appointment})`}} className="py-8 mt-16">
      <div className="text-center my-6">
        <h4 className="text-xl text-secondary font-bold">Contact Us</h4>
        <h2 className="text-3xl text-white">Stay Connected with Us</h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="Email Address"
          class="input input-bordered w-1/2 mx-auto block mb-6"
        />
        <input
          type="Subject"
          placeholder="Type here"
          class="input input-bordered w-1/2 mx-auto block mb-6"
        />
        <textarea
          class="textarea textarea-bordered w-1/2 mx-auto block mb-6"
          placeholder="Your Message"
        ></textarea>
        <div className="flex justify-center">
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mb-4">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
