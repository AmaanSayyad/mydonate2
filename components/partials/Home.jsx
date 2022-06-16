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
      <div className="relative flex flex-row space-y-1 p-7 bg-[#ffffff] dark:bg-[#131212] dark:text-gray-200 rounded-2xl">
        <div className="text-center">
          <ion-icon
            name="heart-circle-outline"
            class="text-7xl text-[#E338C8]"
          ></ion-icon>
          <h1>20K</h1>
          <p>Fundarisers</p>
        </div>

        <div className="text-center">
          <ion-icon
            name="person-add-outline"
            class="text-7xl text-[#E338C8]"
          ></ion-icon>
          <h1>10M</h1>
          <p>People donated</p>
        </div>

        <div className="text-center">
          <ion-icon
            name="wallet-outline"
            class="text-7xl text-[#E338C8]"
          ></ion-icon>
          <h1>500ETH+</h1>
          <p>Amount raised</p>
        </div>
      </div>

      <div className="relative flex flex-col space-y-1 dark:bg-[#131212] dark:text-gray-200 bg-white rounded-2xl shadow-md">
        <div className="px-5 py-5">
          <div className="flex flex-row space-x-2 items-center ">
            <img src="/images/profile3.jpg" className="w-10 rounded-full" />
            <p className="text-sm">0xde....f55eb</p>
            <span className="bg-gray-600 w-2 h-2 rounded-full"></span>
            <p className="text-sm">1 hour ago</p>
          </div>
        </div>
        <div class="w-full h-full">
          <img src="/images/post1.jpg" className="object-cover h-96 w-full" />
        </div>
        <div className="p-5">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
          <div className="flex flex-row justify-between pt-4">
            <div className="flex flex-row items-center space-x-4">
              <div className="flex flex-row items-center space-x-1 ">
                <ChatIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>5</p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <EyeIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>1M</p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <CashIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>0.01 ETH</p>
              </div>
            </div>
            <div>
              <ShareIcon className="h-5 dark:text-gray-300 text-gray-600" />
            </div>
          </div>
        </div>
        <div className="px-5 flex flex-row items-center space-x-3 pb-5">
          <button className="bg-yellow-400 text-md space-x-2 rounded-full text-gray-800 flex flex-row px-5 py-1">
            <LightningBoltIcon className="h-5" />
            NFT-BUY
          </button>
          <button className="bg-green-400 text-md space-x-2 rounded-full text-white flex flex-row px-5 py-1">
            <PlusCircleIcon className="h-5 mr-1" />
            TIP
          </button>
        </div>
      </div>

      <div className="relative flex flex-col space-y-1 dark:bg-[#131212] dark:text-gray-200 bg-white rounded-2xl shadow-md">
        <div className="px-5 pt-5">
          <div className="flex flex-row space-x-2 items-center ">
            <img src="/images/profile3.jpg" className="w-10 rounded-full" />
            <p className="text-sm">0xde....f55eb</p>
            <span className="bg-gray-600 w-2 h-2 rounded-full"></span>
            <p className="text-sm">1 hour ago</p>
          </div>
        </div>

        <div className="p-5">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
          <div className="flex flex-row justify-between pt-2">
            <div className="flex flex-row items-center space-x-4">
              <div className="flex flex-row items-center space-x-1 ">
                <ChatIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>5</p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <EyeIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>1M</p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <CashIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>0.01 ETH</p>
              </div>
            </div>
            <div>
              <ShareIcon className="h-5 dark:text-gray-300 text-gray-600" />
            </div>
          </div>
        </div>
        <div className="px-5 flex flex-row items-center space-x-3 pb-5">
          <button className="bg-yellow-400 text-md space-x-2 rounded-full text-gray-800 flex flex-row px-5 py-1">
            <LightningBoltIcon className="h-5" />
            NFT-BUY
          </button>
          <button className="bg-green-400 text-md space-x-2 rounded-full text-white flex flex-row px-5 py-1">
            <PlusCircleIcon className="h-5 mr-1" />
            TIP
          </button>
        </div>
      </div>

      <div className="relative flex flex-col space-y-1 dark:bg-[#131212] dark:text-gray-200 bg-white rounded-2xl shadow-md">
        <div className="px-5 py-5">
          <div className="flex flex-row space-x-2 items-center ">
            <img src="/images/profile3.jpg" className="w-10 rounded-full" />
            <p className="text-sm">0xde....f55eb</p>
            <span className="bg-gray-600 w-2 h-2 rounded-full"></span>
            <p className="text-sm">1 hour ago</p>
          </div>
        </div>
        <div class="w-full h-full">
          <img src="/images/post2.jpg" className="object-cover h-96 w-full" />
        </div>
        <div className="p-5">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
          <div className="flex flex-row justify-between pt-4">
            <div className="flex flex-row items-center space-x-4">
              <div className="flex flex-row items-center space-x-1 ">
                <ChatIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>5</p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <EyeIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>1M</p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <CashIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>0.01 ETH</p>
              </div>
            </div>
            <div>
              <ShareIcon className="h-5 dark:text-gray-300 text-gray-600" />
            </div>
          </div>
        </div>
        <div className="px-5 flex flex-row items-center space-x-3 pb-5">
          <button className="bg-yellow-400 text-md space-x-2 rounded-full text-gray-800 flex flex-row px-5 py-1">
            <LightningBoltIcon className="h-5" />
            NFT-BUY
          </button>
          <button className="bg-green-400 text-md space-x-2 rounded-full text-white flex flex-row px-5 py-1">
            <PlusCircleIcon className="h-5 mr-1" />
            TIP
          </button>
        </div>
      </div>

      <div className="relative flex flex-col space-y-1 dark:bg-[#131212] dark:text-gray-200 bg-white rounded-2xl shadow-md">
        <div className="px-5 py-5">
          <div className="flex flex-row space-x-2 items-center ">
            <img src="/images/profile3.jpg" className="w-10 rounded-full" />
            <p className="text-sm">0xde....f55eb</p>
            <span className="bg-gray-600 w-2 h-2 rounded-full"></span>
            <p className="text-sm">1 hour ago</p>
          </div>
        </div>
        <div class="w-full h-full">
          <img src="/images/post3.jpg" className="object-cover h-96 w-full" />
        </div>
        <div className="p-5">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
          <div className="flex flex-row justify-between pt-4">
            <div className="flex flex-row items-center space-x-4">
              <div className="flex flex-row items-center space-x-1 ">
                <ChatIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>5</p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <EyeIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>1M</p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <CashIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>0.01 ETH</p>
              </div>
            </div>
            <div>
              <ShareIcon className="h-5 dark:text-gray-300 text-gray-600" />
            </div>
          </div>
        </div>
        <div className="px-5 flex flex-row items-center space-x-3 pb-5">
          <button className="bg-yellow-400 text-md space-x-2 rounded-full text-gray-800 flex flex-row px-5 py-1">
            <LightningBoltIcon className="h-5" />
            NFT-BUY
          </button>
          <button className="bg-green-400 text-md space-x-2 rounded-full text-white flex flex-row px-5 py-1">
            <PlusCircleIcon className="h-5 mr-1" />
            TIP
          </button>
        </div>
      </div>

      <div className="relative flex flex-col space-y-1 dark:bg-[#131212] dark:text-gray-200 bg-white rounded-2xl shadow-md">
        <div className="px-5 py-5">
          <div className="flex flex-row space-x-2 items-center ">
            <img src="/images/profile3.jpg" className="w-10 rounded-full" />
            <p className="text-sm">0xde....f55eb</p>
            <span className="bg-gray-600 w-2 h-2 rounded-full"></span>
            <p className="text-sm">1 hour ago</p>
          </div>
        </div>
        <div class="w-full h-full">
          <img src="/images/post6.jpg" className="object-cover h-96 w-full" />
        </div>
        <div className="p-5">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
          <div className="flex flex-row justify-between pt-4">
            <div className="flex flex-row items-center space-x-4">
              <div className="flex flex-row items-center space-x-1 ">
                <ChatIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>5</p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <EyeIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>1M</p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <CashIcon className="h-5 dark:text-gray-300 text-gray-600" />
                <p>0.01 ETH</p>
              </div>
            </div>
            <div>
              <ShareIcon className="h-5 dark:text-gray-300 text-gray-600" />
            </div>
          </div>
        </div>
        <div className="px-5 flex flex-row items-center space-x-3 pb-5">
          <button className="bg-yellow-400 text-md space-x-2 rounded-full text-gray-800 flex flex-row px-5 py-1">
            <LightningBoltIcon className="h-5" />
            NFT-BUY
          </button>
          <button className="bg-green-400 text-md space-x-2 rounded-full text-white flex flex-row px-5 py-1">
            <PlusCircleIcon className="h-5 mr-1" />
            TIP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
