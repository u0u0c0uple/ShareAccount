import React, { useState } from 'react';

const AccountCardComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [list, setList] = useState([]);

  return (
    <div className={`flex flex-col w-full ${!isOpen ? `h-2/3` : `h-fit`} pb-4 drop-shadow-xl bg-slate-100 rounded-lg transition-[height] delay-200`}>
      {/* card header area */}
      <div className="flex w-full mt-4 mx-auto text-center">
        <p className="w-1/4 basis-1/4 text-xl text-gray-500">08:00</p>
        <p className="w-1/2 basis-1/2 text-xl font-semibold">이디야 커피</p>
        <p className={`w-1/4 basis-1/4 ${!isOpen ? `-scale-y-100` : ``} duration-200`}  onClick={() => setIsOpen(!isOpen)}>▲</p>
      </div>
      {isOpen && (
        <>
        {/* card body area */}
      {/* section 1 */}
      <div></div>
      {/* section 2 */}
      <div></div>
      {/* card footer area */}
      <div></div>
        </>
      )}
    </div>
  );
};

export default AccountCardComponent;
