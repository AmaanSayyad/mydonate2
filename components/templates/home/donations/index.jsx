import React, { useState, useMemo, useEffect, useContext } from 'react';
import Card from './card';
import { AuthContext } from '../../../../utils/AuthProvider';
import { numDaysBetween, truncateString } from '../../../../lib/utilities';
import { ethers } from 'ethers';
import Pagination from '../../../utility/pagination/Pagination';
const Index = () => {
  let PageSize = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const { address, signer, contract, provider, ethprice, chainId } =
    useContext(AuthContext);
  const [donations, setdonations] = useState([]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return donations.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  async function loadDonations() {
    const data = await contract?.fetchAllDonationItems();
    console.log(data);
    setdonations(data);
  }

  useEffect(() => {
    loadDonations();
  }, [contract]);

  return (
    <div>
      <p className="text-2xl py-4 dark:text-gray-100">Donations</p>
      <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-10 ">
        {donations
          ?.filter((p) => p.donationstatus.isApproved === true)
          ?.map((donation, index) => (
            <Card
              key={index}
              id={donation.id.toString()}
              title={donation.title}
              description={truncateString(donation.description, 30)}
              image={donation.hash}
              endDate={
                Math.round(
                  numDaysBetween(
                    Number(donation.endDate.toString()),
                    new Date()
                  )
                ) < 1
                  ? 'Donation Ended'
                  : Math.round(
                      numDaysBetween(
                        Number(donation.endDate.toString()),
                        new Date()
                      )
                    ) + ' Days Left'
              }
              targetedAmount={(
                Number(
                  ethers.utils.formatEther(donation.targetedAmount.toString())
                ) * ethprice
              ).toLocaleString()}
              country={donation.user.country}
            />
          ))
          .reverse()}
      </div>

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={donations?.length || 0}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Index;
