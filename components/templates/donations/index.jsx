import React from 'react';
import HeaderImage from '../../templates/home/headerImages';
import Categories from '../../templates/home/categoriess';
import Donations from '../../templates/home/donationss';
import TrendingDonation from '../../templates/home/trendingDonations';
const Index = () => {
  return (
    <div className="space-y-4 col-span-full lg:col-span-2">
      <HeaderImage />
      <Categories />
      <TrendingDonation />
      <Donations />
    </div>
  );
};

export default Index;
