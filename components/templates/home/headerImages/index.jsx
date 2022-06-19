import React from 'react';
import GradientButton from '../../../utility/bottons/gradientButton';
const Index = () => {
  const handleClick = () => {
    alert('hey i am a reusable button');
  };
  return (
    <div className="flex flex-col-reverse  md:flex-row items-center mt-16">
      <div className="text-center md:text-left w-full">
        <h1 className="text-4xl md:text-[5rem] font-Raleway font-semibold w-full text-gray-600 dark:text-gray-300 leading-[60px] md:leading-none">
          Put a smile on someone's face
        </h1>
        <p className="md:text-xl mt-2 hidden md:block md:mt-3 text-lg text-gray-600 dark:text-gray-200 w-10/12 ">
          The most{' '}
          <span className="text-blue-600 italic font-bold">Transparent</span>{' '}
          donation platform on the internet. Donate in cryptos let us build a
          better world
        </p>
        {/* <div
          onClick={() => {
            setOpen(!open);
            if (!web3Provider) {
              alert('Please connect to a wallet');
              return;
            }
            setComp(<FundRaising provider={web3Provider} />);
          }}
          className="  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-5 text-center w-full md:w-max  px-6 py-3 rounded-full cursor-pointer text-white"
        >
          New Fundraising
        </div> */}
        <GradientButton
          onClick={() => {
            handleClick();
          }}
          title="New Fundraising"
        />
      </div>
      <div className="">
        <img src="/images/jumbo3.svg" />
      </div>
    </div>
  );
};

export default Index;
