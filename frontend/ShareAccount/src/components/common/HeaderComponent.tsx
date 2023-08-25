import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  /**
   * @TODO Header 메뉴에서 링크마다 볼드 강조 다르게
   */
  const navigate = useNavigate();

  return (
    <div className="flex bg-slate-50 w-screen h-28 fixed drop-shadow-xl z-9">
      {/* section 1 */}
      {/* 작아졌을 때에는 햄버거 버튼 표시 */}
      <div className="flex w-1/2 max-w-lg min-w-fit h-full basis-1/2">
        {/* Logo */}
        <div className="w-1/3 h-full basis-1/3 relative">
          <img src="/src/assets/image/logo_icon_80.png" alt="logo"
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
        </div>
        <div className="flex w-2/3 h-full basis-2/3 justify-around">
          <a className={`my-auto text-xl font-semibold basis-1/4`} onClick={() => navigate('/account')}>가계부</a>
          <a className={`my-auto text-xl basis-1/4`} onClick={() => navigate('/')}>일기</a>
          <a className={`my-auto text-xl basis-1/4`} onClick={() => navigate('/account')}>기프티콘</a>
          <a className={`my-auto text-xl basis-1/4`} onClick={() => navigate('/account')}>우리</a>
        </div>
      </div>
      {/* section 2 */}
      <div className="relative w-1/2 basis-1/2">
        {/* User Profile */}
        <div className="flex absolute w-full h-full justify-end pr-8">
          {/* Text Area */}
          <div className="flex flex-col align-middle my-auto">
            <p className="text-xl font-semibold text-gray-500">
              유유커플
            </p>
            <p className="text-lg text-gray-500">
              D+1000
            </p>
          </div>
          {/* Profile img Area */}
          <div className="flex h-1/2 my-auto">
            <img src="/src/assets/image/yy_profile_80.png" alt="yy_proflie"
            className="relative left-3 z-10" />
            <img src="/src/assets/image/yh_profile_80.png" alt="yh_proflie" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;