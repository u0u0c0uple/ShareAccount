import React from 'react';
import LoginComponent from '../components/auth/LoginComponent';
import Wrapper from '../components/common/Wrapper';

const MainContainer = () => {
  return (
    <Wrapper>
      <div className="flex w-screen h-screen bg-slate-400">
        <LoginComponent />
      </div>
    </Wrapper>
  );
};

export default MainContainer;
