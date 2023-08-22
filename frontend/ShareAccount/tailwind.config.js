/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 모든 html 파일 경로 등록
    './**/*.html',
    './src/**/*.{html,js}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        
      },
      transitionDuration: {
        slow: '200ms',
        normal: '400ms',
        fast: '600ms',
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '32px',
      },
      dropShadow: {
        nobg: '0 0 0px 1000px #fff inset',
        card: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
    },
  },
  variants: {
    extend: {
      
    },
  },
};

