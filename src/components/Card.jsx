import React from "react";

const Card = ({ link, image, title }) => {
  return (
    <a href={link} className="card__data">
      <img
        src={image}
        alt="image"
        className="w-[100%] rounded-t-[19px] h-[65%] object-cover"
      />
      <h1 className="text-[2rem] w-[100%] text-blue">{title}</h1>
    </a>
  );
};

export default Card;
