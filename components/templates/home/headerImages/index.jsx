import React, { useState } from 'react';
import GradientButton from '../../../utility/bottons/gradientButton';
import Modal from '../../../utility/modal';
import FundForm from '../../forms/fund';
import Link from 'next/link';
const Index = () => {
  const handleClick = () => {
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

        <Link href={'/fund'}>
          <GradientButton title="New Fundraising" />
        </Link>
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
        <FundForm />
      </Modal>
    </div>
  );
};

export default Index;
