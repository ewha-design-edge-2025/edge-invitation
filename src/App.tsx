import { RouterProvider } from 'react-router';
import router from '@/shared/router/Router';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;