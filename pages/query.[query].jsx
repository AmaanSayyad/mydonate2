import React from 'react';
import { useRouter } from 'next/router';

const Query = () => {
  const router = useRouter();
  const { search } = router.query;
  console.log(search);
  return <div>{search}</div>;
};

export default Query;
