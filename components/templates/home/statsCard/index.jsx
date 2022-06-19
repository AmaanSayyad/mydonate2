import React from "react";

const Index = () => {
  return (
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
  );
};

export default Index;
