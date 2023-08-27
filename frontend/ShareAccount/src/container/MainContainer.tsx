import React from 'react';
import LoginComponent from '../components/auth/LoginComponent';

const MainContainer = () => {
  return (
    <div className="flex w-screen h-screen bg-slate-400">
      <LoginComponent />
    </div>
  );
};

export default MainContainer;
