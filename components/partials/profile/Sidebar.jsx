import { ClipboardListIcon, ViewGridIcon } from '@heroicons/react/outline';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const router = useRouter();
  const trigger = useRef(null);
  const sidebar = useRef(null);

  console.log(router.pathname);
  let storedSidebarExpanded;

  if (typeof window !== 'undefined') {
    storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  }
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );
  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    console.log(localStorage.getItem('sidebar-expanded'));
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);
  // }

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}

      <div
        className={`fixed inset-0  bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-24 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0  bg-white border-r-2 border-gray-300 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 pl-2 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-white hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <div className="flex flex-col  space-y-4">
            <img src="/images/logo.svg" class="w-9" />
            {/* <p className="text-white text-xl">myDonate</p> */}
          </div>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <ul className="mt-3">
              <li
                className={`px-2 py-2 cursor-pointer rounded-sm mb-0.5 last:mb-0 `}
              >
                <Link href={'/dashboard/customer/'}>
                  <div className={`flex items-center`}>
                    <ion-icon
                      name="bar-chart-outline"
                      class="text-gray-700 text-3xl"
                    ></ion-icon>
                    <span className="text-lg font-medium ml-3 text-gray-700 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Summary
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={`px-2 py-2 cursor-pointer rounded-sm mb-0.5 last:mb-0 `}
              >
                <Link
                  href={'/dashboard/customer/'}
                  // className={`block text-slate-200 hover:text-white truncate transition duration-150 ${"hover:text-slate-200"}`}
                >
                  <div className={`flex items-center`}>
                    <ion-icon
                      name="wallet-outline"
                      class="text-gray-700 text-3xl"
                    ></ion-icon>
                    <span className="text-lg font-medium ml-3 text-gray-700 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      My funds
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={`px-2 py-2 cursor-pointer rounded-sm mb-0.5 last:mb-0 `}
              >
                <Link
                  href={'/dashboard/customer/'}
                  // className={`block text-slate-200 hover:text-white truncate transition duration-150 ${"hover:text-slate-200"}`}
                >
                  <div className={`flex items-center`}>
                    <ion-icon
                      name="heart-outline"
                      class="text-gray-700 text-3xl"
                    ></ion-icon>
                    <span className="text-lg font-medium ml-3 text-gray-700 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      My Donations
                    </span>
                  </div>
                </Link>
              </li>
              {/* Analytics */}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-gray-600"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-gray-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
