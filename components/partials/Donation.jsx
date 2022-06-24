import React from 'react';
import StasCard from '../templates/home/statsCard';
import HeaderImage from '../templates/home/headerImages';
import Categories from '../templates/home/categories';
import Donations from '../templates/home/donations';
import TrendingDonation from '../templates/home/donations/trendingDonation';
function Home() {
  return (
    <div className="space-y-4 col-span-full lg:col-span-2">
      {/* <style>
  .no-spinners {
    -moz-appearance: textfield;
  }

  .no-spinners::-webkit-outer-spin-button,
  .no-spinners::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
</style> */}

      <section>
        <div class="relative max-w-screen-xl px-2 py-8 mx-auto">
          <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
              <div class="w-full h-full">
                <img
                  alt="Mobile Phone Stand"
                  class="object-cover rounded-xl w-full h-96"
                  src="/images/dimage5.jpg"
                />
              </div>
            </div>

            <div class="sticky top-0">
              <div class="flex justify-between">
                <div class="max-w-[35ch]">
                  <h1 class="text-2xl font-bold dark:text-gray-300">
                    Do you have 3 times meal a day?
                  </h1>

                  <div className="flex flex-row items-center space-x-2">
                    <ion-icon
                      name="cash-outline"
                      class="text-xl text-gray-200"
                    ></ion-icon>
                    <p class="text-lg font-bold dark:text-gray-200">
                      $119.99/$20,000.00
                    </p>
                  </div>
                </div>
              </div>

              <details class="relative mt-4 group">
                <summary class="block">
                  <div>
                    <div class="prose max-w-none group-open:hidden">
                      <p className="dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa veniam dicta beatae eos ex error culpa delectus rem
                        tenetur, architecto quam nesciunt, dolor veritatis nisi
                        minus inventore, rerum at recusandae?
                      </p>
                    </div>

                    <span class="mt-4  dark:text-gray-200 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Read More
                    </span>
                  </div>
                </summary>

                <div class="pb-6 prose max-w-none dark:text-gray-300">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa veniam dicta beatae eos ex error culpa delectus rem
                    tenetur, architecto quam nesciunt, dolor veritatis nisi
                    minus inventore, rerum at recusandae?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat nam sapiente nobis ea veritatis error consequatur
                    nisi exercitationem iure laudantium culpa, animi temporibus
                    non! Maxime et quisquam amet. A, deserunt!
                  </p>
                </div>
              </details>

              <form class="">
                {/* <fieldset> */}
                <div class="flex justify-between ">
                  <span class="text-base font-medium text-blue-700 dark:text-white">
                    Donations
                  </span>
                  <span class="text-sm font-medium text-blue-700 dark:text-white">
                    45%
                  </span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div class="bg-blue-600 h-4 rounded-full w-[45%]"></div>
                </div>

                <div class="flex justify-between py-4 ">
                  <span class="text-base font-medium text-gray-700 dark:text-white">
                    50+ Donated
                  </span>
                  <div className=" bg-blue-600 py-1 px-3 text-white text-lg rounded-full overflow-hidden mb-3 ">
                    5 days Left{' '}
                  </div>
                </div>
                {/* </fieldset> */}

                {/* <fieldset class=""> */}
                <button className="inline-block -mt-10 px-8 py-3 text-lg font-medium text-white transition  rounded-full w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 focus:outline-none focus:ring">
                  Donate
                </button>
                {/* </fieldset> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
