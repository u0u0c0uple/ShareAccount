import React, { useState } from 'react';
import CalendarComponent from '../calendar/CalendarComponent';

interface spendAccountType {
  name: string;
  locatoin: string;
  spendData: string;
  spendList: [
    {
      name: string;
      amount: number;
      userId: string;
    },
  ];
}

interface spendListType {
  title: string;
  price: string;
}

/**
 * @todo
 * 지출 내역 생성할 때 지출 날짜와 지출 장소의 분류로 입력 폼 만들어주기
 */

const AccountCreateComponent = () => {
  const [account, setAccount] = useState<spendAccountType>({
    name: '',
    locatoin: '',
    spendData: '',
    spendList: [
      {
        name: '',
        amount: 0,
        userId: '',
      },
    ],
  });

  const [spendTitle, setSpendTitle] = useState('');
  const [spendPrice, setSpendPrice] = useState('');
  const [spendList, setSpendList] = useState<spendListType[] | null>(null);

  const addSpendList = () => {
    if (spendList != null) {
      const newList = [...spendList, { title: spendTitle, price: spendPrice }];
      setSpendList([...newList]);
    } else {
      const newList = [{ title: spendTitle, price: spendPrice }];
      setSpendList([...newList]);
    }
  };

  return (
    <div className="flex w-full h-full pt-32">
      {/* Callendar Area */}
      <div className="w-full basis-1/2 mt-4">
        <div className="mt-8 max-w-md min-w-[40vw]">
          <CalendarComponent />
        </div>
      </div>
      <div className="w-full basis-1/2 mt-4">
        {/* Create input Form */}
        <div className="mx-16 mt-8 max-w-sm">
          <p className="text-2xl font-bold text-start m-4 mx-10">
            지출 내역 입력
          </p>
          {/* input form */}
          <div className="flex flex-col">
            {/* 지출 장소 */}
            <div className="flex flex-col m-4 mx-12">
              <label className="input-label">지출 장소</label>
              <input className="input-basic" />
            </div>
            {/* 지출 장소의 주소 */}
            <div className="flex m-4 mt-0 mx-12 relative">
              <div className="flex flex-col w-full mr-10">
                <label className="input-label">지출 장소의 주소</label>
                <input className="input-basic" />
              </div>
              <div className="h-fit absolute bottom-0 right-0">
                <button className="w-8 h-8 p-1 ml-2 mt-2 bg-gray-500 rounded-md align-baseline">
                  <img
                    className="w-4/5 h-4/5 m-auto"
                    src="/src/assets/image/location-pin.png"
                    alt="지도 버튼"
                  />
                </button>
              </div>
            </div>
            {/* 메뉴 */}
            <div className="flex flex-col w-full m-4 mt-0 mx-12">
              <div className="flex flex-col mr-10">
                <label className="input-label">메뉴</label>
                <div className="flex w-full">
                  <input
                    className="w-2/3 input-basic text-sm mx-1 ml-0"
                    placeholder="메뉴 이름"
                    value={spendTitle}
                    onChange={(e) => setSpendTitle(e.target.value)}
                  />
                  <input
                    className="w-1/3 input-basic text-sm mx-1 mr-0"
                    placeholder="가격"
                    value={spendPrice}
                    onChange={(e) => setSpendPrice(e.target.value)}
                  />
                  <img
                    className="m-2 my-0 w-10 h-10"
                    src={`/src/assets/image/yh_profile_80.png`}
                    alt="user_proflie"
                  />
                </div>
              </div>
              <div id="addCanvas" className="max-h-48 overflow-y-scroll ">
                {spendList &&
                  spendList.length > 0 &&
                  spendList.map((e, i) => (
                    <div className="flex flex-col mr-10" key={`addmenu_${i}`}>
                      <div className="flex w-full items-center">
                        <label className="input-label self-center ml-0 mr-1">{`-`}</label>
                        <input
                          className="w-2/3 input-basic mx-1 ml-0"
                          placeholder={e.title}
                          value={e.title}
                          disabled
                        />
                        <input
                          className="w-1/3 input-basic mx-1 mr-0"
                          placeholder={e.price}
                          value={e.price}
                          disabled
                        />
                        <img
                          className="m-2 my-0 w-10 h-10"
                          src={`/src/assets/image/yh_profile_80.png`}
                          alt="user_proflie"
                        />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex flex-col w-full mt-2 ml-1 text-left text-gray-500 hover:text-black hover:text-bold hover:drop-shadow-lg duration-200">
                <a onClick={addSpendList}> + 추가하기</a>
              </div>
            </div>
          </div>
          {/* button section */}
          <div className="text-end m-8">
            <button className="btn-basic w-24 h-10">등록하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCreateComponent;
