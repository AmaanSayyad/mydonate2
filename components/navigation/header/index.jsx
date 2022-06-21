import React, { useState, useEffect } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { MoonIcon } from '@heroicons/react/outline';

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

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && ' dark:bg-gray-900 backdrop-blur-sm bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-2">
        <div className="flex flex-row justify-between my-6 items-center space-x-0 md:space-x-20">
          <div className="flex flex-row items-center space-x-5">
            <Link href="/">
              <img
                src="/images/logo.svg"
                className="w-12 md:w-12 hidden md:block"
              />
            </Link>
            <span className="h-7 w-0.5 bg-gray-400"></span>
            <div className="flex flex-row space-x-7 text-lg text-gray-700 dark:text-gray-200">
              <p className="cursor-pointer hover:scale-125 transition-all">
                Home
              </p>
              <p className="cursor-pointer  hover:scale-125 transition-all">
                Donation
              </p>
              <p className="cursor-pointer  hover:scale-125 transition-all">
                About
              </p>
              <p className="cursor-pointer  hover:scale-125 transition-all">
                Contact
              </p>
            </div>
          </div>
          {/* <div className="bg-white dark:bg-black pt-4  rounded-b-3xl md:rounded-b-full  flex flex-row justify-evenly w-full">
            {navLinks.map((link) => (
              <span
                className="text-center group"
                onClick={
                  link.name === 'light'
                    ? () => setTheme('light')
                    : link.name === 'dark'
                    ? () => setTheme('dark')
                    : ''
                }
              >
                <ion-icon
                  name={link.icon}
                  class={`text-[1.65rem] cursor-pointer text-gray-600 ${
                    link.name === 'Settings'
                      ? 'hover:animate-spin'
                      : link.name === 'Donations'
                      ? 'hover:animate-pulse'
                      : ''
                  } dark:text-gray-200 pb-4 md:pb-0`}
                ></ion-icon>
                <p className="hidden md:block dark:text-gray-200 opacity-0 group-hover:opacity-100 duration-300 pb-2 ">
                  {link.name}
                </p>
              </span>
            ))}
          </div> */}
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
      </div>
    </header>
  );
}

export default Header;
