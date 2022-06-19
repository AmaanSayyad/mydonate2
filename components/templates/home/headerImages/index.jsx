import React, { useState } from 'react';
import GradientButton from '../../../utility/bottons/gradientButton';
import Modal from '../../../utility/modal';
import { ExclamationIcon } from '@heroicons/react/outline';

const Index = () => {
  const handleClick = () => {
    // alert('hey i am a reusable button');
    setModal(true);
  };

  const [modal, setModal] = useState(false);

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
      <Modal
        state={modal}
        onClick={() => {
          setModal(false);
        }}
      >
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <ExclamationIcon
                className="h-6 w-6 text-red-600"
                aria-hidden="true"
              />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <p
                as="h3"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Deactivate account
              </p>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed. This action cannot be
                  undone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Index;
