import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layouts/primary';
import Donation from '../components/partials/Donation';
const Donation = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <Layout>
      <Donation id={id} />
    </Layout>
  );
};

export default Donation;
