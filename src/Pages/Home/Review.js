import React from "react";

const Review = ({ review }) => {
  const { name, description, img, location } = review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="mb-4">{description}</p>
        <div className="flex items-center">
          <div className="avatar mr-3">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold">{name}</h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
