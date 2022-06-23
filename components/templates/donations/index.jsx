import React from 'react';
import HeaderImage from '../../templates/home/headerImages';
import Categories from '../../templates/home/categories';
import Donations from '../../templates/home/donations';
import TrendingDonation from '../../templates/home/donations/trendingDonation';
const Index = () => {
  return (
    <div className="space-y-4 mt-8 col-span-full lg:col-span-2">
      {/* <HeaderImage /> */}
      <div class="pt-2 relative mx-auto text-gray-600">
        <input
          class="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
      <Categories />
      <TrendingDonation />
      <Donations />
    </div>
  );
};

export default Index;
