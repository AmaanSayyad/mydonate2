import React, { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../utils/AuthProvider';
import { ethers } from 'ethers';
import millify from 'millify';

const Index = () => {
  const { address, signer, contract } = useContext(AuthContext);
  const [doners, setdoners] = useState(0);
  const [amountraised, setamountraised] = useState(0);
  const [users, setusers] = useState(0);

  async function loadDonations() {
    const allDoners = (await contract?.getAllDoners()) || 0;
    const amountRaised = (await contract?.getAmountRaised()) || 0;
    const alluser = (await contract?.getAllUsers()) || 0;
    setdoners(allDoners.toString());
    setamountraised(ethers.utils.formatEther(amountRaised.toString()));
    setusers(alluser.toString());
  }
  useEffect(() => {
    // if (address) {
    //   const loadDonations = async () => {
    //     const allDoners = await contract?.getAllDoners();
    //     const amountRaised = await contract?.getAmountRaised();
    //     const alluser = await contract?.getAllUsers();
    //     setdoners(allDoners.toString());
    //     setamountraised(ethers.utils.formatEther(amountRaised.toString()));
    //     setusers(alluser.toString());
    //     // console.log('allDoners', allDoners.toString());
    //     // console.log(
    //     //   'amount raised',
    //     //   ethers.utils.formatEther(amountRaised.toString())
    //     // );
    //     // console.log('allusers', alluser.toString());
    //     // console.log(data);
    //     // setdonations(data);
    //   };
    loadDonations();
    // }
  }, [contract]);

  return (
    <div className="relative grid grid-cols-1 gap-9 md:flex md:flex-row md:justify-around  p-4 px-10 bg-[#ffffff] dark:bg-[#131212] dark:text-gray-200 rounded-2xl">
      <div className="text-center">
        <ion-icon
          name="heart-circle-outline"
          class="text-5xl text-[#E338C8] "
        ></ion-icon>
        <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
          {millify(parseInt(users)) || 0}
          {/* {millify()} */}
          {'+'}
        </h1>
        <p className="text-xl ">Fundarisers</p>
      </div>

      <div className="text-center">
        <ion-icon
          name="person-add-outline"
          class="text-5xl text-[#E338C8] "
        ></ion-icon>
        <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
          {millify(parseInt(doners)) || 0}
          {'+ '}
        </h1>
        <p className="text-xl ">People donated</p>
      </div>

      <div className="text-center">
        <ion-icon
          name="wallet-outline"
          class="text-5xl text-[#E338C8] "
        ></ion-icon>
        <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
          {millify(parseInt(amountraised)) || 0}ETH+
        </h1>
        <p className="text-xl ">Amount raised</p>
      </div>
    </div>
  );
};

export default Index;
