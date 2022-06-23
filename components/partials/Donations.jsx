import React, { useState, useEffect } from 'react';
import HeaderImage from '../templates/home/headerImages';
import Categories from '../templates/home/categories';
import Donations from '../templates/home/donations';
import TrendingDonation from '../templates/home/donations/trendingDonation';
import Modal from '../utility/modal';
import axios from 'axios';
const Donation = () => {
  const [modal, setModal] = useState(false);
  const [countries, setcountries] = useState([]);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        // console.log(response.data);
        setcountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="space-y-4 mt-8 col-span-full lg:col-span-2">
      {/* <HeaderImage /> */}

      <div
        onClick={() => {
          setModal(true);
        }}
        className={`bg-gradient-to-r from-cyan-500 space-x-3 to-blue-500 mt-5 text-center w-max md:w-max items-center flex flex-row  px-6 py-3 rounded-full cursor-pointer text-white `}
      >
        <span>Filter</span>
        <ion-icon name="options-outline" class="text-2xl"></ion-icon>
        {/* <ion-icon name="funnel-outline" class="text-2xl"></ion-icon> */}
      </div>

      <Categories />
      <TrendingDonation />
      <Donations />

      <Modal
        state={modal}
        onClick={() => {
          setModal(false);
        }}
      >
        <p className="text-lg dark:text-gray-200 py-5">Filter Donations</p>
        <div className="space-y-4">
          <div className="dark:text-gray">
            <div className="">
              <label
                htmlFor="company-website"
                className="block text-md font-medium dark:text-gray-200 text-gray-700"
              >
                Search
              </label>

              <input
                type="search"
                placeholder="search......"
                id="base-input"
                class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          <div className="">
            <div className="">
              <label
                htmlFor="company-website"
                className="block text-md font-medium dark:text-gray-200 text-gray-700"
              >
                Filter by Country
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                {countries.map((country) => (
                  <option value="US">
                    {country.flag}
                    {country.name.common}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="">
            <div className="">
              <label
                htmlFor="company-website"
                className="block text-md font-medium dark:text-gray-200 text-gray-700"
              >
                Filter by Date
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
              </select>
            </div>
          </div>

          <div className="">
            <div className="">
              <label
                htmlFor="company-website"
                className="block text-md font-medium dark:text-gray-200 text-gray-700"
              >
                Filter by Category
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            className="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700   sm:w-auto sm:text-sm"
          >
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Donation;
