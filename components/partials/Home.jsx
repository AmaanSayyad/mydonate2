import React from "react";
import {
  PencilAltIcon,
  PhotographIcon,
  VideoCameraIcon,
  CubeTransparentIcon,
  ChatIcon,
  EyeIcon,
  CashIcon,
  ShareIcon,
  LightningBoltIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
function Home() {
  return (
    <div className="space-y-4 col-span-full lg:col-span-2">
      <div className="flex flex-col-reverse  md:flex-row items-center mt-16">
        <div className="text-center md:text-left w-full">
          <h1 className="text-4xl md:text-6xl font-semibold w-full text-gray-600 dark:text-gray-300 leading-[60px] md:leading-none">
            Put a smile on someone's face
          </h1>
          <p className="md:text-xl mt-2 hidden md:block md:mt-3 text-lg text-gray-600 dark:text-gray-200 w-10/12 ">
            The most{" "}
            <span className="text-blue-600 italic font-bold">Transparent</span>{" "}
            donation platform on the internet. Donate in cryptos let us build a
            better world
          </p>
          <div
            onClick={() => {
              setOpen(!open);
              if (!web3Provider) {
                alert("Please connect to a wallet");
                return;
              }
              setComp(<FundRaising provider={web3Provider} />);
            }}
            className="  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-5 text-center w-full md:w-max  px-6 py-3 rounded-full cursor-pointer text-white"
          >
            New Fundraising
          </div>
        </div>
        <div className="">
          <img src="/images/jumbo2.svg" />
        </div>
      </div>
      <div className="relative grid grid-cols-1 gap-9 md:flex md:flex-row md:justify-around  p-4 px-10 bg-[#ffffff] dark:bg-[#131212] dark:text-gray-200 rounded-2xl">
        <div className="text-center">
          <ion-icon
            name="heart-circle-outline"
            class="text-5xl text-[#E338C8] "
          ></ion-icon>
          <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
            20K
          </h1>
          <p className="text-xl ">Fundarisers</p>
        </div>

        <div className="text-center">
          <ion-icon
            name="person-add-outline"
            class="text-5xl text-[#E338C8] "
          ></ion-icon>
          <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
            10M
          </h1>
          <p className="text-xl ">People donated</p>
        </div>

        <div className="text-center">
          <ion-icon
            name="wallet-outline"
            class="text-5xl text-[#E338C8] "
          ></ion-icon>
          <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
            500ETH+
          </h1>
          <p className="text-xl ">Amount raised</p>
        </div>
      </div>

      {/* <div className="relative flex flex-row justify-between dark:text-gray-200 rounded-2xl"> */}
      <div className="relative grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6  md:gap-10 dark:text-gray-200 rounded-2xl py-7">
        <div className="text-center bg-red-400 md:p-2 p-3 md:px-8 md:py-8 rounded-2xl">
          <ion-icon
            name="book-outline"
            class="md:text-6xl text-5xl text-white "
          ></ion-icon>
          <h1 className="md:text-2xl  text-xl text-gray-100 ">Education</h1>
        </div>

        <div className="text-center bg-yellow-400 md:p-2 p-3 md:px-8 md:py-8 rounded-2xl">
          <ion-icon
            name="flask-outline"
            class="md:text-6xl text-5xl text-white "
          ></ion-icon>
          <h1 className="md:text-2xl text-xl text-gray-100 ">Disaster</h1>
        </div>

        <div className="text-center bg-green-400 md:p-2 p-3 md:px-8 md:py-8 rounded-2xl">
          <ion-icon
            name="pulse-outline"
            class="md:text-6xl text-5xl text-white "
          ></ion-icon>
          <h1 className="md:text-2xl text-xl text-gray-100 ">Health</h1>
        </div>

        <div className="text-center bg-blue-400 md:p-2 p-3 md:px-8 md:py-8 rounded-2xl">
          <ion-icon
            name="fast-food-outline"
            class="md:text-6xl text-5xl text-white "
          ></ion-icon>
          <h1 className="md:text-2xl text-xl text-gray-100 ">Famine</h1>
        </div>

        <div className="text-center bg-pink-400 md:p-2 p-3 md:px-8 md:py-8 rounded-2xl">
          <ion-icon
            name="people-outline"
            class="md:text-6xl text-5xl text-white "
          ></ion-icon>
          <h1 className="md:text-2xl text-xl text-gray-100 ">Community</h1>
        </div>

        <div className="text-center bg-amber-600 md:p-2 p-3 md:px-8 md:py-8 rounded-2xl">
          <ion-icon
            name="sad-outline"
            class="md:text-6xl text-5xl text-white "
          ></ion-icon>
          <h1 className="md:text-2xl text-xl text-gray-100 "> War</h1>
        </div>
      </div>
      <div className="relative flex flex-col space-y-1 ">
        <p className="text-2xl py-4 dark:text-gray-100">Trending Donations</p>
        <div className="flex md:flex-row flex-col space-x-0 md:space-x-8 w-full">
          <div class="w-full md:w-6/12 h-full">
            <img
              src="/images/dimage.jpeg"
              className="object-cover h-96 rounded-2xl w-full"
            />
          </div>
          <div className="py-2">
            <h2 className="text-3xl font-semibold dark:text-gray-200">
              EDUCARE
            </h2>
            <p className="text-2xl dark:text-gray-100">
              Supporting Education in Africa
            </p>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="time-outline"
                class="text-2xl dark:text-gray-100"
              ></ion-icon>
              <p className="text-xl dark:text-gray-100">15 days more</p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="wallet-outline"
                class="text-2xl dark:text-gray-100"
              ></ion-icon>
              <p className="text-xl dark:text-gray-200">
                $1,000.00 / $10,000,000.00
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="earth-outline"
                class="text-2xl dark:text-gray-200"
              ></ion-icon>
              <p className="text-xl dark:text-gray-100">Ghana</p>
            </div>

            <div className="  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-2 text-center w-full md:w-max  px-6 py-3 rounded-full cursor-pointer text-white">
              View Details
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative flex flex-col space-y-8 "> */}
      <p className="text-2xl py-4 dark:text-gray-100">Donations</p>
      <div className="grid grid-col-1 md:grid-cols-3 gap-10 ">
        <div class="max-w-sm h-min bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#" className="w-full h-full">
            <img
              class="rounded-t-lg h-52  object-cover w-full"
              src="/images/dimage2.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Australia Fire Outbreak
              </h5>
            </a>
            <p class="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
              Supporting get of australias' fire Outbreak
            </p>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="time-outline"
                class="text-2xl dark:text-gray-100"
              ></ion-icon>
              <p className="text-xl dark:text-gray-100">15 days more</p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="wallet-outline"
                class="text-2xl dark:text-gray-100"
              ></ion-icon>
              <p className="text-xl w-max dark:text-gray-200">
                $1,000.00 / $1,000,000
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="earth-outline"
                class="text-2xl dark:text-gray-200"
              ></ion-icon>
              <p className="text-xl dark:text-gray-100">Ghana</p>
            </div>
            <a
              href="#"
              class="bg-gradient-to-r mt-4 from-indigo-500 via-purple-500 to-pink-500 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="max-w-sm h-min bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#" className="w-full h-full">
            <img
              class="rounded-t-lg h-52  object-cover w-full"
              src="/images/dimage3.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Corona Virus
              </h5>
            </a>
            <p class="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
              Supporting Global Pandemic Corona virus
            </p>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="time-outline"
                class="text-2xl dark:text-gray-100"
              ></ion-icon>
              <p className="text-xl dark:text-gray-100">15 days more</p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="wallet-outline"
                class="text-2xl dark:text-gray-100"
              ></ion-icon>
              <p className="text-xl w-max dark:text-gray-200">
                $1,000.00 / $1,000,000
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="earth-outline"
                class="text-2xl dark:text-gray-200"
              ></ion-icon>
              <p className="text-xl dark:text-gray-100">Ghana</p>
            </div>
            <a
              href="#"
              class="bg-gradient-to-r mt-4 from-indigo-500 via-purple-500 to-pink-500 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="max-w-sm h-min bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#" className="w-full h-full">
            <img
              class="rounded-t-lg h-52  object-cover w-full"
              src="/images/dimage4.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Russia vs Ukraine War
              </h5>
            </a>
            <p class="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
              Supporting less previlage in times of hardship
            </p>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="time-outline"
                class="text-2xl dark:text-gray-100"
              ></ion-icon>
              <p className="text-xl dark:text-gray-100">15 days more</p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="wallet-outline"
                class="text-2xl dark:text-gray-100"
              ></ion-icon>
              <p className="text-xl w-max dark:text-gray-200">
                $1,000.00 / $1,000,000
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="earth-outline"
                class="text-2xl dark:text-gray-200"
              ></ion-icon>
              <p className="text-xl dark:text-gray-100">Ghana</p>
            </div>
            <a
              href="#"
              class="bg-gradient-to-r mt-4 from-indigo-500 via-purple-500 to-pink-500 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="max-w-sm h-min bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#" className="w-full h-full">
            <img
              class="rounded-t-lg h-52  object-cover w-full"
              src="/images/dimage5.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Educare
              </h5>
            </a>
            <p class="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
              Supporting Education in Africa
            </p>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="time-outline"
                class="text-2xl dark:text-gray-100"
              ></ion-icon>
              <p className="text-xl dark:text-gray-100">15 days more</p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="wallet-outline"
                class="text-2xl dark:text-gray-100"
              ></ion-icon>
              <p className="text-xl w-max dark:text-gray-200">
                $1,000.00 / $1,000,000
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="earth-outline"
                class="text-2xl dark:text-gray-200"
              ></ion-icon>
              <p className="text-xl dark:text-gray-100">Ghana</p>
            </div>
            <a
              href="#"
              class="bg-gradient-to-r mt-4 from-indigo-500 via-purple-500 to-pink-500 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
