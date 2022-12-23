import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import background from '../../assets/images/bg.png';

const AppointmentBanner = ({date, setDate}) => {
    
  return (
    <div style={{background: `url(${background})`}} className="hero min-h-screen">
      <div className="hero-content flex w-9/12 justify-around">
        <div>
          <DayPicker 
          mode="single"
          selected={date}
          onSelect={setDate}
          />
        </div>
        <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt="" />
      </div>
    </div>
  );
};

export default AppointmentBanner;
