import React from 'react';
import StasCard from '../templates/home/statsCard';
import HeaderImage from '../templates/home/headerImages';
import Categories from '../templates/home/categories';
import Donations from '../templates/home/donations';
import TrendingDonation from '../templates/home/donations/trendingDonation';
function Home() {
  return (
    <div className="space-y-4 col-span-full lg:col-span-2">
      <HeaderImage />
      <StasCard />
      <Categories />
      <TrendingDonation />
      <Donations />
    </div>
  );
}

export default Home;
