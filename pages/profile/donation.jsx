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
                          <div class="flex items-center">Status</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div class="flex items-center">Target</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div class="flex items-center">Scope</div>
                        </th>
                      </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-100">
                      <tr>
                        <td class="p-4 font-medium text-gray-900 whitespace-nowrap">
                          Title{' '}
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          john.doe@email.com
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          <strong class="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                            Cancelled
                          </strong>
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          (+44) 2198 450650
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          SHOP-1268-8910
                        </td>
                      </tr>

                      <tr>
                        <td class="p-4 font-medium whitespace-nowrap">
                          Jane Doe
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          jane.doe@email.com
                        </td>
                        <td class="p-4 whitespace-nowrap">
                          <strong class="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                            Paid
                          </strong>
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          (+44) 1928 450650
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          SHOP-4235-1526
                        </td>
                      </tr>

                      <tr>
                        <td class="p-4 font-medium whitespace-nowrap">
                          Gary Barlow
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          gary.barlow@email.com
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          <strong class="bg-amber-100 text-amber-700 px-3 py-1.5 rounded text-xs font-medium">
                            Partially Refunded
                          </strong>
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          (+44) 2819 450650
                        </td>
                        <td class="p-4 text-gray-700 whitespace-nowrap">
                          SHOP-1573-2468
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
