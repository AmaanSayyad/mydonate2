import React from "react";

const Card = ({ name, color, icon }) => {
  return (
    <div>
      <div
        className={`text-center ${color} md:p-2 p-3 md:px-8 md:py-8 rounded-2xl`}
      >
        <ion-icon
          name={icon}
          class="md:text-6xl text-5xl text-white "
        ></ion-icon>
        <h1 className="md:text-2xl  text-xl text-gray-100 ">{name}</h1>
      </div>
    </div>
  );
};

export default Card;