import React, { useState } from 'react';

import Sidebar from '../../components/partials/profile/Sidebar';
import Header from '../../components/partials/profile/Header';

import OrdersCards from '../../components/partials/profile/dashboard/StatisticCard';
import UsersCard from '../../components/partials/profile/dashboard/UsersCard';
import WelcomeBanner from '../../components/partials/profile/dashboard/WelcomeBanner';
import StatisticCard from '../../components/partials/profile/dashboard/StatisticCard';

function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden font-Montserrat">
        {/* Sidebar */}

        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner type="Admin" />
              {/* Cards */}
              <div className="sm:flex sm:justify-end sm:items-center mb-8">
                <div className="grid grid-flow-col sm:auto-cols-max justify-end sm:justify-end gap-2">
                  {/* button */}
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <StatisticCard
                  length={5}
                  icon="heart-dislike-outline"
                  title={'Pending Funds'}
                  text="All fund to be approved"
                />
                {/* <OrdersCards length={7} />
                <OrdersCards length={5} />
                <UsersCard users={10} /> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Profile;
