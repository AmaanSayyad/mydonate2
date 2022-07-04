import { UserGroupIcon, UserIcon } from '@heroicons/react/outline';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../utils/AuthProvider';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { ethers } from 'ethers';
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');
export default function Fund() {
  const [countries, setcountries] = useState([]);
  const { signer, address } = useContext(AuthContext);
  console.log('signer', signer);
  console.log('address', address);
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
  const [loading, setloading] = useState(false);
  const [supportingDocument, setsupportingDocument] = useState(null);
  const [coverImageUrl, setCoverImageUrl] = useState(null);

  const [formInput, updateFormInput] = useState({
    name: '',
    country: '',
    city: '',
    address: '',
    account: '',
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
    userType: '',
  });

  console.log(formInput);

  async function onChangeSupportingDocument(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setsupportingDocument(url);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  async function onChangeCoverImage(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setCoverImageUrl(url);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  const onCreateDonation = async () => {
    const date = new Date(formInput.endDate);
    const amount_ = ethers.utils.parseUnits(
      formInput.targetedAmount.toString(),
      'ether'
    );
    let transaction = await signer.createDonation([
      0,
      '0x0000000000000000000000000000000000000000',
      [
        0,
        '0x0000000000000000000000000000000000000000',
        formInput.userType,
        formInput.country,
        formInput.city,
        formInput.email,
        formInput.address,
        false,
        formInput.website,
        formInput.facebook,
        formInput.twitter,
        formInput.instagram,
        formInput.youtube,
        supportingDocument,
      ],
      0,
      0,
      date,
      amount_,
      formInput.category,
      formInput.title,
      coverImageUrl,
      formInput.purpose,
      formInput.description,
      [false, false, 0, 0, false, false, 0],
    ]);
    setloading(true);
    await transaction.wait();
    setloading(false);
    alert('Order sent succesfully');
    //  window.location.reload();
  };

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
            placeholder="name of organization"
            required
            onChange={(e) =>
              updateFormInput({ ...formInput, name: e.target.value })
            }
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
            required
            id="countries"
            onChange={(e) =>
              updateFormInput({ ...formInput, contact: e.target.value })
            }
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            {countries.map((country) => (
              <option value={country.name.common}>
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
            required
            placeholder="city of the organization"
            onChange={(e) =>
              updateFormInput({ ...formInput, city: e.target.value })
            }
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
            required
            placeholder="address of the organization"
            onChange={(e) =>
              updateFormInput({ ...formInput, address: e.target.value })
            }
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
            placeholder="website"
            onChange={(e) =>
              updateFormInput({ ...formInput, website: e.target.value })
            }
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
              placeholder="facebook account url"
              onChange={(e) =>
                updateFormInput({ ...formInput, facebook: e.target.value })
              }
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
              placeholder="twitter account url"
              onChange={(e) =>
                updateFormInput({ ...formInput, twitter: e.target.value })
              }
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
              placeholder="instagram account url"
              onChange={(e) =>
                updateFormInput({ ...formInput, instagram: e.target.value })
              }
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
              placeholder="youtube account url"
              onChange={(e) =>
                updateFormInput({ ...formInput, youtube: e.target.value })
              }
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
          //   class="px-0 w-full text-sm \:outline-none text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          placeholder="Give us some reasons why you want to start this fund raising"
          onChange={(e) =>
            updateFormInput({ ...formInput, purpose: e.target.value })
          }
          required
        ></textarea>
      </div>
      <div className="dark:text-gray">
        <div className="">
          <label
            htmlFor="company-website"
            className="block text-md font-medium dark:text-gray-200 text-gray-700"
          >
            Account for fund (eth) (default account will be current eth address
            connected to the website)
          </label>

          <input
            type="text"
            id="base-input"
            placeholder="0x0000000"
            onChange={(e) =>
              updateFormInput({ ...formInput, account: e.target.value })
            }
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
                htmlFor="file-upload-organization"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload-organization"
                  name="file-upload-organization"
                  type="file"
                  required
                  className="sr-only"
                  onChange={onChangeSupportingDocument}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">JPEG, PNG, up to 10MB</p>
          </div>
        </div>
        {supportingDocument && (
          <img className="rounded mt-4" width="full" src={supportingDocument} />
        )}
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
            required
            onChange={(e) =>
              updateFormInput({ ...formInput, name: e.target.value })
            }
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
            required
            onChange={(e) =>
              updateFormInput({ ...formInput, country: e.target.value })
            }
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            {countries.map((country) => (
              <option value={country.name.common}>
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
            required
            onChange={(e) =>
              updateFormInput({ ...formInput, city: e.target.value })
            }
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
            required
            onChange={(e) =>
              updateFormInput({ ...formInput, address: e.target.value })
            }
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
            required
            onChange={(e) =>
              updateFormInput({ ...formInput, email: e.target.value })
            }
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
              required
              onChange={(e) =>
                updateFormInput({ ...formInput, contact: e.target.value })
              }
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
              required
              onChange={(e) =>
                updateFormInput({ ...formInput, residence: e.target.value })
              }
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
          onChange={(e) =>
            updateFormInput({ ...formInput, purpose: e.target.value })
          }
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
            Account for fund (eth) (default account will be the one connected to
            this website)
          </label>

          <input
            type="text"
            id="base-input"
            onChange={(e) =>
              updateFormInput({ ...formInput, account: e.target.value })
            }
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
                htmlFor="file-upload-individual"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload-individual"
                  name="file-upload-individual"
                  type="file"
                  className="sr-only"
                  required
                  onChange={onChangeSupportingDocument}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">JPEG, PNG, up to 10MB</p>
          </div>
        </div>
        {supportingDocument && (
          <img className="rounded mt-4" width="full" src={supportingDocument} />
        )}
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onCreateDonation();
              }}
            >
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
                          required
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              title: e.target.value,
                            })
                          }
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
                        onChange={(e) =>
                          updateFormInput({
                            ...formInput,
                            description: e.target.value,
                          })
                        }
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
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              category: e.target.value,
                            })
                          }
                          required
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Choose a category</option>
                          <option value={'war'}>War</option>
                          <option value={'health'}>Health</option>
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
                          required
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              endDate: e.target.value,
                            })
                          }
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
                          type="number"
                          id="base-input"
                          required
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              targetedAmount: e.target.value,
                            })
                          }
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
                              htmlFor="file-upload-donation"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload-donation"
                                name="file-upload-donation"
                                type="file"
                                className="sr-only"
                                onChange={onChangeCoverImage}
                              />
                            </label>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG up to 10MB
                          </p>
                        </div>
                      </div>
                      {coverImageUrl && (
                        <img
                          className="rounded mt-4"
                          width="full"
                          src={coverImageUrl}
                        />
                      )}
                    </div>

                    <div className="px-4 py-3 text-right sm:px-6">
                      <button
                        // onClick={() => {
                        // }}
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
