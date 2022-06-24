import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layouts/primary';
import Donation from '../components/partials/Donation';
const Donatino = () => {
  const router = useRouter();
  const { id } = router.query;
  // return <div>Donatino {id}</div>;
  return (
    <Layout>
      <Donation />
    </Layout>
  );
};

export default Donatino;
