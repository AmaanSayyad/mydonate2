import React, { useEffect, useRef } from 'react';
import GradientButton from '../../../utility/bottons/gradientButton';
import Card from '../donations/tendingCards';
import Link from 'next/link';
const pinnedDonations = () => {
  return (
    <div className="relative flex flex-col space-y-1 ">
      <div className="flex flex-row items-center">
        <ion-icon
          name="pin-outline"
          class="text-3xl dark:text-white"
        ></ion-icon>
        <p className="text-2xl py-4 dark:text-gray-100">Pinned Donations</p>
      </div>

      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar snap-x">
        <div className="flex flex-nowrap mt-5">
          <div class="inline-block  px-3 snap-center">
            <Card
              title="Australia Fire Outbreak"
              description={`Supporting get of ...`}
              image={`dimage2.jpg`}
            />
          </div>
          <div class="inline-block px-3 snap-center">
            <Card
              title="Australia Fire Outbreak"
              description={`Supporting get of ....`}
              image={`dimage3.jpg`}
            />
          </div>
          <div class="inline-block px-3 snap-center">
            <Card
              title="Australia Fire Outbreak"
              description={`Supporting get of ....`}
              image={`dimage3.jpg`}
            />{' '}
          </div>
          <div class="inline-block px-3 snap-center">
            <Card
              title="Australia Fire Outbreak"
              description={`Supporting get of ....`}
              image={`dimage5.jpg`}
            />
          </div>
          <div class="inline-block px-3 snap-center">
            <Card
              title="Australia Fire Outbreak"
              description={`Supporting get of ....`}
              image={`dimage5.jpg`}
            />{' '}
          </div>
          <div class="inline-block px-3 snap-center">
            <Card
              title="Australia Fire Outbreak"
              description={`Supporting get of ....`}
              image={`dimage3.jpg`}
            />{' '}
          </div>
          <div class="inline-block px-3 snap-center">
            <Card
              title="Australia Fire Outbreak"
              description={`Supporting get of ....`}
              image="dimage5.jpg"
            />{' '}
          </div>
          <div class="inline-block px-3 snap-center">
            <Card
              title="Australia Fire Outbreak"
              description={`Supporting get of ....`}
              image={`dimage5.jpg`}
            />{' '}
          </div>
        </div>
        {/* </div> */}
      </div>
      <style></style>
    </div>
  );
};

export default pinnedDonations;
