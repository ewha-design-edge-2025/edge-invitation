import { css } from '@emotion/react';
import Reset from './reset';

const GlobalStyle = css`
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700; font-style: normal; font-display: swap;
  }

  ${Reset}
  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    font-family: Pretendard, system-ui, "Noto Sans KR", "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
    min-height: 100dvh;
  }
`;

export default GlobalStyle; 