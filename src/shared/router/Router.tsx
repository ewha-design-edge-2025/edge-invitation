import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/shared/layouts/RootLayout';

import HomePage from '@/pages/home/page/HomePage';
import IntroductionPage from '@/pages/introduction/page/IntroductionPage';
import GuestBookPage from '@/pages/guestbook/page/GuestBookPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/introduction', element: <IntroductionPage /> },
      { path: '/guestbook', element: <GuestBookPage /> },
    ],
  },
]);

export default router;