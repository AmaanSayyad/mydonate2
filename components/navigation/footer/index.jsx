import React from 'react';
// import { div } from "react-router-dom";
import Link from 'next/link';
function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6 sm:px-6">
        {/* Top area: Blocks */}
        <div className="flex flex-col md:flex-row  justify-between">
          {/* 1st block */}
          <div className="">
            <div className="mb-2">
              {/* Logo */}
              <Link href="/">
                <div className="inline-block" aria-label="Cruip">
                  <img src="/images/logo.svg" className="w-24" />
                </div>
              </Link>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-200">
              <Link href="/terms">
                <div
                  href="#"
                  className=" cursor-pointer text-gray-600 dark:text-gray-200 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
                >
                  Terms and conditions
                </div>
              </Link>

              <Link href="/policy">
                <div
                  href="#"
                  className=" cursor-pointer dark:text-gray-200 text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </div>
              </Link>
            </div>
          </div>

          {/* 4th block */}
          <div className="">
            <h6 className="text-gray-800 font-medium mb-2 dark:text-gray-400">
              Company
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/">
                  <div
                    href="#"
                    className="cursor-pointer text-gray-600 dark:text-gray-200 hover:text-gray-900 transition duration-150 ease-in-out"
                  >
                    Home
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="">
            <h6 className="text-gray-800 font-medium mb-2 dark:text-gray-400">
              About us
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/about">
                  <div
                    href="#"
                    className="cursor-pointer text-gray-600 dark:text-gray-200 hover:text-gray-900 transition duration-150 ease-in-out"
                  >
                    about
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h6 className="text-gray-800 font-medium mb-2 dark:text-gray-400">
              Follow us
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/about">
                  <div
                    href="#"
                    className="cursor-pointer dark:text-gray-200 text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                  >
                    <ion-icon
                      name="logo-twitter"
                      class="dark:text-gray-200 text-3xl"
                    ></ion-icon>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center w-full text-center md:justify-between py-4 md:py-8">
          {/* Social links */}

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 items-center dark:text-gray-200 mr-4">
            <a
              className="text-blue-600 dark:text-gray-200 hover:underline"
              href="https://netlify.schain.com/"
            >
              @schain 2022
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
