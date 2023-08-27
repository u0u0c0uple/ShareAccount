import React from 'react';

const CalendarComponent = () => {
  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-sm w-full shadow-lg">
        <div className="md:p-8 p-5 bg-white rounded-b-lg">
          {/* <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t"> */}
          <div className="px-4 flex items-center justify-between">
            <span
              tabIndex={0}
              // className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
              className="focus:outline-none  text-base font-bold text-gray-800"
            >
              2023년 8월
            </span>
            <div className="flex items-center">
              <button
                aria-label="calendar backward"
                // className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                className="focus:text-gray-400 hover:text-gray-400 text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              <button
                aria-label="calendar forward"
                // className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler  icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                <tr>
                  <td className="pt-3">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td className="pt-3">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td className="pt-3">
                    <div className="w-full h-full">
                      <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <a
                          role="link"
                          tabIndex={0}
                          className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 w-4 h-4 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                        >
                          8
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="pt-3">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className=" text-gray-500  font-medium">1</p>
                    </div>
                  </td>
                  <td className="pt-3">
                    <div className="cursor-pointer flex w-full justify-center">
                      <div className="bg-gray-400 w-1/2 h-6 rounded-sm"></div>
                    </div>
                    <div className="px-2 py-1 cursor-pointer flex w-full justify-center">
                      <p className="text-gray-500 font-medium">2</p>
                    </div>
                  </td>
                  <td className="pt-3">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className=" text-gray-500 ">3</p>
                    </div>
                  </td>
                  <td className="pt-3">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className=" text-gray-500 ">4</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
