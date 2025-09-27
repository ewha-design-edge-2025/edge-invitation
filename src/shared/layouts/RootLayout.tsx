import { Outlet } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import AppShell from '@/shared/layouts/AppShell';

const RootLayout = () => {
  const t = useTheme();
  return (
    <AppShell background={t.colors.white}>
      <Outlet />
    </AppShell>
  );
};

export default RootLayout;
