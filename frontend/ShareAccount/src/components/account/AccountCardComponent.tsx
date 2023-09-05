import React, { useState } from 'react';

const AccountCardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState([]);

  return (
    <div
      className={`flex flex-col w-full ${
        isOpen ? `h-96` : `h-16`
      } pb-4 drop-shadow-xl bg-slate-100 rounded-lg transition-[height] delay-200 overflow-y-scroll`}
    >
      {/* card header area */}
      <div className="flex w-full mt-4 mx-auto text-center">
        <p className="w-1/4 basis-1/4 ml-2 text-xl text-gray-500">08:00</p>
        <p className="w-1/8 basis-1/8 mr-2">
          <img src="/src/assets/image/cafe.png" alt="category_cafe" />
        </p>
        <p className="w-1/2 basis-1/2 text-xl font-semibold text-start">
          이디야 커피
        </p>
        <p>
          <img src="/src/assets/image/progress.png" alt="progress_emoji" />
        </p>
        <p
          className={`w-1/4 basis-1/4 ${
            isOpen ? `-scale-y-100` : ``
          } duration-200`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ▼
        </p>
      </div>

      <div
        className={`${
          isOpen
            ? `opacity-100 max-h-[9999px]`
            : `opacity-0 max-h-0 pointer-events-none`
        } transition-all duration-200 delay-200 overflow-hidden`}
      >
        {/* card body area */}
        {/* section 1 */}
        <div className="mt-8 ml-4">
          <ul>
            <li>
              <div>
                <div className="flex px-5 py-1 h-fit">
                  <div className="flex basis-1/6">
                    <img
                      className="w-10 h-10"
                      src="/src/assets/image/yh_profile_80.png"
                      alt="yh_profile"
                    />
                  </div>
                  <p className="basis-1/2 ml-4 text-lg font-semibold text-start">
                    아메리카노
                  </p>
                  <p className="basis-1/3 text-end text-lg font-semibold text-blue-500">
                    3,500원
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="flex px-5 py-1 h-fit">
                  <div className="flex basis-1/6">
                    <img
                      src="/src/assets/image/yy_profile_80.png"
                      alt="yy_proflie"
                      className="w-10 h-10 relative -left-3 z-10"
                    />
                    <img
                      src="/src/assets/image/yh_profile_80.png"
                      alt="yh_proflie"
                      className="w-10 h-10 relative -left-6"
                    />
                  </div>
                  <p className="basis-1/2 ml-4 text-lg font-semibold text-start">
                    딸기 듬뿍 생크림...
                  </p>
                  <p className="basis-1/3 text-end text-lg font-semibold text-blue-500">
                    3,500원
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="flex px-5 py-1 h-fit">
                  <div className="flex basis-1/6">
                    <img
                      className="w-10 h-10"
                      src="/src/assets/image/yy_profile_80.png"
                      alt="yy_profile"
                    />
                  </div>
                  <p className="basis-1/2 ml-4 text-lg font-semibold text-start">
                    아메리카노
                  </p>
                  <p className="basis-1/3 text-end text-lg font-semibold text-gray-500">
                    3,500원
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* section 2 */}
        <div className="mt-4">
          <div className="flex text-gray-500">
            <div className="flex basis-1/4 align-middle">
              <p className="ml-4">계산</p>
              <p className="ml-2 text-black">유 영</p>
            </div>
            <div className="flex basis-1/4 justify-center">
              <p>정산</p>
              <img
                className="h-4 my-auto ml-2"
                src="/src/assets/image/progress.png"
                alt="progress_emoji"
              />
            </div>
          </div>
          <div className="flex mt-4 mx-4">
            <div className="flex basis-1/2">
              <img
                src="/src/assets/image/yy_profile_80.png"
                alt="yy_proflie"
                className="mx-4 md:w-8 md:h-8"
              />
              <p className="text-lg text-gray-500 font-semibold">0원</p>
            </div>
            <div className="flex basis-1/2">
              <img
                src="/src/assets/image/yh_profile_80.png"
                alt="yh_proflie"
                className="mx-4 md:w-8 md:h-8"
              />
              <p className="text-lg text-blue-500 font-semibold">5,250원</p>
            </div>
          </div>
        </div>
        {/* card footer area */}
        <div className="mt-4 mx-6 text-start">
          <p className="text-3xl font-bold">총 10,500원</p>
        </div>
      </div>
    </div>
  );
};

export default AccountCardComponent;
