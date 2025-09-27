import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react'
import { RouterProvider } from 'react-router-dom';
import { theme } from '@/shared/styles/theme'
import GlobalStyle from '@/shared/styles/global'
import router from '@/shared/router/Router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)