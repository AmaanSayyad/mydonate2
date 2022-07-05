import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../utils/AuthProvider';
import { ethers } from 'ethers';
import { truncateString } from '../../lib/utilities';
import Modal from '../utility/modal';
function Home({ id }) {
  const [modal, setModal] = useState(false);

  const { signer, address } = useContext(AuthContext);
  const [donation_, setdonation_] = useState({
    donationsRaised: 0,
    targetedAmount: 0,
    description: '',
  });
  let ethprice = 1276;

  useEffect(() => {
    if (address) {
      const donation = async () => {
        const data = await signer.getDonation(id);
        //  setstatus(data);
        setdonation_(data);
        console.log(data);
      };
      donation();
    }
  }, [signer]);

  return (
    <div className="space-y-4 col-span-full mt-5 lg:col-span-2">
      <section>
        <div class="relative max-w-screen-xl px-2 py-8 mx-auto">
          <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
              <div class="w-full h-full">
                <img
                  alt="Mobile Phone Stand"
                  class="object-cover rounded-xl w-full h-96"
                  src={donation_.hash}
                />
              </div>
            </div>

            <div class="sticky top-0">
              <div class="flex justify-between">
                <div class="max-w-[35ch]">
                  <h1 class="text-2xl font-bold dark:text-gray-300">
                    {donation_.title}
                  </h1>

                  <div className="flex flex-row items-center space-x-2">
                    <ion-icon
                      name="cash-outline"
                      class="text-xl dark:text-gray-200"
                    ></ion-icon>
                    <p class="text-lg font-bold dark:text-gray-200">
                      {/* $119.99/$20,000.00 targetedAmount= */}
                      {(
                        Number(
                          ethers.utils.formatEther(
                            donation_.donationsRaised.toString()
                          )
                        ) * ethprice
                      ).toLocaleString()}{' '}
                      /{' '}
                      {(
                        Number(
                          ethers.utils.formatEther(
                            donation_.targetedAmount.toString()
                          )
                        ) * ethprice
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <details class="relative mt-4 group">
                <summary class="block">
                  <div>
                    <div class="prose max-w-none group-open:hidden">
                      <p className="dark:text-gray-200">
                        {truncateString(donation_.description.toString(), 60)}
                      </p>
                    </div>

                    <span class="mt-4  dark:text-gray-200 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Read More
                    </span>
                  </div>
                </summary>

                <div class="pb-6 prose max-w-none dark:text-gray-300">
                  {donation_.description}
                </div>
              </details>

              <div class="flex justify-between ">
                <span class="text-base font-medium text-blue-700 dark:text-white">
                  Donations
                </span>
                <span class="text-sm font-medium text-blue-700 dark:text-white">
                  45%
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div class="bg-blue-600 h-4 rounded-full w-[45%]"></div>
              </div>

              <div class="flex justify-between py-4 ">
                <span class="text-base font-medium text-gray-700 dark:text-white">
                  50+ Donated
                </span>
                <div className=" bg-blue-600 py-1 px-3 text-white text-lg rounded-full overflow-hidden mb-3 ">
                  5 days Left{' '}
                </div>
              </div>

              <button
                onClick={() => {
                  setModal(true);
                }}
                className="inline-block -mt-10 px-8 py-3 text-lg font-medium text-white transition  rounded-full w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 focus:outline-none focus:ring"
              >
                Donate
              </button>

              <details class="relative mt-4 group">
                <div class="pb-6 prose max-w-none dark:text-gray-300">
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-sm divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th class=" font-medium text-left text-gray-900 whitespace-nowrap">
                            <div class="flex items-center">Address</div>
                          </th>
                          <th class=" font-medium text-left text-gray-900 whitespace-nowrap">
                            <div class="flex items-center">Amount</div>
                          </th>
                          <th class="font-medium text-left text-gray-900 whitespace-nowrap">
                            <div class="flex items-center">Date</div>
                          </th>
                        </tr>
                      </thead>

                      <tbody class="divide-y divide-gray-100">
                        <tr>
                          <td class="py-2 text-gray-700 whitespace-nowrap">
                            <strong class="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                              0x000000
                            </strong>
                          </td>
                          <td class=" text-gray-700 whitespace-nowrap">4ETH</td>
                          <td class=" text-gray-700 whitespace-nowrap">
                            26th June, 2022
                          </td>
                        </tr>

                        <tr>
                          <td class="py-2 text-gray-700 whitespace-nowrap">
                            <strong class="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                              0x000000
                            </strong>
                          </td>
                          <td class=" text-gray-700 whitespace-nowrap">4ETH</td>
                          <td class=" text-gray-700 whitespace-nowrap">
                            26th June, 2022
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <summary class="block">
                  <div>
                    <span class="mt-4  dark:text-gray-200 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      View Doners
                    </span>
                  </div>
                </summary>
              </details>
            </div>
          </div>
        </div>
      </section>

      <Modal
        state={modal}
        onClick={() => {
          setModal(false);
        }}
      >
        <p className="text-lg dark:text-gray-200 py-5">Filter Donations</p>
        <div className="space-y-4">
          <div
            onClick={() => {
              // tipDonation(props.donationId, '5');
            }}
            className="text-center cursor-pointer border-[1px] border-opacity-30 text-lg border-gray-600 rounded-lg w-full py-2 bg-green-300 text-gray-700 "
          >
            5 ETH
          </div>
          <div
            onClick={() => {
              // tipDonation(props.donationId, '10');
            }}
            className="text-center cursor-pointer border-[1px] border-opacity-30 text-lg border-gray-600 rounded-lg w-full py-2 bg-blue-300 text-gray-700 "
          >
            10 ETH
          </div>
          <div
            onClick={() => {
              // tipDonation(props.donationId, '15');
            }}
            className="text-center cursor-pointer border-[1px] border-opacity-30 text-lg border-gray-600 rounded-lg w-full py-2 bg-purple-300 text-gray-700 "
          >
            15 ETH
          </div>
          <div className="">
            <label
              htmlFor="company-website"
              className="block text-md font-medium dark:text-gray-200 text-gray-700"
            >
              Input Manually
            </label>

            <input
              type="number"
              // value={amount}
              onChange={(e) => {
                // setamount(e.target.value);
              }}
              placeholder="Enter amount manually"
              class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button
            type="button"
            className="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700   sm:w-full sm:text-sm"
          >
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
