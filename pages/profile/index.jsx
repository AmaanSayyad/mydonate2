import React, { useState, useEffect, useContext } from 'react';

import Sidebar from '../../components/partials/profile/Sidebar';
import Header from '../../components/partials/profile/Header';
import WelcomeBanner from '../../components/partials/profile/dashboard/WelcomeBanner';
import StatisticCard from '../../components/partials/profile/dashboard/StatisticCard';
import { AuthContext } from '../../utils/AuthProvider';
import { ethers } from 'ethers';
function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const { signer, address } = useContext(AuthContext);
  const [donation, setdonation] = useState([]);
  useEffect(() => {
    if (address) {
      const myDonations = async () => {
        const donation = await signer.getMyDonations();
        const pendingDonation = donation.filter(
          (p) => p.donationstatus.isApproved === false
        );
        console.log('pending donatin', pendingDonation);
        setdonation(donation);
      };
      myDonations();
    }
  }, [signer]);

  // const getDoners = async = () => {
  //       donation.map((d) => {
  //         console.log(d);
  //         const doners = await signer.getDonersOfDonation(id);
  //         console.log(doners)
  //       });
  // }

  const getDoners = Promise.all(
    donation.map(function (donation) {
      let total = 0;
      // console.log(donation.id.toString());
      const doners = signer
        .getDonersOfDonation(donation.id.toString())
        .then((res) => {
          // console.log('doners,', res);
          res.map((tl) => {
            total =
              total + Number(ethers.utils.formatEther(tl.amount.toString()));
            // console.log(Number(ethers.utils.formatEther(tl.amount.toString())));
          });
        });

      console.log(total);
      // Promise.all(signer.getDonersOfDonation(innerPromiseArray.id.toString()));
      //  const doners = await signer.getDonersOfDonation(id);
      // return Promise.all();
    })
  );

  return (
    <>
      <div className="flex h-screen overflow-hidden dark:bg-gray-900 font-Montserrat">
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
                <StatisticCard
                  length={5}
                  icon="heart-outline"
                  title={'Donations'}
                  text="All donations Made"
                />
                <StatisticCard
                  length={5}
                  icon="wallet-outline"
                  title={'Donated'}
                  text="Total of amount donated"
                  unit={'ETH'}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Profile;
