import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../utils/AuthProvider';
import useDarkMode from '../../../hooks/useDarkMode';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MoonIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Header() {
  const router = useRouter();
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  const { address, disconnect, connect, web3Provider } =
    useContext(AuthContext);

  const [top, setTop] = useState(true);

  const [colorTheme, setTheme] = useDarkMode();
  // detect whether user has scrolled the page down by 10px

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
    { name: 'Home', href: '/', current: true },
    { name: 'Donations', href: '/donations', current: false },
    { name: 'About', href: '/about', current: false },
    // { name: 'Contact', href: '/contact', current: false },
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
      <Disclosure
        as="nav"
        className={`fixed w-full z-30 md:bg-opacity-90 py-4 transition duration-300 ease-in-out ${
          !top && ' dark:bg-gray-800 backdrop-blur-sm bg-white  shadow-lg'
        }`}
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              {/* <div className="max-w-7xl mx-auto px-2 sm:px-2"> */}
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
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {!web3Provider ? (
                        <button
                          onClick={connect}
                          className={`bg-gradient-to-r mb-3  flex flex-col justify-center mx-auto from-indigo-500 via-purple-500 to-pink-500 mt-5 text-center w-full md:w-max  px-6 py-1 items-center rounded-full cursor-pointer text-white `}
                        >
                          connect
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={disconnect}
                            className="bg-gradient-to-r active:outline-none active:border-none from-[#0469A1] via-[#0469A1]  to-[#0C9FF2]  text-center w-max   px-4 py-2  rounded-full cursor-pointer text-white"
                          >
                            Disconnect
                          </button>
                        </>
                      )}
                      {navigation.map((item) => (
                        <Link href={item.href}>
                          <p
                            key={item.name}
                            className={classNames(
                              router.pathname === item.href
                                ? 'bg-gray-900 dark:bg-white dark:text-gray-700  text-white'
                                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-md cursor-pointer font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </p>
                        </Link>
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
                      className="h-7 w-7 dark:text-gray-200"
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2  w-48 rounded-md shadow-lg py-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/profile">
                              <p
                                href="#"
                                className={classNames(
                                  active ? '' : '',
                                  'block px-4 py-2 text-sm cursor-pointer dark:text-gray-200 text-gray-700'
                                )}
                              >
                                Your Profile
                              </p>
                            </Link>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {!web3Provider ? (
                            <button
                              onClick={connect}
                              className={`bg-gradient-to-r mb-3  flex flex-col justify-center mx-auto from-indigo-500 via-purple-500 to-pink-500 mt-5 text-center w-full md:w-max  px-6 py-1 items-center rounded-full cursor-pointer text-white `}
                            >
                              connect
                            </button>
                          ) : (
                            <>
                              <button
                                onClick={disconnect}
                                className="bg-gradient-to-r active:outline-none active:border-none from-[#0469A1] via-[#0469A1]  to-[#0C9FF2]  text-center w-max   px-4 py-2  rounded-full cursor-pointer text-white"
                              >
                                Disconnect
                              </button>
                            </>
                          )}
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
                      router.pathname === item.href
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
