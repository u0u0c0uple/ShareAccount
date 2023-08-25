import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/common/HeaderComponent";
import { useLocation } from "react-router-dom";
import AccountMainComponent from "../components/account/AccountMainComponent";
import AccountCreateComponent from "../components/account/AccountCreateComponent";

const AccountContainer = () => {
  const path = useLocation().pathname;
  const [routing, setRouting] = useState<string>("");

  useEffect(() => {
    setRouting(path);
  }, [path]);
  return (
    <div className="mb-20 w-screen h-screen bg-white">
      <HeaderComponent />
      {routing === "/account" ? (
        <AccountMainComponent />
      ) : (
        <AccountCreateComponent />
      )}
    </div>
  )
}

export default AccountContainer;
