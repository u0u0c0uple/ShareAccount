import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountMainComponent = () => {
  const navigate = useNavigate();

  const testing = () => {
    navigate('/account/create');
  }

  return (
    <div className="pt-32 w-full h-full">
      <h1>
        Hi, I'm Main Component;
      </h1>
      <button className="ml-2 w-24 h-10 btn-basic"
      onClick={testing}>Testing Create</button>
    </div>
  )
}

export default AccountMainComponent;