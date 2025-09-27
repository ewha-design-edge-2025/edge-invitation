import '@emotion/react';

export const theme = {
  colors: {
    lightLime: "#E8FFA9",
    white: "#FFFFFF",
    black: "#1E1E1E",

    gray000: "#EDEDED",
    gray100: "#D3D3D3",
    gray200: "#A9A9A9",

    lime60: "#E8FFA999",
  },
  fonts: {
    body_medium_16: { fontFamily: 'Pretendard', fontWeight: 500, fontSize: '16px', lineHeight: '160%', letterSpacing: '0px' },
    body_bold_16: { fontFamily: 'Pretendard', fontWeight: 700, fontSize: '16px', lineHeight: '160%', letterSpacing: '0px' },
    body_regular_14: { fontFamily: 'Pretendard', fontWeight: 400, fontSize: '14px', lineHeight: '160%', letterSpacing: '0px' },

    title_bold_20: { fontFamily: 'Pretendard', fontWeight: 700, fontSize: '20px', lineHeight: '160%', letterSpacing: '0px' },
    title_semibold_20: { fontFamily: 'Pretendard', fontWeight: 600, fontSize: '20px', lineHeight: '160%', letterSpacing: '0px' },
    title_semibold_14: { fontFamily: 'Pretendard', fontWeight: 600, fontSize: '14px', lineHeight: '150%', letterSpacing: '0px' },
  }
};

export type AppTheme = typeof theme;
export type ColorType = typeof theme.colors;
export type FontType = typeof theme.fonts;