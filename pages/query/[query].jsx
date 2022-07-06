import React from 'react';
import { useRouter } from 'next/router';

const Query = () => {
  const router = useRouter();
  const { query } = router.query;

  return <div>{query}</div>;
};

export default Query;
