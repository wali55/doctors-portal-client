import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className="flex w-10/12 mx-auto justify-center items-center lg:p-0 sm:p-7">
        <div className="flex-1 hidden lg:block">
          <img className="mt-[-120px]" src={doctor} alt="" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-secondary font-bold mb-4">Appointment</h3>
          <h2 className="text-3xl font-semibold text-white mb-4">
            Make an Appointment Today
          </h2>
          <p className="text-white mb-4">
            Dentistry, also known as dental medicine and oral medicine, is the
            branch of medicine focused on the teeth, gums, and mouth. It
            consists of the study, diagnosis, prevention, management, and
            treatment of diseases, disorders, and conditions of the mouth, most
            commonly focused on dentition as well as the oral mucosa.
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mb-4">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
