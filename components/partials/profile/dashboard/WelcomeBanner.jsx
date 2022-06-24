import React from 'react';
function WelcomeBanner({ type, message, address }) {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-500 to-green-300 py-10 px-10 rounded-md overflow-hidden mb-8 ">
      {/* Background illustration */}
      <div
        className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block"
        aria-hidden="true"
      ></div>
      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-200 font-bold mb-1">
          Welcome, Mends Albert👋
        </h1>
        <p className="text-white">
          {message || 'Here is what’s happening with your orders today:'}
        </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
