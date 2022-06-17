import React from "react";
import Card from "./card";
const index = ({ name, color }) => {
  return (
    <>
      <p className="text-2xl py-2 dark:text-gray-100">Categories</p>
      <div className="relative grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6  md:gap-10 dark:text-gray-200 rounded-2xl pb-7">
        <Card name={"Education"} color={"bg-red-400"} icon={"book-outline"} />
        <Card
          name={"Disaster"}
          color={"bg-yellow-400"}
          icon={"flask-outline"}
        />
        <Card name={"Health"} color={"bg-green-400"} icon={"pulse-outline"} />
        <Card
          name={"Famine"}
          color={"bg-blue-400"}
          icon={"fast-food-outline"}
        />
        <Card
          name={"Community"}
          color={"bg-pink-400"}
          icon={"people-outline"}
        />
        <Card name={"War"} color={"bg-amber-600"} icon={"sad-outline"} />
      </div>
    </>
  );
};

export default index;
