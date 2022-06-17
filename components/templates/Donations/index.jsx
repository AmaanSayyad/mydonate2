import React from "react";
import Card from "./card";
import { CodeIcon } from "@heroicons/react/outline";
const Index = () => {
  return (
    <div>
      <p className="text-2xl py-4 dark:text-gray-100">Donations</p>
      <div className=" grid grid-col-1 md:grid-cols-3 gap-10 ">
        {/* <div className=" absolute bottom-0 z-40 right-0  w-5/12 md:w-1/12 md:h-full h-full bg-gradient-to-l from-[#ffffff] dark:from-gray-900  "></div>
        <div className=" flex overflow-x-scroll scrollbar-hide md:scrollbar-hide space-x-4 pt-4 pb-4 pl-2 pr-3 font-Montserrat text-gray-700 text-left w-full ">
          <div className=" flex-shrink-0 bg-white dark:bg-gray-600 dark:text-white  drop-shadow-lg rounded-xl flex flex-col items-center justify-center px-8 py-6 ">
            <CodeIcon className="h-14" />
            <p> Coding</p>
          </div>
          <div className=" flex-shrink-0 bg-white dark:bg-gray-600 dark:text-white   drop-shadow-lg rounded-xl flex flex-col items-center justify-center px-8 py-6 ">
            <CodeIcon className="h-14" />
            <p> Website</p>
            <p> Design</p>
          </div>
          <div className=" flex-shrink-0 bg-white dark:bg-gray-600 dark:text-white   drop-shadow-lg rounded-xl flex flex-col items-center justify-center px-8 py-6 ">
            <CodeIcon className="h-14" />
            <p> Mobile</p>
            <p> Design</p>
          </div>
          <div className="mr-36 flex-shrink-0 bg-white dark:bg-gray-600 dark:text-white  drop-shadow-lg rounded-xl flex flex-col items-center justify-center px-8 py-6 ">
            <CodeIcon className="h-14" />
            <p> Design</p>
          </div>
        </div> */}
        <Card
          title="Australia Fire Outbreak"
          description={`Supporting get of australias' fire Outbreak`}
          image={`dimage3.jpg`}
        />
        <Card
          title="Australia Fire Outbreak"
          description={`Supporting get of australias' fire Outbreak`}
          image={`dimage3.jpg`}
        />
        <Card
          title="Australia Fire Outbreak"
          description={`Supporting get of australias' fire Outbreak`}
          image={`dimage3.jpg`}
        />
        <Card
          title="Australia Fire Outbreak"
          description={`Supporting get of australias' fire Outbreak`}
          image={`dimage3.jpg`}
        />
        {/* card */}
      </div>
    </div>
  );
};

export default Index;
