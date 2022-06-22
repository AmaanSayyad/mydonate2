import React, { useState, useEffect } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { MoonIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import GradientButton from '../../utility/bottons/gradientButton';
// import { Icon } from "web3uikit";
function Header() {
  const router = useRouter();
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState('');

  const [colorTheme, setTheme] = useDarkMode();
  // detect whether user has scrolled the page down by 10px
  console.log(colorTheme);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const navLinks = [
    // { icon: 'heart-half-outline', link: '/', name: 'Donations' },
    { icon: 'home-outline', link: '/', name: 'Home' },
    { icon: 'person-outline', link: '/', name: 'Profile' },
    { icon: 'search-outline', link: '/', name: 'Search' },
    { icon: 'settings-outline', link: '/', name: 'Settings' },
    { icon: 'moon-outline', name: colorTheme },
  ];

  const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Donations', href: '#', current: false },
    { name: 'About', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && ' dark:bg-gray-900 backdrop-blur-sm bg-white'
      }`}
    >
      {/* <div className="max-w-7xl mx-auto px-2 sm:px-2">
        <div className="flex flex-row justify-between my-6 items-center space-x-0 md:space-x-20">
          <div className="flex flex-row items-center space-x-5">
            <Link href="/">
              <img
                src="/images/logo.svg"
                className="w-12 md:w-12 hidden md:block"
              />
            </Link>
            <p className="text-xl font-bold text-gray-600 dark:text-gray-200">
              MyDonate
            </p>
            <span className="h-7 w-0.5 bg-gray-400"></span>
            <div className="flex flex-row space-x-7 text-lg text-gray-700 dark:text-gray-200">
              <p className="cursor-pointer hover:scale-125 transition-all">
                Home
              </p>
              <p className="cursor-pointer  hover:scale-125 transition-all">
                Donations
              </p>
              <p className="cursor-pointer  hover:scale-125 transition-all">
                About
              </p>
              <p className="cursor-pointer  hover:scale-125 transition-all">
                Contact
              </p>
            </div>
          </div>
     
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center space-x-3 mr-4">
              <span>
                <ion-icon
                  name="search-outline"
                  class="text-2xl dark:text-gray-300"
                ></ion-icon>
              </span>
              <span>
                <ion-icon
                  name="person-outline"
                  class="text-2xl dark:text-gray-300"
                ></ion-icon>
              </span>
              <span
                onClick={
                  colorTheme === 'light'
                    ? () => setTheme('light')
                    : colorTheme === 'dark'
                    ? () => setTheme('dark')
                    : ''
                }
              >
                <ion-icon
                  name="moon-outline"
                  class="text-xl dark:text-gray-300"
                ></ion-icon>
              </span>
              <div className="relative mt-1">
                <span className="absolute -top-3 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                <ion-icon
                  name="notifications-outline"
                  class="text-2xl dark:text-gray-300"
                ></ion-icon>
              </div>
            </div>
            <div
              className="border-4 broder-gray-600 px-4 hidden md:block md:px-6 text-gray-800 md:py-2 py-2 rounded-full dark:text-gray-200 cursor-pointer"
              onClick={() => {
                connect();
              }}
            >
              Connect
            </div>
          </div>
        </div>
      </div> */}
      <Disclosure
        as="nav"
        className={`fixed w-full z-30 md:bg-opacity-90 py-4 transition duration-300 ease-in-out ${
          !top && ' dark:bg-gray-800 backdrop-blur-sm bg-white  shadow-lg'
        }`}
        // className="bg-white py-4 dark:bg-gray-800"
      >
        {({ open }) => (
          <>
            {/* <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"> */}
            <div className="max-w-7xl mx-auto px-2 sm:px-2">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex  items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center space-x-4">
                    <img
                      className="block  w-9 "
                      src="/images/logo.svg"
                      alt="Workflow"
                    />
                    {/* <p className="text-xl font-bold text-gray-600 dark:text-gray-200">
                      MyDonate
                    </p>{' '} */}
                    {/* <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      alt="Workflow"
                    /> */}
                    {/* <Link href="/"> */}
                    {/* <Link href="/">
                      <img
                        src="/images/logo.svg"
                        className="w-12 md:w-12 hidden md:block"
                      />
                    </Link>
                    <p className="text-xl font-bold text-gray-600 dark:text-gray-200">
                      MyDonate
                    </p> */}
                    {/* </Link> */}
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 dark:bg-white dark:text-gray-700  text-white'
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-md font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    onClick={
                      colorTheme === 'light'
                        ? () => setTheme('light')
                        : colorTheme === 'dark'
                        ? () => setTheme('dark')
                        : ''
                    }
                    type="button"
                    className=" p-1 rounded-full text-gray-600 "
                  >
                    <MoonIcon
                      className="h-8 w-8 dark:text-gray-200"
                      aria-hidden="true"
                    />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="/images/profile3.jpg"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 dark:bg-gray-700 dark:border-gray-600 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          <button
                            className={`bg-gradient-to-r mb-3 flex flex-col justify-center mx-auto from-indigo-500 via-purple-500 to-pink-500 mt-5 text-center w-full md:w-max  px-6 py-1 items-center rounded-full cursor-pointer text-white `}
                          >
                            connect
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'hover:bg-gray-700 text-gray-700 dark:text-gray-200 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}

export default Header;
