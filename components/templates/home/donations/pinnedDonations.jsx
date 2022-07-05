import React, { useState, useRef, useEffect, useContext } from 'react';
import Card from './card';
import { AuthContext } from '../../../../utils/AuthProvider';
import { numDaysBetween, truncateString } from '../../../../lib/utilities';
import { ethers } from 'ethers';

const pinnedDonations = () => {
  const { address, signer, contract } = useContext(AuthContext);
  let ethprice = 1276;
  const [donations, setdonations] = useState([]);
  useEffect(() => {
    if (address) {
      const pinnedDonations = async () => {
        const data = await signer.fetchAllDonationItems();
        const pinned = data.filter((p) => p.donationstatus.isPinned === true);
        // console.log('pinned donation', pinned);
        setdonations(pinned);
      };
      pinnedDonations();
    }
  }, [signer]);

  return (
    <div className="relative flex flex-col space-y-1 ">
      <div className="flex flex-row items-center">
        <ion-icon
          name="pin-outline"
          class="text-3xl dark:text-white"
        ></ion-icon>
        <p className="text-2xl py-4 dark:text-gray-100">Pinned Donations</p>
      </div>

      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar snap-x">
        <div className="flex flex-nowrap mt-5">
          {donations.map((donation, index) => (
            <div class="inline-block  px-3 snap-center">
              <Card
                key={index}
                id={donation.id.toString()}
                title={donation.title}
                description={truncateString(donation.description, 30)}
                image={donation.hash}
                endDate={
                  Math.round(
                    numDaysBetween(
                      Number(donation.endDate.toString()),
                      new Date()
                    )
                  ) < 1
                    ? 'Donation Ended'
                    : Math.round(
                        numDaysBetween(
                          Number(donation.endDate.toString()),
                          new Date()
                        )
                      ) + ' Days Left'
                }
                targetedAmount={(
                  Number(
                    ethers.utils.formatEther(donation.targetedAmount.toString())
                  ) * ethprice
                ).toLocaleString()}
                country={donation.user.country}
              />
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
      <style></style>
    </div>
  );
};

export default pinnedDonations;
