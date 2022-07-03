import { UserGroupIcon, UserIcon } from '@heroicons/react/outline';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
export default function Fund() {
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

  const [tab, setTab] = useState(1);
  const [formInput, updateFormInput] = useState({
    name: '',
    country: '',
    city: '',
    address: '',
    website: '',
    facebook: '',
    twitter: '',
    instagram: '',
    youtube: '',
    purpose: '',
    targetedAmount: '',
    facebook: '',
    contact: '',
    residence: '',
    email: '',
    title: '',
    description: '',
    category: '',
    endDate: '',
  });

  const organization = (
    <>
      {' '}
      <p className="text-xl text-center pt-3">Organization</p>
      <div className="dark:text-gray">
        <div className="">
          <label
            htmlFor="company-website"
            className="block text-md font-medium dark:text-gray-200 text-gray-700"
          >
            Name
          </label>

          <input
            type="text"
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
            Country
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
      <div className=" flex flex-row justify-between space-x-4">
        <div className="w-full">
          <label
            htmlFor="company-website"
            className="block text-md font-medium dark:text-gray-200 text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            id="base-input"
            class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="company-website"
            className="block text-md font-medium dark:text-gray-200 text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="base-input"
            class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div className="dark:text-gray">
        <div className="">
          <label
            htmlFor="company-website"
            className="block text-md font-medium dark:text-gray-200 text-gray-700"
          >
            Website
          </label>

          <input
            type="text"
            id="base-input"
            class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="company-website"
          className="block text-md mb-2 font-medium dark:text-gray-200 text-gray-700"
        >
          Social media Handles
        </label>
        <div className=" flex flex-row justify-between space-x-4">
          <div className="w-full">
            <label
              htmlFor="company-website"
              className="block text-md font-medium dark:text-gray-200 text-gray-700"
            >
              Facebook
            </label>
            <input
              type="text"
              id="base-input"
              class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="company-website"
              className="block text-md font-medium dark:text-gray-200 text-gray-700"
            >
              Twitter
            </label>
            <input
              type="text"
              id="base-input"
              class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className=" flex pt-8 flex-row justify-between space-x-4">
          <div className="w-full">
            <label
              htmlFor="company-website"
              className="block text-md font-medium dark:text-gray-200 text-gray-700"
            >
              Instagram
            </label>
            <input
              type="text"
              id="base-input"
              class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="company-website"
              className="block text-md font-medium dark:text-gray-200 text-gray-700"
            >
              Youtube
            </label>
            <input
              type="text"
              id="base-input"
              class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="company-website"
          className="block text-md mb-2 font-medium dark:text-gray-200 text-gray-700"
        >
          Purpose of Fund
        </label>
        <textarea
          id="comment"
          rows="4"
          class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          //   class="px-0 w-full text-sm focus:outline-none text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          placeholder="Purpose of fund"
          required
        ></textarea>
      </div>
      <div className="dark:text-gray">
        <div className="">
          <label
            htmlFor="company-website"
            className="block text-md font-medium dark:text-gray-200 text-gray-700"
          >
            Account for fund (eth)
          </label>

          <input
            type="text"
            id="base-input"
            placeholder="0x0000000"
            class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-md font-medium dark:text-gray-200 text-gray-700">
          Business Document
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <ion-icon
              name="document-outline"
              class="text-4xl text-gray-600"
            ></ion-icon>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">PDF, DOCX, up to 10MB</p>
          </div>
        </div>
      </div>
    </>
  );

  const individual = (
    <>
      {/* <div className="px-4 py-5 dark:text-gray-200 bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 space-y-6 sm:p-6"> */}
      <p className="text-xl text-center pt-3">Individual</p>
      <div className="dark:text-gray">
        <div className="">
          <label
            htmlFor="company-website"
            className="block text-md font-medium dark:text-gray-200 text-gray-700"
          >
            Full Name
          </label>

          <input
            type="text"
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
            Country
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

      <div className=" flex flex-row justify-between space-x-4">
        <div className="w-full">
          <label
            htmlFor="company-website"
            className="block text-md font-medium dark:text-gray-200 text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            id="base-input"
            class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="company-website"
            className="block text-md font-medium dark:text-gray-200 text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="base-input"
            class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>

      <div className="dark:text-gray">
        <div className="">
          <label
            htmlFor="company-website"
            className="block text-md font-medium dark:text-gray-200 text-gray-700"
          >
            email
          </label>

          <input
            type="text"
            id="base-input"
            class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <div className=" flex pt-8 flex-row justify-between space-x-4">
          <div className="w-full">
            <label
              htmlFor="company-website"
              className="block text-md font-medium dark:text-gray-200 text-gray-700"
            >
              Contact
            </label>
            <input
              type="text"
              id="base-input"
              class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="company-website"
              className="block text-md font-medium dark:text-gray-200 text-gray-700"
            >
              Residence
            </label>
            <input
              type="text"
              id="base-input"
              class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="company-website"
          className="block text-md mb-2 font-medium dark:text-gray-200 text-gray-700"
        >
          Purpose of Fund
        </label>
        <textarea
          id="comment"
          rows="4"
          class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          //   class="px-0 w-full text-sm focus:outline-none text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          placeholder="Purpose of fund"
          required
        ></textarea>
      </div>

      <div className="dark:text-gray">
        <div className="">
          <label
            htmlFor="company-website"
            className="block text-md font-medium dark:text-gray-200 text-gray-700"
          >
            Account for fund (eth)
          </label>

          <input
            type="text"
            id="base-input"
            placeholder="0x0000000"
            class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-md font-medium dark:text-gray-200 text-gray-700">
          Other supporting Document(s)
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <ion-icon
              name="document-outline"
              class="text-4xl text-gray-600"
            ></ion-icon>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">PDF, DOCX, up to 10MB</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center ">
          <div className="pt-14 md:mt-0 md:col-span-2  w-full md:w-9/12">
            <p className="text-xl dark:text-gray-200 text-center py-3 font-bold">
              Start New Fundraising
            </p>
            <form action="#" method="POST">
              <div className="flex flex-row z-50 justify-center items-center">
                <div className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:border-2 -mb-5 shadow-md px-5 space-x-4 p-2 py-3 flex flex-row items-center rounded-full">
                  <span
                    onClick={() => {
                      setTab(0);
                    }}
                  >
                    <UserGroupIcon
                      class={`${
                        tab === 0
                          ? 'bg-blue-400  rounded-full px-4 text-white'
                          : ''
                      } h-8 cursor-pointer dark:text-gray-200  `}
                    />
                  </span>
                  <span className="dark:text-gray-300">|</span>
                  <span
                    onClick={() => {
                      setTab(1);
                    }}
                  >
                    <UserIcon
                      class={`${
                        tab === 1
                          ? 'bg-blue-400 px-4 rounded-full text-white'
                          : ''
                      } h-7 cursor-pointer dark:text-gray-200`}
                    />
                  </span>
                </div>
              </div>
              <div className="shadow sm:rounded-2xl  sm:overflow-hidden">
                {/* organization */}
                <div className="px-4 py-5 dark:text-gray-200 bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 space-y-6 sm:p-6">
                  {tab === 0 ? organization : tab === 1 ? individual : ''}

                  <p className="text-xl text-center pt-3">
                    Donation Information
                  </p>
                  <div className="space-y-4">
                    <div className="dark:text-gray">
                      <div className="">
                        <label
                          htmlFor="company-website"
                          className="block text-md font-medium dark:text-gray-200 text-gray-700"
                        >
                          Title
                        </label>

                        <input
                          type="text"
                          id="base-input"
                          class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company-website"
                        className="block text-md mb-2 font-medium dark:text-gray-200 text-gray-700"
                      >
                        Description
                      </label>
                      <textarea
                        id="comment"
                        rows="4"
                        class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        //   class="px-0 w-full text-sm focus:outline-none text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Purpose of fund"
                        required
                      ></textarea>
                    </div>

                    <div className="">
                      <div className="">
                        <label
                          htmlFor="company-website"
                          className="block text-md font-medium dark:text-gray-200 text-gray-700"
                        >
                          Category
                        </label>
                        <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Choose a category</option>
                          <option selected>War</option>
                          <option selected>Health</option>
                        </select>
                      </div>
                    </div>

                    <div className=" flex flex-row justify-between space-x-4">
                      <div className="w-full">
                        <label
                          htmlFor="company-website"
                          className="block text-md font-medium dark:text-gray-200 text-gray-700"
                        >
                          End Date
                        </label>
                        <input
                          type="date"
                          id="base-input"
                          class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="company-website"
                          className="block text-md font-medium dark:text-gray-200 text-gray-700"
                        >
                          Target
                        </label>
                        <input
                          type="text"
                          id="base-input"
                          class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-md font-medium dark:text-gray-200 text-gray-700">
                        Cover Image
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-md  font-medium rounded-full text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Upload{' '}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}
