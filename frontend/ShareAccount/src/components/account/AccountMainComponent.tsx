import React, { LabelHTMLAttributes, useEffect, useState } from 'react';
import AccountCardComponent from './AccountCardComponent';
import CalendarComponent from '../calendar/CalendarComponent';
import { useLocation, useNavigate } from 'react-router-dom';
import Wrapper from '../common/Wrapper';

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
  index: number;
  title: string;
  price: string;
}

interface CardPropsType {}

/**
 * @TOdo
 * 캘린더 만들고, 지출 내역 리스트 카드 뷰 만들기
 * 지출 장소의 분류를 이모지로 출력하고 날짜도 날짜인데 시간도 굳굳
 * 진행 중인지 정산이 완료 되었는지 모래시계와 체크 이모지로 표시
 * 우측 +- 버튼으로 추가 제거 할 지 아님 버튼을 따로 만들어둘지 고민
 * 토글? 토글! 토글 버튼 카드 뷰 안에 만들어서
 * 누르면 카드 뷰 커지고 상세 페이지 나오게 하기!.
 * 아토믹 디자인 패턴 적용할 지 말지 고민 해보기
 */

const AccountMainComponent = () => {
  // const [list, setList] = useState({});
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [routing, setRouting] = useState<string>('');
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
  const [listIndex, setListIndex] = useState<number>(0);

  useEffect(() => {
    setRouting(path);
  }, [path]);

  const addSpendList = () => {
    if (spendList != null) {
      const newList = [
        ...spendList,
        { index: listIndex + 1, title: spendTitle, price: spendPrice },
      ];
      setListIndex(listIndex + 1);
      setSpendList([...newList]);
    } else {
      const newList = [
        { index: listIndex, title: spendTitle, price: spendPrice },
      ];
      setSpendList([...newList]);
    }
  };

  const removeSpendList = (e: number) => {
    if (spendList != null) {
      let idx = 0;
      const newList: spendListType[] = spendList
        .filter((list: spendListType) => list.index !== e)
        .map((list: spendListType) => ({
          index: idx++,
          title: list.title,
          price: list.price,
        }));

      setSpendList([...newList]);
    }
  };

  return (
    <Wrapper>
      <div className="flex w-full h-full pt-32">
        {/* Callendar Area */}
        <div className="w-full basis-1/2 mt-4">
          <div className="mt-8 max-w-xl min-w-[40vw]">
            <CalendarComponent />
          </div>
        </div>
        {/* List Area */}
        <div className="w-full basis-1/2 mt-4">
          {routing == '/account' ? (
            <div className="mx-16 mt-8 max-w-sm h-full">
              {/* + - Button Area */}
              <div className="w-full h-10 text-end">
                <a className="m-1 text-2xl font-semibold">-</a>
                <a
                  className="m-1 text-2xl font-semibold"
                  onClick={() => navigate('/account/create')}
                >
                  +
                </a>
              </div>
              {/* Card View List Area */}
              <div className="w-full h-full overflow-y-scroll">
                <AccountCardComponent />
              </div>
            </div>
          ) : (
            /* Create input Form */
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
                        <div
                          className="flex flex-col mr-10"
                          key={`addmenu_${i}`}
                        >
                          <div className="flex w-full items-center">
                            <label
                              className="input-label self-center ml-0 mr-1"
                              onClick={() => removeSpendList(e.index)}
                            >{`-`}</label>
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
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default AccountMainComponent;
