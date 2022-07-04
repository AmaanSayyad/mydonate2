import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layouts/primary';
import Donation from '../components/partials/Donation';
const Donatino = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <Layout>
      <Donation id={id} />
    </Layout>
  );
};

export default Donatino;
