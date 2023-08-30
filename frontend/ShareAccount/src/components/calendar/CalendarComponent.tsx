import React, { useEffect, useState } from 'react';

const CalendarComponent = () => {
  const date = new Date();
  const [now, setNow] = useState(date);
  const [month, setMonth] = useState<any[]>();

  const nextMonth = () => {
    const next = now.getMonth() + 1 > 11 ? 0 : now.getMonth() + 1;
    if (next == 0) {
      date.setFullYear(now.getFullYear() + 1);
      date.setMonth(next);
    } else {
      date.setFullYear(now.getFullYear());
      date.setMonth(next);
    }
    setNow(date);
  };

  const prevMonth = () => {
    const next = now.getMonth() - 1 < 0 ? 11 : now.getMonth() - 1;
    if (next == 11) {
      date.setFullYear(now.getFullYear() - 1);
      date.setMonth(next);
    } else {
      date.setFullYear(now.getFullYear());
      date.setMonth(next);
    }
    setNow(date);
  };

  const getWeeks = (_date: Date) => {
    const weeks = [];
    const date = new Date(_date);
    date.setDate(1);

    let week = [];

    while (true) {
      week.push(new Date(date));

      date.setDate(date.getDate() + 1);

      if (date.getMonth() != _date.getMonth()) {
        weeks.push(week);
        week = [];
        break;
      }

      if (date.getDay() == 1) {
        weeks.push(week);
        week = [];
      }
    }

    return weeks;
  };

  const makeMonth = (weeks: any[]) => {
    if (weeks[0].length < 7) {
      const arr = Array(7 - weeks[0].length).fill(0);
      const tmp = [...arr, ...weeks[0]];
      weeks[0] = tmp;
    }

    if (weeks[weeks.length - 1].length < 7) {
      const arr = Array(7 - weeks[weeks.length - 1].length).fill(0);
      const tmp = [...weeks[weeks.length - 1], ...arr];
      weeks[weeks.length - 1] = tmp;
    }

    return weeks;
  };

  const isToday = (day: Date) => {
    if (day.getDate() != date.getDate()) {
      return false;
    } else if (day.getMonth() != date.getMonth()) {
      return false;
    } else if (day.getFullYear() != date.getFullYear()) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    const newMonth = new Date(now);
    setMonth(makeMonth(getWeeks(newMonth)));
  }, [now]);

  return (
    <div className="flex items-center justify-center py-4 px-1 pl-2">
      <div className="max-w-md w-full shadow-lg">
        <div className="md:p-8 p-5 bg-white rounded-b-lg">
          {/* <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t"> */}
          <div className="px-4 flex items-center justify-between">
            <span
              tabIndex={0}
              // className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
              className="focus:outline-none  text-base font-bold text-gray-800"
            >
              {now.getFullYear()}년 {now.getMonth() + 1}월
            </span>
            <div className="flex items-center">
              <button
                aria-label="calendar backward"
                // className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                className="focus:text-gray-400 hover:text-gray-400 text-gray-800"
                onClick={prevMonth}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              <button
                aria-label="calendar forward"
                // className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800"
                onClick={nextMonth}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler  icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between pt-12 overflow-x-auto">
            {/* <table className="w-full text-gray-800 dark:text-gray-100"> */}
            <table className="w-full text-gray-800">
              <thead>
                <tr className="mb-6">
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center">월</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center ">화</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center ">수</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center ">목</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center ">금</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center ">토</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center ">일</p>
                    </div>
                  </th>
                </tr>
              </thead>
              {/* <tbody className="text-gray-500 dark:text-gray-100"> */}
              <tbody className="text-xs text-gray-500">
                {month != undefined &&
                  month.map((week, i) => (
                    <tr key={`week_${i}`}>
                      {week.map((day: Date | number, j: number) =>
                        typeof day == 'number' ? (
                          <td key={`day_${j}`} className="pt-3"></td>
                        ) : !isToday(day) ? (
                          <td key={`day_${j}`} className="pt-3">
                            <div className="cursor-pointer flex w-full justify-center">
                              <div className="bg-gray-400 w-1/2 h-6 rounded-sm"></div>
                            </div>
                            <div className="px-2 py-1 cursor-pointer flex w-full justify-center">
                              <p className="text-gray-500 font-medium p-1">
                                {day.getDate()}
                              </p>
                            </div>
                          </td>
                        ) : (
                          <td key={`day_${j}`} className="pt-3">
                            <div className="cursor-pointer flex w-full justify-center">
                              <div className="bg-gray-400 w-1/2 h-6 rounded-sm"></div>
                            </div>
                            <div className="px-2 py-1 cursor-pointer flex w-full justify-center">
                              <a
                                role="link"
                                tabIndex={0}
                                className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 p-1 flex items-center justify-center font-medium text-white bg-indigo-500 rounded-full"
                              >
                                {day.getDate()}
                              </a>
                            </div>
                          </td>
                        )
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
