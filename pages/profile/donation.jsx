import React, { useState } from 'react';

import Sidebar from '../../components/partials/profile/Sidebar';
import Header from '../../components/partials/profile/Header';
import WelcomeBanner from '../../components/partials/profile/dashboard/WelcomeBanner';
import StatisticCard from '../../components/partials/profile/dashboard/StatisticCard';

function Donation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

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
              {/* <div className="grid grid-cols-12 gap-6">
                <p>donation 'add a new table component' </p>
              </div> */}
              <div>
                <div class="overflow-x-auto">
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
                          <div class="flex items-center">Amount</div>
                        </th>
                      </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-100">
                      <tr>
                        <td class="p-4 font-medium text-gray-900 whitespace-nowrap">
                          Donation to Africa...{' '}
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          lets get rid of malaria.....
                        </td>

                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          USD - 10,000.00 (23 ETH)
                        </td>
                      </tr>

                      <tr>
                        <td class="p-4 font-medium text-gray-900 whitespace-nowrap">
                          Donation to Africa...{' '}
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          lets get rid of malaria.....
                        </td>

                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          USD - 10,000.00 (23 ETH)
                        </td>
                      </tr>

                      <tr>
                        <td class="p-4 font-medium text-gray-900 whitespace-nowrap">
                          Donation to Africa...{' '}
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          lets get rid of malaria.....
                        </td>

                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          USD - 10,000.00 (23 ETH)
                        </td>
                      </tr>
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

export default Donation;
