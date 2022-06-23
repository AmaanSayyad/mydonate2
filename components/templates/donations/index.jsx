import React from 'react';
import HeaderImage from '../../templates/home/headerImages';
import Categories from '../../templates/home/categories';
import Donations from '../../templates/home/donations';
import TrendingDonation from '../../templates/home/donations/trendingDonation';
const Index = () => {
  return (
    <div className="space-y-4 mt-8 col-span-full lg:col-span-2">
      {/* <HeaderImage /> */}

      <div
        className={`bg-gradient-to-r from-cyan-500 to-blue-500 mt-5 text-center w-full md:w-max items-center flex flex-row  px-6 py-3 rounded-full cursor-pointer text-white `}
      >
        <span>Filter</span>

        <ion-icon name="funnel-outline " class="text-2xl"></ion-icon>
      </div>

      <Categories />
      <TrendingDonation />
      <Donations />
    </div>
  );
};

export default Index;
