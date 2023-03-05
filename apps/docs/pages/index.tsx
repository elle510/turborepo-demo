import { NextPage } from 'next';
import React from 'react';

import { Button } from 'ui';
import { Button as TailButton } from 'ui-tailwind';

const Docs: NextPage = () => {
  const abc = 1;
  console.log('aaa');
  const cccd = 1;

  return (
    <div>
      <h1>Docs</h1>
      <Button />
      <TailButton label="TailButton" />
    </div>
  );
};

export default Docs;
