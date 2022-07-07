import React, { useState, useEffect, useContext } from 'react';

import Sidebar from '../../components/partials/profile/Sidebar';
import Header from '../../components/partials/profile/Header';
import WelcomeBanner from '../../components/partials/profile/dashboard/WelcomeBanner';
import { AuthContext } from '../../utils/AuthProvider';
import { truncateString } from '../../lib/utilities';
import { ethers } from 'ethers';

function Fund() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  let ethprice = 1270;
  const { signer, address } = useContext(AuthContext);
  const [donation, setdonation] = useState([]);
  const [status, setstatus] = useState('');

  useEffect(() => {
    if (address) {
      const myDonations = async () => {
        const donation = await signer.getMyDonations();
        // const pendingDonation = donation.filter(
        //   (p) => p.donationstatus.isApproved === false
        // );
        // console.log('pending donatin', pendingDonation);
        setdonation(donation);
      };
      myDonations();
    }
  }, [signer]);
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

              <div>
                <div class="overflow-x-auto">
                  <h2 className="font-semibold text-slate-800">All Funds</h2>

                  <div className="w-max md:w-max ">
                    <div className="relative">
                      <select
                        onChange={(e) => {
                          setstatus(e.target.value);
                        }}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                      >
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="rejected">Rejected</option>
                        <option value="approved">Approved</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <table class="min-w-full text-sm divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div class="flex items-center">Title</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div class="flex items-center">Description</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div class="flex items-center">Status</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div class="flex items-center">Target</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div class="flex items-center">Coutry</div>
                        </th>
                      </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-100">
                      {donation
                        .filter((p) =>
                          status === 'pending'
                            ? p.donationstatus.isApproved === false
                            : status === 'rejected'
                            ? p.donationstatus.rejected === true
                            : status === 'approved'
                            ? p.donationstatus.isApproved === true
                            : donation
                        )
                        .map((donationItem) => (
                          <tr>
                            <td class="p-4 font-medium text-gray-900 whitespace-nowrap">
                              {donationItem.title}{' '}
                            </td>
                            <td class="p-4 text-gray-700 whitespace-nowrap">
                              {truncateString(
                                donationItem.description.toString(),
                                20
                              )}{' '}
                            </td>
                            <td class="p-4 text-gray-700 whitespace-nowrap">
                              {donationItem.donationstatus.isApproved ===
                              false ? (
                                <strong class="bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded text-xs font-medium">
                                  Pending
                                </strong>
                              ) : donationItem.donationstatus.isApproved ===
                                true ? (
                                <strong class="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                                  Pending
                                </strong>
                              ) : donationItem.donationstatus.rejected ===
                                true ? (
                                <strong class="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                                  Rejected
                                </strong>
                              ) : (
                                ''
                              )}
                            </td>
                            <td class="p-4 text-gray-700 whitespace-nowrap">
                              {ethers.utils.formatEther(
                                donationItem.targetedAmount.toString()
                              )}{' '}
                              {'ETH'}
                            </td>
                            <td class="p-4 text-gray-700 whitespace-nowrap">
                              {donationItem.user.country}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Fund;
