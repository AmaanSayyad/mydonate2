import React from 'react';
import Card from './card';
import { CodeIcon } from '@heroicons/react/outline';
const Index = () => {
  return (
    <div>
      <p className="text-2xl py-4 dark:text-gray-100">Donations</p>
      <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-10 ">
        <Card
          title="Australia Fire Outbreak"
          description={`Supporting get of australias' fire Outbreak`}
          image={`dimage2.jpg`}
        />
        <Card
          title="Australia Fire Outbreak"
          description={`Supporting get of australias' fire Outbreak`}
          image={`dimage3.jpg`}
        />
        <Card
          title="Australia Fire Outbreak"
          description={`Supporting get of australias' fire Outbreak`}
          image={`dimage4.jpg`}
        />
        <Card
          title="Australia Fire Outbreak"
          description={`Supporting get of australias' fire Outbreak`}
          image={`dimage5.jpg`}
        />
        {/* card */}
      </div>
    </div>
  );
};

export default Index;
