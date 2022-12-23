import React from "react";

const InfoCard = ({ img, cardTitle, cardDes, bgColor }) => {
  return (
    <div className={`card lg:card-side shadow-xl p-5 ${bgColor}`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDes}</p>
      </div>
    </div>
  );
};

export default InfoCard;
