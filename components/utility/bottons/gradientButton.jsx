import React from 'react';

const GradientButton = ({ title, style = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-5 text-center w-full md:w-max  px-6 py-3 rounded-full cursor-pointer text-white ${style}`}
    >
      {title}
    </button>
  );
};

export default GradientButton;
