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
      <div className="relative flex flex-row justify-between p-4 px-10 bg-[#ffffff] dark:bg-[#131212] dark:text-gray-200 rounded-2xl">
        <div className="text-center">
          <ion-icon
            name="heart-circle-outline"
            class="text-5xl text-[#E338C8] animate-pulse"
          ></ion-icon>
          <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
            20K
          </h1>
          <p className="text-xl ">Fundarisers</p>
        </div>

        <div className="text-center">
          <ion-icon
            name="person-add-outline"
            class="text-5xl text-[#E338C8] animate-pulse"
          ></ion-icon>
          <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
            10M
          </h1>
          <p className="text-xl ">People donated</p>
        </div>

        <div className="text-center">
          <ion-icon
            name="wallet-outline"
            class="text-5xl text-[#E338C8] animate-pulse"
          ></ion-icon>
          <h1 className="text-2xl font-semibold text-gray-600 darK:text-gray-300">
            500ETH+
          </h1>
          <p className="text-xl ">Amount raised</p>
        </div>
      </div>

      {/* <div className="relative flex flex-row justify-between dark:text-gray-200 rounded-2xl"> */}
      <div className="relative grid grid-cols-3 gap-10 dark:text-gray-200 rounded-2xl py-7">
        <div className="text-center bg-red-400 p-2 px-8 py-8 rounded-2xl">
          <ion-icon name="book-outline" class="text-6xl text-white "></ion-icon>
          <h1 className="text-2xl  text-gray-100 ">Education</h1>
        </div>

        <div className="text-center bg-yellow-400 p-2 px-8 py-8 rounded-2xl">
          <ion-icon
            name="flask-outline"
            class="text-6xl text-white "
          ></ion-icon>
          <h1 className="text-2xl  text-gray-100 ">Disaster</h1>
        </div>

        <div className="text-center bg-green-400 p-2 px-8 py-8 rounded-2xl">
          <ion-icon
            name="pulse-outline"
            class="text-6xl text-white "
          ></ion-icon>
          <h1 className="text-2xl  text-gray-100 ">Health</h1>
        </div>

        <div className="text-center bg-blue-400 p-2 px-8 py-8 rounded-2xl">
          <ion-icon
            name="fast-food-outline"
            class="text-6xl text-white "
          ></ion-icon>
          <h1 className="text-2xl  text-gray-100 ">Famine</h1>
        </div>

        <div className="text-center bg-pink-400 p-2 px-8 py-8 rounded-2xl">
          <ion-icon
            name="people-outline"
            class="text-6xl text-white "
          ></ion-icon>
          <h1 className="text-2xl  text-gray-100 ">Community</h1>
        </div>

        <div className="text-center bg-amber-600 p-2 px-8 py-8 rounded-2xl">
          <ion-icon name="sad-outline" class="text-6xl text-white "></ion-icon>
          <h1 className="text-2xl  text-gray-100 ">War</h1>
        </div>
      </div>
      <div className="relative flex flex-col space-y-1 ">
        <p className="text-2xl py-3 dark:text-gray-100">Trending Donations</p>
        <div className="flex flex-row ">
          <div class="w-6/12 h-full">
            <img
              src="/images/dimage.jpeg"
              className="object-cover h-96 rounded-2xl w-full"
            />
          </div>
          <div>
            <h2>EDUCARE</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
