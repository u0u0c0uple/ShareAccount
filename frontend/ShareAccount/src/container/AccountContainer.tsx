import React, { useEffect, useState } from 'react';
import HeaderComponent from '../components/common/HeaderComponent';
import { useLocation } from 'react-router-dom';
import AccountMainComponent from '../components/account/AccountMainComponent';
import AccountCreateComponent from '../components/account/AccountCreateComponent';
import Wrapper from '../components/common/Wrapper';

const AccountContainer = () => {
  const path = useLocation().pathname;
  const [routing, setRouting] = useState<string>('');

  useEffect(() => {
    setRouting(path);
  }, [path]);
  return (
    <Wrapper>
      <div className="mb-28 w-full h-screen bg-white">
        <HeaderComponent />
        {/* {routing === '/account' ? (
          <AccountMainComponent />
        ) : (
          <AccountCreateComponent />
        )} */}
        <AccountMainComponent />
      </div>
    </Wrapper>
  );
};

export default AccountContainer;
