import { createBrowserRouter } from 'react-router';

import { Cadrastro } from '../containers/Cadrastro';
import { Home } from '../containers/Home';
import { Login } from '../containers/Login';

export const router = createBrowserRouter([
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Cadrastro',
    element: <Cadrastro />,
  },
]);
