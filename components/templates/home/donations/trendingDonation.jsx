import React from 'react';
import GradientButton from '../../../utility/bottons/gradientButton';

const TrendingDonation = () => {
  return (
    <div className="relative flex flex-col space-y-1 ">
      <p className="text-2xl py-4 dark:text-gray-100">Trending Donations</p>
      <div className="flex md:flex-row flex-col space-x-0 md:space-x-8 w-full">
        <div class="w-full md:w-6/12 h-full">
          <img
            src="/images/dimage.jpeg"
            className="object-cover h-96 rounded-2xl w-full"
          />
        </div>
        <div className="py-2">
          <h2 className="text-3xl font-semibold dark:text-gray-200">EDUCARE</h2>
          <p className="text-2xl dark:text-gray-100">
            Supporting Education in Africa
          </p>
          <div className="flex flex-row space-x-2 items-center">
            <ion-icon
              name="time-outline"
              class="text-2xl dark:text-gray-100"
            ></ion-icon>
            <p className="text-xl dark:text-gray-100">15 days more</p>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <ion-icon
              name="wallet-outline"
              class="text-2xl dark:text-gray-100"
            ></ion-icon>
            <p className="text-xl dark:text-gray-200">
              $1,000.00 / $10,000,000.00
            </p>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <ion-icon
              name="earth-outline"
              class="text-2xl dark:text-gray-200"
            ></ion-icon>
            <p className="text-xl dark:text-gray-100">Ghana</p>
          </div>

          <GradientButton title="View details" />
        </div>
      </div>
    </div>
  );
};

export default TrendingDonation;
