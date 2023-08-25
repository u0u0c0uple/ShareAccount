import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="w-2/3 mx-auto min-w-fit min-h-fit max-h-screen self-center">
      <div className="bg-white text-black w-full rounded-xl drop-shadow-lg p-4 py-8">
        <div className="h-1/2">
          <div className="h-full">
            <img
              className="min-h-min mx-auto"
              src="./src/assets/image/logo_400.png"
              alt="Login Logo Image"
            />
          </div>
        </div>
        <hr className="h-2 my-8 drop-shadow-md" />
        <div className="h-1/2 align-top">
          <div className="flex flex-col w-1/2 h-full max-w-xs min-w-min mx-auto">
            {/* 아이디 / 비밀번호 입력 창 */}
            <div className="flex flex-col my-2">
              <label className="text-left text-sm text-gray-600 ml-2">
                아이디
              </label>
              <input
                className="input-basic"
                type="text"
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="text-left text-sm text-gray-600 ml-2">
                비밀번호
              </label>
              <input
                className="input-basic"
                type="password"
              />
            </div>
            {/* 아이디 저장 */}
            <div className="text-left ml-2">
              <input type="checkbox" />
              <label className="text-left text-sm text-gray-800 ml-1">
                아이디 저장
              </label>
            </div>
            {/* 회원가입 링크 & 로그인 버튼 */}
            <div className="text-right">
              <a
                className="text-blue-500 mx-2 hover:font-semibold hover:underline underline-offset-2 duration-300"
                href="*"
              >
                회원가입
              </a>
              <button
                className="ml-2 w-24 h-10 btn-basic"
                onClick={() => navigate('/account')}
              >
                로그인
              </button>
            </div>
            {/* 아이디 혹은 비밀번호를 잊으셨나요 */}
            <div className="text-gray-400 mt-8 text-sm">
              <a
                href="*"
                className="underline hover:underline-offset-2 hover:font-bold duration-200"
              >
                아이디
              </a>{' '}
              혹은{' '}
              <a
                href="*"
                className="underline hover:underline-offset-2 hover:font-bold duration-200"
              >
                비밀번호
              </a>
              를 잊으셨나요?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
