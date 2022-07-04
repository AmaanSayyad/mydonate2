import React, { useState, useRef, useEffect, useContext } from 'react';
import Card from './card';
import { AuthContext } from '../../../../utils/AuthProvider';
import { numDaysBetween } from '../../../../lib/utilities';
import { ethers } from 'ethers';

const Index = () => {
  const { address, signer, contract } = useContext(AuthContext);
  let ethprice = 1276;
  const [donations, setdonations] = useState([]);
  useEffect(() => {
    if (address) {
      const loadDonations = async () => {
        const data = await signer.fetchAllDonationItems();
        console.log(data);
        setdonations(data);
      };
      loadDonations();
    }
  }, [signer]);

  return (
    <div>
      <p className="text-2xl py-4 dark:text-gray-100">Donations</p>
      <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-10 ">
        {donations.map((donation, index) => (
          <Card
            key={index}
            title={donation.title}
            description={donation.description}
            image={donation.hash}
            endDate={
              Math.round(
                numDaysBetween(Number(donation.endDate.toString()), new Date())
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
        ))}
        {/* <Card
          title="Australia Fire Outbreak"
          description={`Supporting get of australias' fire Outbreak`}
          image={`dimage3.jpg`}
        />
        <Card
          title="Australia Fire Outbreak"
          description={`Supporting get of australias' fire Outbreak`}
          image={`dimage4.jpg`}
        />
        <Card
          title="Australia Fire Outbreak"
          description={`Supporting get of australias' fire Outbreak`}
          image={`dimage5.jpg`}
        /> */}{' '}
      </div>
    </div>
  );
};

export default Index;
