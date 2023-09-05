import React from 'react';
import AccountCardComponent from './AccountCardComponent';
import CalendarComponent from '../calendar/CalendarComponent';

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

  return (
    <div className="flex w-full h-full pt-32">
      {/* Callendar Area */}
      <div className="w-full basis-1/2 mt-4">
        <div className="mt-8 max-w-xl min-w-[40vw]">
          <CalendarComponent />
        </div>
      </div>
      {/* List Area */}
      <div className="w-full basis-1/2 mt-4">
        <div className="mx-16 mt-8 max-w-sm h-full">
          {/* + - Button Area */}
          <div className="w-full h-10 text-end">
            <a className="m-1 text-2xl font-semibold">-</a>
            <a className="m-1 text-2xl font-semibold">+</a>
          </div>
          {/* Card View List Area */}
          <div className="w-full h-full overflow-y-scroll">
            <AccountCardComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMainComponent;
